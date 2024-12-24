<template>
    <nav class="navbar w-full py-4 shadow-sm sticky top-0 left-0 right-0 bg-white z-[999]">
        <Container>
            <div class="w-full flex items-center justify-between">
                <div class="w-auto">
                    <NuxtLink to="/" class="w-auto text-secondary text-lg flex items-center gap-x-1.5 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                            fill="#00dc8016" stroke="#00DC81" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-egg-fried">
                            <circle cx="11.5" cy="12.5" r="3.5" />
                            <path
                                d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" />
                        </svg>
                        <span>
                            Notes
                        </span>
                    </NuxtLink>

                </div>

                <div class="w-auto">
                    <NuxtLink to="/notes/create" class="w-auto">
                        <button
                            class="w-auto group bg-primary/10 border border-primary flex !text-sm justify-center items-center gap-x-1.5 rounded-xl px-3 py-1.5 text-primary">
                            <span>Get Started</span>
                            <span>
                                <svg xmlns=" http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </Container>
    </nav>
</template>
