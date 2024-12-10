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

    async getById(id){
        return await prisma.product.findFirst({
            select: {
                id: true,
                name: true,
                price: true
            },

            where: {
                id
            }
        })
    }
}

module.exports = new ProductsGateway()