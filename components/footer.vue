<template>
    <div className="relative w-full">
        <Container>
            <div className="relative flex flex-wrap items-center justify-between gap-1 py-8">
                <div>
                    <NuxtLink to="/" class="w-auto text-gray-800 text-lg flex items-center gap-x-1.5 font-medium">
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

                <div className="flex flex-col items-center justify-center">
                    <div className="text-sm text-gray-200">
                        Developed By <a href="https://jeremytechie.com">Jeremytechie</a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
