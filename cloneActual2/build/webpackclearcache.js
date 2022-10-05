const fs = require('fs')

class ClearCachePlugin {
    constructor({silent, dirname = 'cache', optimize}) {
        this.isSilent = silent
        this.dirname = dirname
        this.optimize = optimize
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
        if (!this.optimize) {
            compiler.hooks.assetEmitted.tap(
            'Clear Cache Plugin',
            (s) => {
                console.log('shutdown')
                this.start()
            })
        } else {
             compiler.hooks.shutdown.tap(
            'Clear Cache Plugin',
            (s) => {
                console.log('shutdown')
                this.start()
            })
        }
        console.log(this.optimize)
    }
}


module.exports = ClearCachePlugin