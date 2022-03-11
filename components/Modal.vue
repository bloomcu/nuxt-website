<template>
  <div>
      <div
        id="modal-name-1"
        :class="active ? 'modal--is-visible' : ''"
        class="modal modal--animate-scale flex bg-black bg-opacity-90% js-modal"
      >
        <div
          class="modal__content width-100% max-height-100% overflow-auto bg radius-md inner-glow shadow-md"
          role="alertdialog"
          aria-labelledby="modal-title-1"
          aria-describedby="modal-description-1"
        >
          <!-- <ModalHeader
            :title="title"
            :uuid="uuid"
          /> -->
          <div class="padding-md">
            <!-- <component
              v-bind="block"
              :is="block.component"
              v-for="(block, index) in blocks"
              :key="index"
            /> -->
            <slot/>
          </div>
        </div>

        <button @click="toggle(uuid)" class="reset modal__close-btn modal__close-btn--outer display@md js-modal__close js-tab-focus">
          <svg class="icon icon--sm" viewBox="0 0 24 24">
            <title>Close modal window</title>
            <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="3" x2="21" y2="21" />
              <line x1="21" y1="3" x2="3" y2="21" />
            </g>
          </svg>
        </button>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import useToggle from '@/composables/useToggle'

export default defineComponent({
  components: {},

  props: {
    uuid: {
      type: String,
      default: ''
    }
  },

  setup (props) {
    const { isActive, toggle } = useToggle()
    const active = computed(() => isActive(props.uuid))

    return {
      toggle,
      active
    }
  }
})
</script>

<style lang="scss">
/* --------------------------------

File#: _1_modal-window
Title: Modal Window
Descr: A modal dialog used to display critical information
Usage: codyhouse.co/license

-------------------------------- */

.modal {
  position: fixed;
  justify-content: center;
  align-items: flex-start;
  padding: var(--space-xl) var(--space-md);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  visibility: hidden;
  z-index: var(--z-index-overlay, 15);

  &:not(.modal--is-visible) {
    pointer-events: none;
    background-color: transparent;
  }
}

.modal--is-visible {
  opacity: 1;
  visibility: visible;
}

.modal__content {
  max-width: var(--max-width-sm);
}

// close button
.modal__close-btn {
  display: flex;
  flex-shrink: 0;
  border-radius: 50%;
  transition: .2s;
  cursor: pointer;

  .icon {
    display: block;
    margin: auto;
  }
}

.modal__close-btn--outer { // close button - outside the modal__content
  width: 48px;
  height: 48px;
  position: fixed;
  top: var(--space-sm);
  right: var(--space-sm);
  z-index: var(--z-index-fixed-element, 10);
  background-color: var(--color-white);
  transition: .2s;

  .icon {
    color: var(--color-black); // icon color
    transition: transform .3s var(--ease-out-back);
  }

  &:hover {
    background-color: alpha(var(--color-white), 0.9);

    .icon {
      transform: scale(1.1);
    }
  }
}

.modal__close-btn--inner { // close button - inside the modal__content
  --size: 32px;
  width: var(--size);
  height: var(--size);
  background-color: var(--color-bg-light);
  box-shadow: var(--inner-glow), var(--shadow-sm);
  transition: .2s;

  .icon {
    color: inherit; // icon color
  }

  &:hover {
    background-color: var(--color-bg-lighter);
    box-shadow: var(--inner-glow), var(--shadow-md);
  }
}

// animations
:root {
  --modal-transition-duration: 0.2s; // fallback (i.e., unless specified differently in the variations 👇)
}

@media (prefers-reduced-motion: no-preference) {
  .modal--animate-fade {
    --modal-transition-duration: 0.2s;
    transition: opacity var(--modal-transition-duration), background-color var(--modal-transition-duration), visibility 0s var(--modal-transition-duration);

    &.modal--is-visible {
      transition: opacity var(--modal-transition-duration), background-color var(--modal-transition-duration), visibility 0s;
    }
  }

  .modal--animate-scale,
  .modal--animate-translate-up,
  .modal--animate-translate-down,
  .modal--animate-translate-right,
  .modal--animate-translate-left {
    --modal-transition-duration: .2s;
    transition: opacity var(--modal-transition-duration), background-color var(--modal-transition-duration), visibility 0s var(--modal-transition-duration);

    .modal__content {
      will-change: transform;
      transition: transform var(--modal-transition-duration) var(--ease-out);
    }

    &.modal--is-visible {
      transition: opacity var(--modal-transition-duration), background-color var(--modal-transition-duration), visibility 0s;

      .modal__content {
        transform: scale(1); // reset all transformations
      }
    }
  }

  .modal--animate-slide-up,
  .modal--animate-slide-down,
  .modal--animate-slide-right,
  .modal--animate-slide-left {
    --modal-transition-duration: 0.3s;
    transition: opacity 0s var(--modal-transition-duration), background-color var(--modal-transition-duration), visibility 0s var(--modal-transition-duration);

    .modal__content {
      will-change: transform;
      transition: transform var(--modal-transition-duration) var(--ease-out);
    }

    &.modal--is-visible {
      transition: background-color var(--modal-transition-duration), visibility 0s;

      .modal__content {
        transform: scale(1); // reset all transformations
      }
    }
  }

  // scale
  .modal--animate-scale {
    .modal__content {
      transform: scale(0.95);
    }
  }

  // translate
  .modal--animate-translate-up {
    .modal__content {
      transform: translateY(40px);
    }
  }

  .modal--animate-translate-down {
    .modal__content {
      transform: translateY(-40px);
    }
  }

  .modal--animate-translate-right {
    .modal__content {
      transform: translateX(-40px);
    }
  }

  .modal--animate-translate-left {
    .modal__content {
      transform: translateX(40px);
    }
  }

  // slide
  .modal--animate-slide-up {
    .modal__content {
      transform: translateY(100%);
    }
  }

  .modal--animate-slide-down {
    .modal__content {
      transform: translateY(-100%);
    }
  }

  .modal--animate-slide-right {
    .modal__content {
      transform: translateX(-100%);
    }
  }

  .modal--animate-slide-left {
    .modal__content {
      transform: translateX(100%);
    }
  }
}
</style>
