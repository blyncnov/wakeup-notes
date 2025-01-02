<script setup lang="ts">
const { data: notes, error } = await useFetch('/api/notes', {
    lazy: true,
    cache: 'no-store',
});

function reloadPage(lat: number, lng: number) {
    location.reload();
}

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface Position {
    coords: Coordinates;
}

function updateURLWithLocation(lat: number, lng: number): void {
    const url = new URL(window.location.href);

    // Add lat and lng as query parameters
    url.searchParams.set('lat', lat.toString());
    url.searchParams.set('lng', lng.toString());

    // Push the new URL to the browser without reloading the page
    window.history.pushState({}, '', url);
}

function showPosition(position: { coords: { latitude: number; longitude: number; }; }) {
    console.log(`Latitude: ${position.coords.latitude}`)
    console.log(`Longitude: ${position.coords.longitude}`)

    // Call function to update the URL with lat/lng
    updateURLWithLocation(position.coords.latitude, position.coords.longitude);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

onMounted(() => {
    getLocation();
});

</script>

<template>
    <div class="w-full py-10">
        <Container>
            <div class="w-full h-full bg-transparent rounded-xl text-secondary">
                <h3 class="text-xl md:text-2xl font-normal opacity-85">Nearby Notes</h3>

                <!-- Loading State -->
                <div v-if="!notes" class="mt-6">
                    <p>Loading...</p>
                </div>

                <!-- Error State -->
                <div v-else-if="error" class="mt-6">
                    <p>Error loading notes.</p>
                </div>

                <!-- Empty State -->
                <div v-else-if="notes.length === 0" class="w-full mt-6">
                    <p class="opacity-90"> No data Found</p>
                </div>

                <!-- Notes -->
                <div v-else class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-6">
                    <div v-for="(note, index) in notes" :key="index">
                        <NoteCard :note="note" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
