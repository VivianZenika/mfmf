<script setup lang="ts">
import { getCurrentInstance, isReactive } from "vue";
// je ne connaissais pas cette méthode. à priori, elle est dépréciée. https://github.com/vuejs/docs/issues/1422#issuecomment-1032120675
// tu ne peux pas utiliser une computed tout simplement
// en montrant l'accès au store, ce qui serait intéressant, ce serait de mentionner l'importance de coder de manière défensive quand on développe sur un microfront
// car finalement, on n'a pas forcément l'assurance que le host ait fourni une instance de store
const instance = getCurrentInstance();
console.log(
  "Is isAuth reactive?:",
  isReactive(instance?.appContext.provides.store.state)
);
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
