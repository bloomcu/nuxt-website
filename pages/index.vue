<template>
  <div class="js">
    <Navbar :primary-links="navLinks" :secondary-links="secondaryLinks" />
    <Hero :buttons="[
      {
        text: 'hello',
        trigger: '123'
      }
    ]" />
    <!-- <Modal uuid="123" title="The modal title" /> -->
    <Accordion />
    <Feature invert />
    <Footer />
  </div>
</template>

<script >
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
import { Hero, Modal, Feature, ContentComponent, Accordion, Footer, Navbar } from 'vite-codytestttt'
// import '../node_modules/codyhouse-framework/main/assets/css/style.css'
// import '../node_modules/vite-codytestttt/dist/style.css'
import { blocks, modals } from '../json/blocks'
export default {
  components: {
    Hero,
    Modal,
    Feature,
    ContentComponent,
    Accordion,
    Footer,
    Navbar
    // Accordion
  },
  setup (props) {
    const randomId = () => {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    const groupGeneration = (
      { includeTitles } = { includeTitles: true }
    ) => {
      const amount = 4
      const arr = []
      for (let i = 0; i < amount; i++) {
        const Child = includeTitles
          ? {
            title: randomId(),
            text: randomId(),
            links: [
              {
                href: '#',
                text: randomId()
              },
              {
                href: '#',
                text: randomId()
              },
              {
                href: '#',
                text: randomId()
              },
              {
                href: '#',
                text: randomId()
              }
            ]
          }
          : {
            href: '#',
            text: randomId()
          }
        arr.push(Child)
      }
      return arr
    }
    const navLinks = [
      {
        uuid: randomId(),
        component: 'NavbarDropdown',
        text: randomId(),
        href: randomId(),
        dropdown: {
          component: 'NavbarDropdownColumn1',
          children: groupGeneration()
        }
      },
      {
        uuid: randomId(),
        component: 'NavbarDropdown',
        text: randomId(),
        href: randomId(),
        dropdown: {
          component: 'NavbarDropdownColumns',
          children: groupGeneration()
        }
      },
      // {
      //     uuid: randomId(),
      //     component: 'ColumnDropdown',
      //     text: randomId(),
      //     href: randomId(),
      //     children: groupGeneration()
      // },
      {
        uuid: randomId(),
        component: 'AppLink',
        text: ' _zso4u8is9 ',
        // trigger: "123",
        variant: 'primary',
        href: '/button-href',
        block: true
        //   target: '',
      }
    ]
    const secondaryLinks = [
      {
        uuid: randomId(),
        component: 'dropdown',
        text: randomId(),
        href: randomId(),
        children: groupGeneration({ includeTitles: false })
      },
      {
        uuid: randomId(),
        component: 'SearchDropdown',
        text: randomId(),
        href: randomId(),
        children: groupGeneration({ includeTitles: false })
      },
      {
        uuid: randomId(),
        component: 'AppButton',
        text: 'Download',
        // trigger: "123",
        variant: 'primary',
        href: '/button-href'
        //   target: '',
      },
      {
        uuid: randomId(),
        component: 'AppLink',
        text: ' _zso4u8is9 ',
        // trigger: "123",
        variant: 'primary',
        href: '/button-href',
        block: true
        //   target: '',
      }
    ]
    return {
      blocks,
      modals,
      navLinks,
      secondaryLinks
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
