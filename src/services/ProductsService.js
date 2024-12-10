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
}

module.exports = new ProductsService()