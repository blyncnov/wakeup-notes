<script setup lang="ts">
import { ref } from "vue";
import type { NoteProps } from "~/types";

const notes = ref<NoteProps[]>([]);

const { data, error } = await useFetch('/api/notes', {
    lazy: true,
});

if (data.value) {
    notes.value = data.value as NoteProps[];
} else if (error.value) {
    console.error("Error fetching notes:", error.value);
}

</script>

<template>
    <div class="w-full py-12">
        <Container>
            <div class="w-full h-full bg-transparent rounded-xl text-secondary">
                <h3 class="text-xl md:text-2xl font-normal opacity-85">Nearby Notes</h3>

                <div v-if="notes.length === 0" class="w-full mt-6">
                    <p class="opacity-90"> No data Found</p>
                </div>

                <div v-else class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-6">
                    <div v-for="(note, index) in notes" :key="index">
                        <NoteCard :note="note" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
