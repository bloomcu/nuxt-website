/**
 * Toggle locked scroll state
 *
 * @return null
 */
function toggleLockBody() {
  document.body.classList.toggle('util-lock-scroll')
}

export default function useLockBody() {
  return {
    toggleLockBody
  }
}
