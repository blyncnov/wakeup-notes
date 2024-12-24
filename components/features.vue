<script>
const Features = [
    {
        id: 1,
        title: "Geolocation-Based Notes",
        description: "Automatically fetch and tag notes with your current location to discover and create content nearby.",
    }, {
        id: 2,
        title: "Passkey-Protected Private Notes",
        description: "Keep sensitive information safe with a passkey, ensuring only authorized users can access private notes.",
    }, {
        id: 3,
        title: "Location-Based Reminders",
        description: "Set reminders that trigger notifications when you arrive at or leave a specific location, helping you stay on top of tasks and plans.",
    }, {
        id: 4,
        title: "Public Note Discovery",
        description: "Explore notes left by others based on proximity and connect with the community through location-based content.",
    }, {
        id: 6,
        title: "Customizable Notifications",
        description: "Receive alerts when you're near a location with saved notes or when a new note is added nearby.",
    }, {
        id: 7,
        title: "Smart Filtering",
        description: "Easily search and sort notes by proximity, date, or content type, simplifying navigation and organization.",
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
    <div class="w-full">
        <Container>
            <div class="w-full grid grid-cols-1 md:grid-cols-2 rounded-xl text-secondary gap-2 md:gap-6 mb-12 md:mb-16">
                <div class="w-full">
                    <h3 class="text-2xl md:text-3xl !leading-[1.2] font-medium">
                        Discover and Secure Your World of Notes. Connect Memories to Places.
                    </h3>
                </div>


                <div class="w-full">
                    <p class="text-[18px] opacity-70 font-normal mb-3">
                        With seamless geolocation integration, this app allows you to leave notes that are tied to
                        specific locations.
                    </p>

                    <div class="w-full flex">
                        <NuxtLink to="/notes"
                            class="w-full md:w-auto justify-center group text-sms bg-secondary flex items-center gap-2 text-white rounded-xl px-4 py-2 border border-secondary">
                            <span>Discover Notes</span>
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


            <div class="w-full bg-secondary rounded-xl text-white">
                <div class="w-full min-w-full max-w-full">
                    <!-- Paper Cuts -->
                    <section
                        class="w-full cuts-corcle-container flex gap-6 mb-6 border-b border-gray-800 p-5 overflow-hidden">
                        <div class="w-full flex"
                            v-for="_cut in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]">
                            <div
                                class="w-5 h-5 bg-white hover:bg-red-500 rounded-full flex justify-center items-center transition-colors duration-300" />
                        </div>
                    </section>


                    <section class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-5 p-3 pt-0">
                        <div class="w-full h-full" v-for="feature in Features" :key="feature.id">
                            <div
                                class="w-full h-full shadow-sm p-4 rounded-xl bg-primary border-b-4 border-r-2 hover:translate-y-[4px] hover:border-b flex flex-col gap-2 transition-all duration-300">
                                <h2 class="text-xl !leading-[1.3]">{{ feature.title }}</h2>
                                <p class="text-[15px] text-white/90">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </Container>
    </div>
</template>
