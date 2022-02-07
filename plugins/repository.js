import { repository } from '~/api/Repository.js'

export default (context, inject) => {
    inject('repository', repository(context.$axios))
}
