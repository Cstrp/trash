class Server {
    constructor(ip, port) {
        this._ip = ip
        this.port = port
    }
    get url() {
        return `https://${this._ip}:${this.port}`
    }
}


function aws(server) {
    server.isAWS = true
    server.awsInfo = function() {
        return server.url
    }

    return server
}

function azure(server) {
    server.isAzure = true
    server.port += 500

    return server
}

const s1 = aws(new Server('1234.12412.132123', '1234'))

console.log(s1.isAWS)
console.log(s1.awsInfo())

const s2 = azure(new Server('123.123124.5512', '4321'))

console.log(s2.isAzure);
console.log(s2.port)
