<template>
  <div >
     <component
            v-bind="block"
            :is="block.component"
            v-for="(block, index) in blocks"
            :key="index"
        />
            <component v-bind="modal" :is="'Modal'" v-for="modal in modals" :key="modal.uuid" />
            <v-codyhouse-components-sample />
            <!-- <Modal /> -->
</div>
</template>

<script>
// import v from 'v-codyhouse-componentz'
// console.log(`v`, v)
import { modals, blocks }  from './blocks'
// console.log(`v`, v())
export default {
  name: 'HelloWorld',
  // components: { Modal },
  props: {
    msg: String
  },
  data() {
    return {
      modals,
      blocks
    }
  },
  mounted() {
    // console.log(`this modal`, this.$refs.modal)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
