const endpoint = '/posts'

export default ($axios) => ({

    show(slug) {
        if (slug === undefined) { slug = 2 }

        return $axios.$get(endpoint + '/' + slug)
          .then(post => {
              return post
          })
          .catch(error => {
              console.log(error)
          })
    }

})
