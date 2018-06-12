import hiuim from '../../src/main'
import Demos from '../demos'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData
}) => {
  Vue.use(hiuim)
  Vue.use(Demos)
}
