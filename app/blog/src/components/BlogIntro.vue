<script setup lang="ts">
import { useStore } from "vuex";
const store = useStore();
console.log(store.state);
</script>
<template>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      From the blog
    </h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">
      Learn how to grow your business with our Vue experts.
    </p>
    <button
      v-if="!$store?.state?.isAuth"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign up
    </button>
  </div>
</template>
