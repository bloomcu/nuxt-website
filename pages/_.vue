<template>
  <div>
    <Navbar :menu="globals.header"/>

    <div v-if="post.layout">
      <component
        :is="block.component"
        v-for="(block, index) in post.layout.blocks"
        :key="index"
        v-bind="block.data"
      />
    </div>

    <Footer :menu="globals.footer"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  setup(context) {},

  asyncData({ params, $repository }) {
    return $repository.posts.show(params.pathMatch)
      .then(response => {
        return { post: response.data }
      })
  },

  computed: mapState(['globals'])
}
</script>
