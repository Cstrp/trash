const fs = require('fs')

class ClearCachePlugin {
  constructor({ silent, dirname = 'cache' }) {
    this.isSilent = silent
    this.dirname = dirname
  }

  clear(props) {
    fs.rm(`./${props.dirname}`, { recursive: true }, err => {
      if (!props.silent) {
        console.log('\n clearing cache')
        console.log(`\n ${err ? err : 'succes'}`)
      }
    })
  }

  apply(compiler) {
    compiler.hooks.done.tap(
      'Clear Cache Plguin',
      (stats) => {
        this.clear({
            dirname: this.dirname,
            silent: this.isSilent
        })
      }
    )
  }
}

module.exports = ClearCachePlugin