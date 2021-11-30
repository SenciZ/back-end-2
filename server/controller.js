const houses = require('./db.json')
let newID = 4;

module.exports = {
    getHouses: (req, res)=>{
        res.status(200).send(houses)
    },

    deleteHouse: (req, res)=>{
        const {id} = req.params;
        let index = houses.findIndex(house => +house.id === +id)
        houses.splice(index,1)
        res.status(200).send(houses)
    },

    createHouse: (req,res)=>{
        const {address,price, imageURL} = req.body;
        const newHouse = {
            address,
            price: +price,
            imageURL,
            id: newID
        }
        houses.push(newHouse)
        newID++
        res.status(200).send(houses)
    },

    updateHouse: (req,res)=>{
        const {id} = req.params;
        const {type} = req.body
        const index = houses.findIndex(house => +house.id === +id)
        if(type === "plus"){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if(type==='minus'){
            houses[index].price -= 10000;
            res.status(200).send(houses)

        }
    }
}