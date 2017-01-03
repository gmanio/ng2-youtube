/**
 * Created on 2016-12-27.
 * @author: Gman Park
 */

import commonjs    from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only';

export default {
    entry: 'src/main.aot.ts',
    dest: 'dist/bundle.rollup.js',
    format: 'iife',
    sourceMap: false,
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs({
            include: 'node_modules/rxjs/**',
        }),
        css({output: 'bundle.css'})
    ]
}