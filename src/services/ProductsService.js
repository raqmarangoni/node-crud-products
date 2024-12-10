const gateway = require('../gateways/ProductsGateway') 

class ProductsService {
    async get(){
       return await gateway.get()
    }

    async getById(id){
        return await gateway.getById(parseInt(id))
    }
}

module.exports = new ProductsService()