<script setup lang="ts">
import { posts } from "../services/posts";
const articleId = Number(window.location.href.split("/").pop());
const post = posts.find((el) => el.id === articleId);
</script>

<template>
  <article :key="post?.id" class="flex flex-col items-start px-48">
    <div class="group relative">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        <a :href="post?.href">
          <span class="absolute inset-0" />
          {{ post?.title }}
        </a>
      </h1>
      <p class="mt-5 line-clamp-3 text-lg leading-6 text-gray-600">
        {{ post?.description }}
      </p>
    </div>
    <div class="relative w-full mt-4">
      <img
        :src="post?.imageUrl"
        alt=""
        class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
      />
      <div
        class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
      />
    </div>
  </article>
</template>
