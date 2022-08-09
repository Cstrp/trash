// function Server(name, ip) {
//     this.name = name;
//     this.id = ip;
// }
//
// Server.prototype.getUrl = function () {
//     return `https://${this.id}:80`
// }

class Server {

    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `Ip: ${this.ip}:80`
    }
}

const aws = new Server('Germany', '82.21.21.32')

console.log(aws.getUrl())
