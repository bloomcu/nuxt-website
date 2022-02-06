<template>
  <div class="js">
    <Hero :buttons="[
      {
        text: 'hello',
        trigger: '123'
      }
    ]" />
    <!-- <Modal uuid="123" title="The modal title" /> -->
    <Accordion  />
  </div>
</template>

<script >
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
import { Hero, Modal, Feature, ContentComponent, Accordion } from 'vite-codytestttt'
// import '../node_modules/codyhouse-framework/main/assets/css/style.css'
// import '../node_modules/vite-codytestttt/dist/style.css'
import { blocks, modals } from '../json/blocks'
export default {
  components: {
    Hero,
    Modal,
    Feature,
    ContentComponent,
    Accordion
    // Accordion
  },
  setup (props) {
    return {
      blocks,
      modals
    }
  }
}
// import '../node_modules/vite-codytestttt/dist/bundle.css'
// export default {
//    async asyncData({ $axios }) {
//      try {
//        const { data } = await $axios.get('/organizations/bloomcu/pages/1')
//        console.log(`data`, data?.data?.layout?.blocks)
//        /// /
//        return {
//          data
//        }
//      } catch (error) {
//        console.log(`error`, error)
//        return {
//          error
//        }
//      }
//    }
// }
</script>
