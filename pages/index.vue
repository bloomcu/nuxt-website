<template>
<div>
  <component
    :is="block.component"
    v-for="(block, index) in layout.blocks"
    :key="index"
    v-bind="block.data"
  />

  <!-- <Hero/> -->
  <!-- <Feature/> -->
  <!-- <Feature :invert="true" /> -->
</div>
</template>

<script>
export default {

  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get('/posts/2')
      return {
        layout: data.data.layout
      }
    } catch (error) {
      return {error}
    }
  }
}
</script>
