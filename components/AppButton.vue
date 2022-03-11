<template>
  <component
    :is="$attrs.href ? 'a' : 'button'"
    class="btn"
    :class="classBinds"
    @click="toggle(trigger)"
  >
    {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { appendToSet } from '@/helpers'
import useToggle from '@/composables/useToggle'

export default defineComponent({
  components: {},

  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    trigger: {
      type: String,
      default: ''
    },
    icon: Boolean
  },

  setup (props) {
    const { toggle } = useToggle()
    const classBinds = computed(() => {
      let classSet = ''
      // to check if the appended class needs to be spaced or not

      if (props.variant) {
        classSet = appendToSet(`btn--${props.variant}`, classSet)
      }
      if (props.size) {
        classSet = appendToSet(`btn--${props.size}`, classSet)
      }
      if (props.icon) {
        classSet = appendToSet('btn--icon', classSet)
      }
      return classSet
    })

    return {
      classBinds,
      toggle
    }
  }
})
</script>

<style lang="scss">

</style>
