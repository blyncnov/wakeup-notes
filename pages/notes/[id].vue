<script setup lang="ts">
const route = useRoute();

const noteId = route.params.id as string;
const { data: note, error } = await useFetch(`/api/notes/get-note`, {
    params: { id: noteId },
});

if (error.value) {
    console.error("Error fetching note:", error.value);
}

</script>

<template>
    <div class="w-ful py-12">
        <Container>

            <div class="w-full bg-secondary rounded-xl text-white">
                <section
                    class="w-full cuts-corcle-container flex gap-6 mb-6 border-b border-gray-800 p-5 overflow-hidden">
                    <div class="w-full flex"
                        v-for="cut in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"
                        :key="cut">
                        <div class="w-5 h-5 bg-white rounded-full flex justify-center items-center" />
                    </div>
                </section>

                <!-- Loading State -->
                <div v-if="!note" class="mt-6 p-5 text-lg">
                    <p>Note does not exist!</p>
                </div>

                <!-- Error State -->
                <div v-else-if="error" class="mt-6">
                    <p>Error loading notes.</p>
                </div>

                <div v-else class="w-full p-5">
                    <div>
                        <div class="d">
                            <div class="flex items-center gap-3">
                                <h2 class="text-2xl">{{ note?.note_title }}</h2>

                                <p class="text-base text-white">
                                    <span class="bg-blue py-1 px-2 rounded-full"> {{ note?.note_label }}</span>
                                </p>
                            </div>

                            <h3 class="text-base text-white mt-2">
                                {{ note?.note_description }}
                            </h3>

                            <hr class="border border-gray-800 my-6" />

                            <p class="text-base text-white mt-6 whitespace-pre-wrap">
                                {{ note?.note_content }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- <div class="w-auto mt-6 flex items-center justify-end gap-x-3">
                <NuxtLink to="/notes/edit" class="w-auto">
                    <button type="button"
                        class="w-auto group bg-blue/10 border border-blue flex !text-sm justify-center items-center gap-x-1.5 rounded-xl px-3 py-1.5 text-blue">
                        <span>Edit Note</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-file-pen-line group-hover:animate-bounce animate-none transition-all duration-150">
                                <path
                                    d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                                <path
                                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                                <path d="M8 18h1" />
                            </svg>
                        </span>
                    </button>
                </NuxtLink>

                <div class="w-auto">
                    <button type="button"
                        class="w-auto group bg-red-500/5 border border-red-500  flex !text-sm justify-center items-center gap-x-1.5 rounded-xl px-3 py-1.5 text-red-500">
                        <span>Delete Note</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-trash-2 group-hover:animate-bounce animate-none transition-all duration-150">
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                <line x1="10" x2="10" y1="11" y2="17" />
                                <line x1="14" x2="14" y1="11" y2="17" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div> -->
        </Container>
    </div>
</template>
