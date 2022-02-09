const endpoint = '/posts'

export default ($axios) => ({
    show(path) {
        if (path === '') { path = 'homepage' }

        return $axios.$get(endpoint + '?path=' + path)
          .then(post => {
              return post
          })
          .catch(error => {
              console.log(error)
          })
    }
})
