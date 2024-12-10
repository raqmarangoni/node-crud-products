const prisma = require('../prismaClient')

class ProductsGateway {
    async get(){
        return await prisma.product.findMany({
            select: {
                id: true,
                name: true,
                price: true
            }
        })
    }
}

module.exports = new ProductsGateway()