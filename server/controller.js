module.exports = {
    
    
    
    getAllHouses: (req, res, next) => {
        const db = req.app.get('db');
        db
            .getall()
            .then(houses => res.status(200).send(houses))
            .catch(error => {
                res.status(500).send({ message: "error" });
                console.log(error)
            })
    },
    
    
    
    getHouse: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db
            .get_house(id)
            .then(house => res.status(200).send())
            .catch(error => {
                res.status(500).send({ message: "error" })
                console.log(error);
            })
    },
    
    
    
    addHouse: (req, res, next) => {
        const db = req.app.get('db');
        const { property_name, address, city, state, zip, image_url, mortgage, rent } = req.body;
        db
            .add_house()({ property_name, address, city, state, zip, image_url, mortgage, rent })
            .then(() => res.sendStatus(200))
            .catch(error => {
                res.status(500).send({ message: "error" });
                console.log(error)
            });
    },
    
    
    
    deleteHouse: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db
            .delete_house([id])
            .then(houses => res.status(200).json(houses))
            .catch(error => {
                res.status(500).send({ message: "error" });
                console.log(error);
            })
    }
}