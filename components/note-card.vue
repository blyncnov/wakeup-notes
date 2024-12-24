<script lang="ts">
export default {
    props: {
        note: {
            type: Number,
            required: true,
        },
    }
}
</script>

<template>
    <div class="w-full shadow-sm p-4 rounded-xl border-[1.2px] border-primary bg-primary/5 flex flex-col gap-4">
        <h2 class="text-2xl !leading-[1.3]">Location-Based Note-Taking Application.</h2>
        <p class="text-base text-gray-800">
            The app supports privacy with passkey-protected private notes, ensuring that sensitive
            content
            remains secure.
        </p>

        <div class="w-auto flex">
            <NuxtLink to="/notes/10">
                <button
                    class="w-auto group bg-secondary border border-secondary flex !text-sm justify-center items-center gap-x-2 rounded-xl px-3 py-1.5 text-gray-100">
                    <span>Open Note</span>
                    <span>
                        <svg xmlns=" http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </span>
                </button>
            </NuxtLink>
        </div>
    </div>
</template>
