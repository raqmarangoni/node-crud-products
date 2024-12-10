const gateway = require('../gateways/ProductsGateway') 

class ProductsService {
    async get(){
       return await gateway.get()
    }

    async getById(id){
        return await gateway.getById(parseInt(id))
    }

    async post({ name, price }) {
        const product = await gateway.getByName(name)
        if(product) return null
        return await gateway.post({ name, price })
    }

    async put({ id, name, price }) {
        const product = await gateway.getById(parseInt(id))
        if(!product) return null
        return await gateway.put({ id: parseInt(id), name, price })
    }
}

module.exports = new ProductsService()