const endpoint = '/articles'

export default ($axios) => ({

    index() {
        return $axios.$get(endpoint)
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
        })
    },

    show(slug) {
        return $axios.$get(endpoint + '?slug=' + slug)
        .then(response => {
            return response[0]
        })
        .catch(error => {
            console.log(error)
        })
    }

})
