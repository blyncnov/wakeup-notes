<script lang="ts">
import TestCardsArray from "~/constants"

export default {
    setup() {
        const myNotes = ref(TestCardsArray);
        return { myNotes };
    }
};
</script>

<template>
    <div class="w-full py-12">
        <Container>
            <div class="w-full bg-transparent rounded-xl text-secondary">
                <h3 class="text-xl md:text-2xl font-normal opacity-85">Nearby Notes</h3>

                <div class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
                    <div v-for="(note, index) in myNotes" :key="index">
                        <NoteCard :note="note" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
