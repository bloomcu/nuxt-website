// import Vue from 'vue';
// import VueCompositionApi from '@vue/composition-api';
import { ref } from '@vue/composition-api';

// Vue.use(VueCompositionApi);

// Array of active element names
const active = ref([]);

/**
 * Check if item is active
 *
 * @param  {String} item Name of element to check
 * @return {boolean} true/false
 */
function isActive(item) {
  return active.value.includes(item);
}

/**
 * Toggle item
 *
 * @param  {String} item Name of element to be toggled
 */
function toggle(item) {
  // Get index of item if present
  const itemIndex = active.value.indexOf(item);

  // Add item to active array or remove if already present in array
  itemIndex === -1
    ? active.value.push(item)
    : active.value.splice(itemIndex, 1);
}

/**
 * Toggle item
 *
 * @param  {String} item Name of element to be closed
 */
function close(item) {
  const itemIndex = active.value.indexOf(item);
  if (itemIndex !== -1) {
    active.value.splice(itemIndex, 1);
  }
}

export default function useToggle() {
  return {
    isActive,
    toggle,
    close,
  };
}
