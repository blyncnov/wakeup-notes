<script>
const Features = [
    {
        id: 1,
        feature: "Automatically fetch and tag notes with your current location to discover notes nearby.",
    }, {
        id: 2,
        feature: "Keep sensitive information safe with a passkey, ensuring only authorized users can access private notes.",
    }, {
        id: 3,
        feature: "Set reminders that trigger notifications when you arrive at or leave a specific location",
    },
]


export default {
    data() {
        return {
            Features
        }
    }
}
</script>

<template>
    <div class="w-full md:py-12 py-8 bg-purple">
        <Container>
            <div class="w-full min-h-[250px] relative text-secondary grid grid-cols-1 md:grid-cols-2 gap-5">
                <section class="w-full h-full bg-white rounded-xl p-6">

                    <div class="w-full relative flex mb-6">
                        <NuxtLink to="/" class="w-auto text-secondary text-xl flex items-center gap-x-1.5 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"
                                fill="#00dc8016" stroke="#00DC81" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-egg-fried">
                                <circle cx="11.5" cy="12.5" r="3.5" />
                                <path
                                    d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" />
                            </svg>
                            <span>
                                Spartial Notes
                            </span>
                        </NuxtLink>
                    </div>

                    <div class="w-full flex flex-col space-y-6">
                        <h2 class="text-lg opacity-80 font-normal">
                            Leave a note at your favorite spot, and it will be waiting for you when you return!
                            It allows you to create passkey-protected
                            private notes for secure access.
                        </h2>

                        <div class="flex gap-4 flex-col justify-between h-full overflow-hidden">
                            <ul class="w-full" v-for="feature in Features">
                                <li class="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="green" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-check-check">
                                        <path d="M18 6 7 17l-5-5" />
                                        <path d="m22 10-7.5 7.5L13 16" />
                                    </svg>
                                    <span class="opacity-80"> {{ feature.feature }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="w-full h-full relative bg-white rounded-xl p-6">

                    <div>
                        <h3 class="text-xl text-center">Discover and Leave Notes on the Map</h3>

                        <div class="w-full mt-2">
                            <h3>dj</h3>
                        </div>
                    </div>

                    <div
                        class="w-full md:w-[50px] h-[50px] md:h-full bg-purple/5 absolute md:-left-[calc(10px+25px)] left-0 -top-[calc(10px+25px)] md:top-0">
                        <div
                            class="flex gap-6 flex-row md:flex-col justify-between h-full overflow-hidden md:py-4 px-4 md:px-0">
                            <div class="w-full" v-for="cut in [1, 2, 3, 4, 5, 6, 7]">
                                <div
                                    class="md:w-[50px] min-w-[10px] h-[50px] md:h-5 bg-purple rounded-full flex justify-center items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    </div>
</template>
