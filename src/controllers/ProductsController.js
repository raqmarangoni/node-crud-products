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

    async getById(req, res) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).json({ message: `'id' is required ` })
            const response = await service.getById(id)
            if (!response) return res.status(404).json({ message: 'Not Found' })
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async post(req, res) {
        try {
            const { name, price } = req.body
            if (!name | !price) return res.status(400).json({ message: `'name' and 'price' are required ` })
            const response = await service.post({ name, price })
            if (!response) return res.status(400).json({ message: `Entity already exist` })
            return res.status(201).json()
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async put(req, res) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).json({ message: `'id' is required ` })
            const { name, price } = req.body
            if (!name | !price) return res.status(400).json({ message: `'name' and 'price' are required ` })
            const response = await service.put({ id , name, price })
            if(!response) return res.status(400).json({ message: `This id does not exist` })
            return res.status(204).json()
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async delete(req, res){
        try {
            const { id } = req.params
            if (!id) return res.status(400).json({ message: `'id' is required ` })
            const response = await service.delete(id)
            if(!response) return res.status(400).json({ message: `This id does not exist` })
            return res.status(204).json()
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}

module.exports = new ProductsController()