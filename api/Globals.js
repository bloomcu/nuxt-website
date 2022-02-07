const endpoint = '/globals'

export default ($axios) => ({
    show() {
        return $axios.$get(endpoint)
          .then(globals => {
              return globals
          })
          .catch(error => {
              console.log(error)
          })
    }
})
