const fs = require('fs')

class ClearCachePlugin {
    constructor({silent, dirname = 'cache'}) {
        this.isSilent = silent
        this.dirname = dirname
    }

    clear(props) {
        fs.access(`./${props.dirname}`, () => {
            fs.rm(`./${props.dirname}`, { recursive: true }, err => {
                if (!props.silent) {
                    console.log('\n clearing cache')
                    console.log(`\n ${err ? err : 'succes'}`)
                }
                console.log('delete')
            })
        })
    }

    start() {
        console.log('start')
        this.clear({
            silent: this.isSilent,
            dirname: this.dirname
        })
    }

    apply(compiler) {
        compiler.hooks.shutdown.tap(
            'Clear Cache Plugin',
            (s) => {
                console.log('shutdown')
            }
        )
    }
}


module.exports = ClearCachePlugin