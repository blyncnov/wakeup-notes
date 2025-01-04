<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { NoteProps } from '~/types';

const Notes = ref<NoteProps[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

async function fetchNotes(lat: number, lng: number) {
    await $fetch('/api/notes', {
        method: 'POST',
        body: { lat, lng }
    }).then((res) => {
        // Update the Notes ref with the response data
        Notes.value = res.data ?? []
    }).catch((err) => {
        error.value = err.message;
    }).finally(() => {
        isLoading.value = false;
    });
}

onMounted(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const url = new URL(window.location.href);

                url.searchParams.set('lat', latitude.toString());
                url.searchParams.set('lng', longitude.toString());
                window.history.pushState({}, '', url);

                await fetchNotes(latitude, longitude);
            },
            (err) => {
                error.value = err.message;
                isLoading.value = false;
            }
        );
    } else {
        error.value = 'Geolocation is not supported by this browser.';
        isLoading.value = false;
    }
});
</script>

<template>
    <div class="w-full py-10">
        <Container>
            <div class="w-full h-full bg-transparent rounded-xl text-secondary">
                <h3 class="text-xl md:text-2xl font-normal opacity-85">Nearby Notes</h3>

                <div v-if="isLoading" class="w-full mt-6">
                    <p>Loading...</p>
                </div>

                <div v-else-if="error" class="w-full mt-6">
                    <p>{{ error }}</p>
                </div>

                <div v-else-if="Notes.length === 0" class="w-full mt-6">
                    <p class="opacity-90">No data found</p>
                </div>

                <div v-else class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-6">
                    <div v-for="(note, index) in Notes" :key="index">
                        <NoteCard :note="note" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
