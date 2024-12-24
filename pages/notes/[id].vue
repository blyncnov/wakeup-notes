<script setup lang="ts">
const route = useRoute();
</script>

<template>
    <div class="w-ful py-12">
        <Container>
            <div class="w-full rounded-xl text-white bg-black/5 p-4 border border-secondary shadow-sm shadow-gray-500">
                <div>
                    <h2 class="text-2xl">A Particular Single Note With ID - {{ route.params.id }}</h2>
                    <p class="text-base text-gray-300/70 mt-4">
                        The app supports privacy with passkey-protected private notes, ensuring that sensitive
                        content
                        remains secure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reiciendis
                        aspernatur facere culpa eum at voluptatum quidem, sit alias excepturi dolorem dicta! Neque saepe
                        sapiente, nihil laboriosam ut aliquam, rerum distinctio, quod cumque reprehenderit suscipit ex
                        et esse expedita necessitatibus?

                        <br>
                        <br>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reiciendis
                        aspernatur facere culpa eum at voluptatum quidem, sit alias excepturi dolorem dicta! Neque saepe
                        sapiente, nihil laboriosam ut aliquam, rerum distinctio, quod cumque reprehenderit suscipit ex
                        et esse expedita necessitatibus?
                    </p>
                </div>
            </div>

            <div class="w-auto mt-6 flex items-center justify-end gap-x-3">
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
            </div>
        </Container>
    </div>
</template>
