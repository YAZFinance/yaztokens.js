import pkg from './package.json'
import rollupConfig from '../../rollup.config'

export default rollupConfig('NodeSelector', pkg.name, {
  'ptokens-node': 'yaztokens-node',
  'ptokens-utils': 'yaztokens-utils'
})
