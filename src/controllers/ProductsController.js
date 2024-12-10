const service = require('../services/ProductsService')

class ProductsController {
    async get(_, res) {
        try {
            const response = await service.get()
            if (!response) return res.status(404).json({ message: 'Not Found' })
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}

module.exports = new ProductsController()