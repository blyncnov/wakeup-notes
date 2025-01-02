<script setup lang="ts">
const { data: notes, error } = await useFetch('/api/notes', {
    lazy: true,
    cache: 'no-store',
});

</script>

<template>
    <div class="w-full py-10">
        <Container>
            <div class="w-full h-full bg-transparent rounded-xl text-secondary">
                <h3 class="text-xl md:text-2xl font-normal opacity-85">Nearby Notes</h3>

                <!-- Loading State -->
                <div v-if="!notes" class="mt-6">
                    <p>Loading...</p>
                </div>

                <!-- Error State -->
                <div v-else-if="error" class="mt-6">
                    <p>Error loading notes.</p>
                </div>

                <!-- Empty State -->
                <div v-else-if="notes.length === 0" class="w-full mt-6">
                    <p class="opacity-90"> No data Found</p>
                </div>

                <!-- Notes -->
                <div v-else class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-6">
                    <div v-for="(note, index) in notes" :key="index">
                        <NoteCard :note="note" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
s
