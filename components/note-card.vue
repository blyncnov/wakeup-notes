<script lang="ts">
import type { NoteProps } from "@/types";

export default {
    setup() {
        const isOpen = ref(false);
        return { isOpen };
    },
    props: {
        note: {
            type: Object as PropType<NoteProps>,
            required: true,
        },
    }
}
</script>

<template>
    <div
        class="w-full relative h-full shadow-sm p-4 rounded-xl border-[2px] border-primary bg-primary/50 flex flex-col justify-between gap-4">
        <div class="flex flex-col gap-1.5">
            <h2 class="text-2xl !leading-[1.3]"> {{ note.note_title }}</h2>
            <p class="text-base text-secondary">
                {{ note.note_description }}
            </p>
        </div>

        <div class="w-auto flex">
            <NuxtLink :to="`/notes/${note.id}`" v-if="note.note_visibility.toLowerCase() === 'public'">
                <button
                    class="w-auto group bg-secondary border border-secondary flex !text-sm justify-center items-center gap-x-2 rounded-xl px-3 py-1.5 text-gray-100">
                    <span>Open Note</span>
                    <span>
                        <svg xmlns=" http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </span>
                </button>
            </NuxtLink>

            <button v-else @click="isOpen = true"
                class="w-auto group bg-secondary border border-secondary flex !text-sm justify-center items-center gap-x-2 rounded-xl px-3 py-1.5 text-gray-100">
                <span>Open Note</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-lock">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                </span>
            </button>
        </div>

        <!--Unlock Note Modal -->
        <UnlockNoteModal :isOpen="isOpen" :note="note" />
    </div>
</template>
