<template>
  <div>
    <Navbar :menu="globals.header"/>

    <div v-if="post">
      <component
        :is="block.component"
        v-for="(block, index) in post.blocks"
        :key="index"
        v-bind="block.data"
      />
    </div>

    <FooterV4 :menu="globals.footer"/>

    <Modal uuid="search" title="Search">
      <!-- Search input -->
      <div class="search-input search-input--icon-left">
        <button class="search-input__btn">
          <svg class="icon" viewBox="0 0 20 20"><title>Submit</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="8" cy="8" r="6"/><line x1="12.242" y1="12.242" x2="18" y2="18"/></g></svg>
        </button>

        <input v-model="query" ref="searchInput" class="search-input__input form-control" type="search" name="search-input" placeholder="What can we help you find?" autocomplete="off" aria-label="Search">

        <button v-if="query" @click="query = ''" class="search-input__btn search-input__clear" aria-hidden="true">
          <svg class="icon" viewBox="0 0 24 24"><title>e remove</title><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="19" y1="5" x2="5" y2="19"></line> <line x1="19" y1="19" x2="5" y2="5"></line></g></svg>
        </button>
      </div>

      <!-- No results -->
      <div v-if="query && !results.length" class="margin-top-md">
        <p>Sorry, we couldn't find results for "{{ query }}"</p>
      </div>

      <!-- Search History -->
      <div v-if="user.searchHistory.length && results.length == 0" class="margin-top-md">
        <h4 class="text-sm margin-bottom-xxxxs">Recent Searches</h4>
        <ul>
          <li v-for="(item, index) in user.searchHistory" :key="index" class="padding-top-xxxs">
            <a @click.prevent="searchFromHistory(item)" href="">{{ item }}</a>
          </li>
        </ul>
      </div>

      <!-- Search Results -->
      <ul v-if="query" class="margin-top-sm">
        <li v-for="(result, index) in results" :key="index" class="padding-y-sm border-bottom">
          <NuxtLink :to="result.url" @click.native="toggle('search')">
            <h4 class="text-base margin-bottom-xxs">{{ result.title }}</h4>
          </NuxtLink>
          <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis ex in neque lobortis hendrerit.</small>
        </li>
      </ul>
    </Modal>
  </div>
</template>

<script>
import { ref, watch, watchEffect, computed, nextTick } from '@vue/composition-api'
import { mapState } from 'vuex'
import { MeiliSearch } from 'meilisearch'
import _ from 'lodash'
import useToggle from '@/composables/useToggle'
import useDebouncedRef from '@/composables/useDebouncedRef'

export default {
  setup(props, { root }) {
    const { toggle, isActive } = useToggle()

    const client = new MeiliSearch({
      // TODO: Place this in .env file
      // host: 'https://search.bloomcu.com',
      // apiKey: 'ZGY0MWI4MjU2ZDIxNGMwM2Q3YTEwYWVm',
      host: 'https://search.journeyframe.io',
      apiKey: 'Y2JkNmMyZDIxZjM1ZWJjY2M1ZTdhMmZm',
    })

    const searchInput = ref(null)

    const searchIsOpen = computed(() => isActive('search'))

    watch(searchIsOpen, (value) => {
      setTimeout(function () {
        searchInput.value.focus()
      }, 300)
    })

    const query = ref('')

    const debouncedQuery = useDebouncedRef('', 1000)

    const results = ref([])

    const search = (keyword) => {
      if (keyword === '') {
        results.value = []
      } else {
        debouncedQuery.value = keyword

        client.index('bloomcu_website_posts').search(keyword).then(response => {
          results.value = response.hits
        })
      }
    }

    const searchFromHistory = (value) => {
      query.value = value
    }

    watch(query, (value) => {
      search(value)
    })

    watch(debouncedQuery, (value) => {
      root.$store.dispatch('addSearchHistory', value)
    })

    return {
      toggle,
      searchInput,
      client,
      results,
      query,
      searchFromHistory
    }
  },

  asyncData({ params, $repository }) {
    return $repository.posts.show(params.pathMatch)
      .then(response => {
        return { post: response.data }
      })
  },

  computed: {
    ...mapState(['globals', 'user'])
  }
}
</script>

<style lang="scss">
/* --------------------------------

File#: _1_search-input
Title: Search input
Descr: Search input field with custom button
Usage: codyhouse.co/license

-------------------------------- */

:root {
  --search-input-btn-width: 2.2em;
  --search-input-icon-size: 1em;
  --search-input-shortcut-margin: 0.325em; /* gap between the shortcut badge and the input edges */
}

.search-input {
  position: relative;
}

.search-input__input {
  width: 100%;
  height: 100%;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  .search-input--icon-right & {
    padding-right: var(--search-input-btn-width);
  }

  .search-input--icon-left & {
    padding-left: var(--search-input-btn-width);
  }
}

.search-input__btn {
  @include reset;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: var(--search-input-btn-width);

  &:active .icon {
    transform: translateY(2px);
  }

  .icon {
    display: block;
    --size: var(--search-input-icon-size);
    margin-left: auto;
    margin-right: auto;
    color: var(--color-contrast-low); /* icon color */
    transition: .2s;
  }

  .search-input--icon-left & {
    left: 0;
    right: auto;
    pointer-events: none;
  }
}

.search-input__btn:focus .icon,
.search-input .search-input__input:focus + .search-input__btn .icon {
  color: var(--color-primary); /* active icon color */
}

/* --clear */
.search-input__clear {
  right: 0 !important;
  left: auto !important;
  pointer-events: all !important;
  cursor: pointer;
}
</style>
