<template>
<div>
  <nuxt-link to="/2">Homepage</nuxt-link>
  <nuxt-link to="/3">Checking</nuxt-link>

  <component
    :is="block.component"
    v-for="(block, index) in post.layout.blocks"
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
  asyncData({ params, $repository }) {
    return $repository.posts.show(params.slug)
    .then(response => {
      return { post: response.data }
    })
  }

  // async asyncData({ $axios }) {
  //   try {
  //     const { data } = await $axios.get('/posts/2')
  //     return {
  //       layout: data.data.layout
  //     }
  //   } catch (error) {
  //     return {error}
  //   }
  // }
}
</script>
