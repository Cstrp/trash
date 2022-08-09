function newFetch(url) {
    return `${url} - server`
}

const cache = new Set()

const proxed = new Proxy(newFetch, {
    apply(target, thisArg, args) {

        const url = args[0]

        if (cache.has(url)) {
            return `${url} server ???`
        } else {
            cache.add(url)
        }

        return Reflect.apply(target, thisArg, args)
    }
})

console.log(proxed('github.io'))
console.log(proxed('github.io')) // Cache !

