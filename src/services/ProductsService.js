const gateway = require('../gateways/ProductsGateway') 

class ProductsService {
    async get(){
       return await gateway.get()
    }
}

module.exports = new ProductsService()