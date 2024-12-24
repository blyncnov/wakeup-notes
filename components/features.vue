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
                                class="w-full h-full shadow-sm p-4 rounded-xl bg-primary border-b-4 border-r-2 flex flex-col gap-2 transition-all duration-300">
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
