<template>
  <div class="container max-width-sm padding-md">
    <h1>Page A</h1>
    <br><br>
    <NuxtLink to="/b">/b</NuxtLink>
    <br><br>
    <NuxtLink to="https://nuxt-staging.bloomcu.com/b">https://nuxt-staging.bloomcu.com/b</NuxtLink>
    <br><br>
    <NuxtLink to="https://www.google.com">https://www.google.com</NuxtLink>
  </div>
</template>

<script>
export default {
  setup(context) {},
}
</script>
