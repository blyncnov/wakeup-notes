<script lang="ts" setup>
useHead({
  title: 'Spartial Notes',
  meta: [
    { name: 'description', content: 'Leave a note at your favorite spot, and it will be waiting for you when you return!' }
  ],
  script: [
    {
      // src: 'https://maps.googleapis.com/maps/api/js?key=<KEY>&libraries=places',
      src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`,
      async: true,  // Load asynchronously
      defer: true   // Defer execution until after the document is parsed
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
