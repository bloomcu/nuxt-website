<template>
  <div>
    <!-- <Tutorial/> -->
     <component
            v-bind="block.data"
            :is="block.component"
            v-for="(block, index) in data.data.layout.blocks"
            :key="index"
        />
  </div>
</template>

<script>
export default {
   async asyncData({ $axios }) {
     try {      
       const { data } = await $axios.get('/organizations/bloomcu/pages/1')
       console.log(`data`, data?.data?.layout?.blocks)
       /// /
       return {
         data
       }
     } catch (error) {
       console.log(`error`, error)
       return {
         error
       }
     }
   }
}
</script>
