const Person = require("../models/Person")

const serviceController = {
    create: async (req, res) => {
        // req.body 
        const {name, salary, approved} = req.body

        if(!name) res.status(422).json({error: "O nome é obrigatório."})
        if(!salary) res.status(422).json({error: "O salário é obrigatório."})
        
        const person = {
            name, 
            salary,
            approved
        }
        
        try {
            await Person.create(person)
            res.status(201).json({message: 'Pessoa inserida no sistema com sucesso.'})
        } catch (error) {
            res.status(500).json({error: error})
        }
    },
    readUsers: async (req, res) => {
        try {
            const peaple  = await Person.find()

            res.status(200).json(peaple)

        } catch (error) {
            res.status(500).json({error: error})
        }
    },
    readUser: async(req, res) => {
        const id = req.params.id 

        try {
            const person = await Person.findOne({_id: id})

            if(!person){
                res.status(500).json({message: "O usuário não foi encontrado."})
                return
            }
            res.status(200).json(person)

        } catch (error) {
            res.status(500).json({error: error})
            
        }   
    },
    uptade: async (req, res) => {
        const id = req.params.id 

        const { name, salary, approved } = req.body

        const person = {
            name, 
            salary,
            approved
        }

        try {
            const uptadedPerson = await Person.updateOne({_id: id}, person)

            if (uptadedPerson.matchedCount === 0) {
                res.status(422).json({message: "O usuário não foi encontrado."})
                return
            }

            res.status(200).json(person)
        } catch (error) {
            res.status(500).json({error: error})
        }
    },
    delete: async (req, res) => {
        const id = req.params.id

        const person = await Person.findOne({ _id: id })

        if (!person) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        try {
            await Person.deleteOne({ _id: id })

            res.status(200).json({ message: 'Usuário removido com sucesso!' })
        } catch (error) {
            res.status(500).json({ erro: error })
        }   
    }
}

module.exports = serviceController