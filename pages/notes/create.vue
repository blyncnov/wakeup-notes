<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Reactive state for form inputs
const form = ref({
    note_title: "",
    note_description: "",
    note_content: "",
    note_label: "",
    note_visibility: "public",
    note_password: "",
    note_location: "",
    note_latitude: null,
    note_longitude: null,
});

// Form submission handler
const handleSubmit = async (event: Event) => {
    event.preventDefault();

    // Desctructure form data
    const { note_title, note_description, note_content, note_label, note_visibility, note_location, note_latitude, note_longitude, note_password } = form.value

    fetch('/api/notes/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            note_title,
            note_description,
            note_content,
            note_label,
            note_visibility,
            note_password,
            note_location,
            note_latitude,
            note_longitude,
        }),
    })
        .then((response) => response.json())
        .then(() => {
            // Redirect to notes page
            router.push('/notes')
        });
};
</script>

<template>
    <div class="w-full py-12">
        <Container>
            <div class="w-full flex flex-col gap-4">
                <div class="flex flex-col gap-2 mb-6">
                    <h1 class="text-3xl font-bold secondary">
                        Spartial Notes — Location Based Note Taking Application
                    </h1>
                    <p class="text-secondary">
                        Leave a note at your favorite location and it will be waiting for you the next time you visit!
                    </p>
                </div>

                <form @submit="handleSubmit" class="space-y-6">
                    <div class="grid gap-4 md:grid-cols-2">
                        <div>
                            <label for="note_title" class="mb-1 block text-sm font-medium">
                                Note Title
                            </label>
                            <input v-model="form.note_title" type="text" id="note_title" name="note_title"
                                placeholder="Your note title"
                                class="w-full bg-white border-gray-300 rounded-lg border-[1.2px] px-3 py-2 focus:border-blue-500 focus:outline-none" />
                        </div>

                        <div>
                            <label for="note_description" class="mb-1 block text-sm font-medium">
                                Note Description
                            </label>
                            <input v-model="form.note_description" type="text" id="note_description"
                                name="note_description" placeholder="Your full note description"
                                class="w-full bg-white border-gray-300 rounded-lg border-[1.2px] px-3 py-2 focus:border-blue-500 focus:outline-none" />
                        </div>
                    </div>

                    <div>
                        <label for="note_content" class="mb-1 block text-sm font-medium">
                            Note Content
                        </label>
                        <textarea v-model="form.note_content" id="note_content" name="note_content"
                            placeholder="A marketplace app connecting local farmers with restaurants"
                            class="w-full min-h-[120px] bg-white border-gray-300 rounded-lg border-[1.2px] px-3 py-2 focus:border-blue-500 focus:outline-none"
                            rows="4" required />
                    </div>

                    <div class="grid gap-4 md:grid-cols-2">
                        <div>
                            <label for="note_label" class="mb-1 block text-sm font-medium">
                                Note Label
                            </label>
                            <input v-model="form.note_label" type="text" id="note_label" name="note_label"
                                placeholder="Your note label"
                                class="w-full bg-white border-gray-300 rounded-lg border-[1.2px] px-3 py-2 focus:border-blue-500 focus:outline-none" />
                        </div>

                        <div>
                            <label for="note_visibility" class="mb-1 block text-sm font-medium">
                                Note Visibility
                            </label>
                            <select v-model="form.note_visibility" name="note_visibility" id="note_visibility"
                                class="w-full bg-white border-gray-300 rounded-lg border-[1.2px] px-3 py-2 focus:border-blue-500 focus:outline-none">
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>

                    <div v-if="form.note_visibility === 'private'">
                        <label for="note_password" class="mb-1 block text-sm font-medium">
                            Note Password
                        </label>
                        <input v-model="form.note_password" type="text" id="note_password" name="note_password"
                            placeholder="Your private note password"
                            class="w-full bg-white border-gray-300 rounded-lg border-[1.2px] px-3 py-2 focus:border-blue-500 focus:outline-none" />
                    </div>

                    <div>
                        <label for="note_location" class="mb-1 block text-sm font-medium">
                            Choose a Location
                        </label>
                        <input v-model="form.note_location" type="text" id="note_location" name="note_location"
                            placeholder="FUNAAB, Alabata Road, Abeokuta, Ogun State, Nigeria"
                            class="w-full bg-white border-gray-300 rounded-lg border-[1.2px] px-3 py-2 focus:border-blue-500 focus:outline-none" />
                    </div>

                    <div class="grid gap-4 md:grid-cols-2">
                        <div>
                            <label for="note_latitude" class="mb-1 block text-sm font-medium">
                                Latitude
                            </label>
                            <input v-model.number="form.note_latitude" type="number" step="any" id="note_latitude"
                                name="note_latitude" placeholder="33.6" class="w-full bg-white border-gray-300 rounded-lg border-[1.2px] px-3 py-2
                            focus:border-blue-500 focus:outline-none" />
                        </div>

                        <div>
                            <label for="note_longitude" class="mb-1 block text-sm font-medium">
                                Longitude
                            </label>
                            <input v-model.number="form.note_longitude" type="number" step="any" id="note_longitude"
                                name="note_longitude" placeholder="89.1"
                                class="w-full bg-white border-gray-300 rounded-lg border-[1.2px] px-3 py-2 focus:border-blue-500 focus:outline-none" />
                        </div>
                    </div>

                    <div class="w-full">
                        <button type="submit"
                            class="w-auto group bg-blue/5 border border-blue flex !text-sm justify-center items-center gap-x-1.5 rounded-xl px-4 py-2 text-blue">
                            <span>Create note</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-file-pen-line">
                                    <path
                                        d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                                    <path
                                        d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                                    <path d="M8 18h1" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    </div>
</template>
