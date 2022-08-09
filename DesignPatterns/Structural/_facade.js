class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) {

    }

    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProdComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Prod${id}: ${customer} (${details})`
    }
}

class ServComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Serv${id}: ${customer} (${details})`
    }
}

class Registry {
    register(customer, type, details) {
        const id = Date.now()

        let complaing

        if (type === 'service') {
            complaing = new ServComplaints()
        } else {
            complaing = new ProdComplaints()
        }

        return complaing.add({id, customer, details})
    }
}

const reg = new Registry()

console.log(reg.register('Igar', 'service', 'obaldet'));

console.log(reg.register('Koko', 'product', 'Error'))
