<template>
    <div class="w-full">
        <Container>
            <div class="w-full relative bg-primary text-white rounded-xl overflow-hidden">
                <div class="w-full md:px-10 px-5 md:py-5 py-10">
                    <div class="w-full">
                        <h3 class="text-3xl !leading-[1.4] font-medium">
                            Connect Memories to Places.
                            <br>
                            Discover and Secure Your World of Notes.
                        </h3>

                        <p class="text-[18px] opacity-90 font-normal my-2">
                            Spartial Notes combines geolocation technology with privacy, allowing you to create
                            passkey-protected private notes for secure access. Whether it's a personal reminder or a
                            public message, your notes stay meaningful and connected to the places you love.
                        </p>

                        <div class="w-full flex">
                            <NuxtLink to="notes/create"
                                class="w-full md:w-auto justify-center group text-sms bg-secondary mt-2 flex items-center gap-2 text-white rounded-xl px-4 py-2 border border-secondary">
                                <span>Create New Notes</span>
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
                </div>

                <!-- Left Cuts -->
                <div
                    class="w-full md:w-[50px] h-[50px] md:h-full absolute md:-left-[calc(10px+25px)] left-0 -top-[calc(10px+25px)] md:top-0">
                    <div
                        class="flex gap-6 flex-row md:flex-col justify-between h-full overflow-hidden md:py-4 px-4 md:px-0">
                        <div class="w-full" v-for="cut in [1, 2, 3, 4, 5]" :key="cut">
                            <div
                                class="md:w-[50px] min-w-[10px] h-[50px] md:h-5 bg-white rounded-full border-2 border-secondary flex justify-center items-center">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Cuts -->
                <div
                    class="w-full md:w-[50px] h-[50px] md:h-full absolute md:-right-[calc(10px+25px)] right-0 -bottom-[calc(10px+25px)] md:bottom-0">
                    <div
                        class="flex gap-6 flex-row md:flex-col justify-between h-full overflow-hidden md:py-4 px-4 md:px-0">
                        <div class="w-full" v-for="cut in [1, 2, 3, 4, 5]" :key="cut">
                            <div
                                class="md:w-[50px] min-w-[10px] h-[50px] md:h-5 bg-white border-2 border-secondary rounded-full flex justify-center items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
