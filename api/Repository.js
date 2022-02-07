// import Menus from '~/app/api/json/Menus'
// import Pages from '~/app/api/json/Pages'
import Posts from '~/api/Posts'

export const repository = ($axios) => ({
    // menus: Menus($axios),
    // pages: Pages($axios),
    posts: Posts($axios),
})
