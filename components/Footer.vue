<template>
  <footer class="main-footer position-relative z-index-1 padding-top-xl">
    <div class="container max-width-lg">
      <div class="grid gap-lg">
        <div class="col-3@lg order-2@lg text-right@lg">
          <a class="main-footer__logo" href="#0">
            <svg width="104" height="30" viewBox="0 0 104 30"><title>Go to homepage</title><path d="M37.54 24.08V3.72h4.92v16.37h8.47v4zM60.47 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8 8 0 015.64-2.18 8.07 8.07 0 015.68 2.2 8.49 8.49 0 012 5.69 8.63 8.63 0 01-1.78 5.38 7.6 7.6 0 01-5.89 2.49zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.79 3-2.79 4.26.32 4.23 2.82 4.23zM95.49 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8.4 8.4 0 0111.31 0 8.43 8.43 0 012 5.69 8.6 8.6 0 01-1.77 5.38 7.6 7.6 0 01-5.89 2.51zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.8 3-2.8 4.26.31 4.23 2.83 4.23zM77.66 30c-5.74 0-7-3.25-7.23-4.52l4.6-.26c.41.91 1.17 1.41 2.76 1.41a2.45 2.45 0 002.82-2.53v-2.68a7 7 0 01-1.7 1.75 6.12 6.12 0 01-5.85-.08c-2.41-1.37-3-4.25-3-6.66 0-.89.12-3.67 1.45-5.42a5.67 5.67 0 014.64-2.4c1.2 0 3 .25 4.46 2.82V8.81h4.85v15.33a5.2 5.2 0 01-2.12 4.32A9.92 9.92 0 0177.66 30zm.15-9.66c2.53 0 2.81-2.69 2.81-3.91s-.31-4-2.81-4-2.81 2.8-2.81 4 .27 3.91 2.81 3.91zM55.56 3.72h9.81v2.41h-9.81z" fill="var(--color-contrast-higher)"/><circle cx="15" cy="15" r="15" fill="var(--color-primary)"/></svg>
          </a>
        </div>

        <nav v-if="menu" class="col-9@lg order-1@lg">
          <ul class="grid gap-lg">
            <li
              v-for="item in menu.children"
              :key="item.id"
              class="col-6@xs col-3@md"
            >
              <h4 class="margin-bottom-sm text-base@md">{{ item.data.text }}</h4>
              <ul
                v-if="item.children"
                class="grid gap-xs text-sm@md"
              >
                <li v-for="child in item.children" :key="child.id">
                  <NuxtLink v-if="child.data.href" :to="`/${child.data.href}`" class="main-footer__link">{{ child.data.text }}</NuxtLink>
                  <NuxtLink v-else to="/" class="main-footer__link">{{ child.data.text }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex flex-column border-top padding-y-xs margin-top-lg flex-row@md justify-between@md items-center@md">
        <div class="margin-bottom-sm margin-bottom-0@md">
          <div class="text-sm text-xs@md color-contrast-medium flex flex-wrap gap-xs">
            <span>&copy; myWebsite</span>
            <a href="#0" class="color-contrast-high">Terms</a>
            <a href="#0" class="color-contrast-high">Privacy</a>
          </div>
        </div>

        <div class="flex items-center gap-xs">
          <a href="#0" class="main-footer__social">
            <svg class="icon block" viewBox="0 0 16 16"><title>Follow us on Facebook</title><g><path d="M16,8.048a8,8,0,1,0-9.25,7.9V10.36H4.719V8.048H6.75V6.285A2.822,2.822,0,0,1,9.771,3.173a12.2,12.2,0,0,1,1.791.156V5.3H10.554a1.155,1.155,0,0,0-1.3,1.25v1.5h2.219l-.355,2.312H9.25v5.591A8,8,0,0,0,16,8.048Z"></path></g></svg>
          </a>

          <a href="#0" class="main-footer__social">
            <svg class="icon block" viewBox="0 0 16 16"><title>Follow us on Twitter</title><g><path d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"></path></g></svg>
          </a>

          <a href="#0" class="main-footer__social">
            <svg class="icon block" viewBox="0 0 16 16"><title>Follow us on Youtube</title><g><path d="M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z"></path></g></svg>
          </a>

          <a href="#0" class="main-footer__social">
            <svg class="icon block" viewBox="0 0 16 16"><title>Follow us on Instagram</title><g><circle cx="12.145" cy="3.892" r="0.96"></circle><path d="M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12z M8,6C6.897,6,6,6.897,6,8 s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z"></path><path d="M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16z M4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z"></path></g></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {},

  props: {
    menu: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style lang="scss">
// @use '../base' as *;
// @import '@/styles/base/mixins';
// @import '@/styles/base/breakpoints';

/* --------------------------------

File#: _1_main-footer
Title: Main Footer
Descr: Footer navigation
Usage: codyhouse.co/license

-------------------------------- */

.main-footer {}

.main-footer__logo {
  display: inline-block;

  svg, img {
    display: block;
  }
}

.main-footer__link {
  color: var(--color-contrast-medium);
  text-decoration: none;

  &:hover {
    color: var(--color-contrast-high);
    text-decoration: underline;
  }
}

.main-footer__social {
  text-decoration: none;
  display: inline-block;
  color: var(--color-contrast-medium);

  &:hover {
    color: var(--color-contrast-high);
  }

  .icon {
    font-size: 1.2em; // icon size
  }

  @include breakpoint(md) {
    .icon {
      font-size: 1em;
    }
  }
}
</style>
