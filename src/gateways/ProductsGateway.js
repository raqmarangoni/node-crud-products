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

    async getByName(name){
        return await prisma.product.findFirst({
            select: {
                id: true,
                name: true,
                price: true
            },

            where: {
                name
            }
        })
    }

    async post({ name, price }){
        return await prisma.product.create({
            data: {
                name,
                price
            }
        })
    }
}

module.exports = new ProductsGateway()