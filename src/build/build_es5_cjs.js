import { rollup } from 'rollup'
import babel from 'rollup-plugin-babel'
import { ROOT_DIR } from '../core/configs'
import { externals } from '../core/consts'

export default async () => {
  const bundle = await rollup({
    input: `${ROOT_DIR}/src/index.js`,
    external: externals,
    plugins: [
      babel(),
    ],
  })
  await bundle.write({
    file: `${ROOT_DIR}/commonjs/es5/index.js`,
    format: 'cjs',
    sourcemap: true,
    strict: false,
  })
}
