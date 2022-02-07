import Globals from '~/api/Globals'
import Posts from '~/api/Posts'

export const repository = ($axios) => ({
    globals: Globals($axios),
    posts: Posts($axios),
})
