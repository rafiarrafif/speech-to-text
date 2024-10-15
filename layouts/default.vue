<template>
  <div>
    <nav class="w-full flex justify-center h-32 relative">
      <div
        class="absolute top-0 left-0 w-full h-full custom-gradient dark:opacity-30"
      />
      <h1 class="abslote z-20 text-4xl font-semibold -tracking-wide mt-12">
        Speech To Text
      </h1>
    </nav>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.custom-gradient {
  background-color: hsla(0, 0%, 0%, 0);
  background-image: radial-gradient(
      at 50% 0%,
      hsla(141, 68%, 56%, 0.5) 0px,
      transparent 50%
    ),
    radial-gradient(at 0% 0%, hsla(341, 0%, 0%, 0) 0px, transparent 50%);
}
</style>
