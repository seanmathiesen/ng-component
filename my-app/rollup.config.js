import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'bundle-entry.js',
  output: {
    file: 'dist/my-app/my-app.bundle.js',
    format: 'iife',  // immediately-invoked function (good for <script> tags)
    name: 'MyApp',  // global namespace
    inlineDynamicImports: true  // important for Angular: avoids multiple chunks
  },
  plugins: [
    resolve({
      browser: true,  // resolve browser-friendly imports
      preferBuiltins: false
    }),
    commonjs(),
    json()
  ]
};
