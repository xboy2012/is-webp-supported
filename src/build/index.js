import buildES7CJS from './build_es7_cjs'
import buildES5CJS from './build_es5_cjs'
import buildES7Module from './build_es7_module'
import buildES5Module from './build_es5_module'

const run = async () => {
  await Promise.all([
    buildES7CJS(),
    buildES5CJS(),
    buildES7Module(),
    buildES5Module()
  ])
}

run()
