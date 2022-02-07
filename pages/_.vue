<template>
  <div>
    <!-- <nuxt-link to="/">Homepage</nuxt-link>
    <nuxt-link to="/checking">Checking</nuxt-link> -->

    <Navbar :menu="globals.header"/>

    <div v-if="post.layout">
      <component
        :is="block.component"
        v-for="(block, index) in post.layout.blocks"
        :key="index"
        v-bind="block.data"
      />
    </div>

    <!-- <Hero/> -->
    <!-- <Feature/> -->
    <!-- <Feature :invert="true" /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {


  setup(context) {
    // const menu = {
    //   title: 'Main Navigation',
    //   location: 'header',
    //   component: 'navbar',
    //   children: [
    //     {
    //       id: 1,
    //       title: 'Homepage',
    //       component: 'navbar-link',
    //       href: '/',
    //       trigger: '',
    //     },
    //     {
    //       id: 2,
    //       title: 'Accounts',
    //       component: 'navbar-link',
    //       href: '/checking',
    //       trigger: '',
    //     },
    //     {
    //       id: 3,
    //       title: 'Loans',
    //       component: 'navbar-link',
    //       href: '/loans',
    //       trigger: '',
    //     }
    //   ],
    //   secondary: [
    //     {
    //       id: 4,
    //       title: 'Get Started',
    //       component: 'navbar-button',
    //       href: '/get-started',
    //     },
    //   ]
    // }
    //
    // return {
    //   menu
    // }
  },

  asyncData({ params, $repository }) {
    return $repository.posts.show(params.pathMatch)
      .then(response => {
        return { post: response.data }
      })
  },

  computed: mapState(['globals'])
}
</script>
