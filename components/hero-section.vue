<template>
    <div class="w-full py-12 bg-[#d3cbd63e]">
        <Container>
            <div class="w-full max-w-4xl rounded-xl text-secondary flex flex-col gap-5">
                <h3 class="text-5xl !leading-[1.2] font-semibold">
                    Note-taking application with a unique twist and turns.
                </h3>

                <p class="text-lg opacity-70 font-normal">
                    Leave a note at your favorite spot, and it will be there when you return!
                    The app offers privacy with passkey-protected private notes, ensuring your sensitive content
                    stays secure.
                </p>

                <div class="w-full flex gap-4">
                    <NuxtLink to="notes"
                        class="w-auto group bg-secondary flex items-center gap-2 text-white rounded-xl px-4 py-2 border border-secondary">
                        <span> Find Nearby Notes</span>
                        <span>
                            <svg xmlns=" http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-arrow-right  group-hover:translate-x-0.5 transition-transform duration-300">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </Container>
    </div>
</template>
