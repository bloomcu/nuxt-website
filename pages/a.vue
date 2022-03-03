<template>
  <div class="container max-width-sm padding-md">
    <h1>Page A</h1>
    <br><br>
    <NuxtLink to="/b">/b</NuxtLink>
    <br><br>
    <NuxtLink to="http://localhost:3000/b">http://localhost:3000/b</NuxtLink>
  </div>
</template>

<script>
export default {
  setup(context) {},
}
</script>
