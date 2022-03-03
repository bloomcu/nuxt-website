<template>
  <div class="container max-width-sm padding-md">
    <h1>Page B</h1>
    <br><br>
    <NuxtLink to="/a">/a</NuxtLink>
    <br><br>
    <NuxtLink to="http://localhost:3000/b">http://localhost:3000/b</NuxtLink>
    <br><br>
    <NuxtLink to="https://www.google.com">https://www.google.com</NuxtLink>
  </div>
</template>

<script>
export default {
  setup(context) {},
}
</script>
