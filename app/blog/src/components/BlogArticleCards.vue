<script setup lang="ts">
import BlogArticleCard from "./BlogArticleCard.vue";
import { posts } from "../services/posts";
</script>
<template>
  <div
    class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
  >
    <BlogArticleCard v-for="post in posts" :post="post" :key="post.id" />
  </div>
</template>
