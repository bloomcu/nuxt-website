<template>
  <div>
    <Navbar :menu="globals.header"/>

    <SearchModal/>

    <div v-if="post">
      <component
        :is="block.component"
        v-for="(block, index) in post.blocks"
        :key="index"
        v-bind="block.data"
      />
    </div>

    <FooterV4 :menu="globals.footer"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  asyncData({ params, $repository }) {
    return $repository.posts.show(params.pathMatch)
      .then(response => {
        return { post: response.data }
      })
  },

  computed: {
    ...mapState(['globals', 'user'])
  }
}
</script>

<style lang="scss">

</style>
