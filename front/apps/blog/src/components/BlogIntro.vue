<script setup lang="ts">
import { dispatchLogIn } from "../../../../packages/auth/Login";
import { useStore } from "../../../../packages/state";
import Button from "../../../../packages/ui/src/stories/Button.vue";
const store = useStore();
</script>
<template>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      From the blog
    </h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">
      Learn how to grow your business with our Vue experts.
    </p>
    <Button
      v-if="!store?.state?.isAuth"
      primary
      label="Log in"
      size="large"
      @click="dispatchLogIn"
    />
  </div>
</template>
.
