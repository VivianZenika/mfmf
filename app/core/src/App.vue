<template>
  <div>
    <div class="bg-white px-6 py-12 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <RouterLink to="/">
          <h2
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            MF x MF
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Micro Front with Module Federation
          </p>
          <!-- <pre>{{ $store.state }}</pre> -->
        </RouterLink>
      </div>
    </div>
    <RouterView></RouterView>
  </div>
</template>
