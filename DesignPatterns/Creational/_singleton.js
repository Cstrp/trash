class _singleton {
    constructor(data) {
        if (_singleton.exists) {
            return _singleton.instance
        }

        _singleton.instance = this
        _singleton.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}


const data = new _singleton('BaseServer')

console.log(data.getData())

const newData = new _singleton('NotBaseServer')

console.log(newData.getData())
