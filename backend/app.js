// import express module
const express = require('express');
const axios = require('axios');
// create express application
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/test');

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
const Plat = require('./models/plat');
const Chef = require('./models/chef');
const User = require('./models/user');
// import body parser module
const bodyParser = require("body-parser");
const plat = require('./models/plat');
const chef = require('./models/chef');
const user = require('./models/user');
// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));

// Business Logic GET all Plats
// / : http://localhost:3000/ => URL de base coté serveur
app.get('/plats', (req, res) => {
    console.log('HERE into get all plats');
    let platsArray = [
        { id: 1, name: 'couscous', price: 12, description: 'plat tunisien' },
        { id: 2, name: 'slata', price: 15, description: 'plat tunisien' },
        { id: 3, name: 'ejja', price: 10, description: 'plat tunisien' },
        { id: 4, name: 'lablebi', price: 12, description: 'plat tunisien' },
    ];

    // http status code
    // 404:not found
    // 200:tester si  request bien traité
    plat.find((err, docs) => {
        if (err) {
            console.log('error into DB', err);
        }
        else {
            res.status(200).json({
                allPlats: docs
            });
        }
    })

    // cnx avec la DB

});

app.get('/plats/:id', (req, res) => {
    console.log('here into get plat by id');
    console.log('here id', req.params.id);
    // let platsArray = [
    //     { id: 1, name: 'couscous', price: 12, description: 'plat tunisien' },
    //     { id: 2, name: 'slata', price: 15, description: 'plat tunisien' },
    //     { id: 3, name: 'ejja', price: 10, description: 'plat tunisien' },
    //     { id: 4, name: 'lablebi', price: 12, description: 'plat tunisien' },
    // ];
    // let searchedPlat;
    // for (let i = 0; i < platsArray.length; i++) {
    //     if (platsArray[i].id == req.params.id) {
    //         searchedPlat = platsArray[i];
    //         break;
    //     }
    // }
    Plat.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    plat: result
                });
            }
        }
    )


});
app.delete('/plats/:id', (req, res) => {
    console.log('here into delete', req.params.id);
    // object delete  from db
    Plat.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('result after delete', result);
            if (result) {
                res.status(200).json({
                    message: 'object deleted with success'
                });
            }
        }
    )
});
app.post('/plats', (req, res) => {

    console.log('here into add', req.body);
    // save BD
    const plat = new Plat({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });
    plat.save().then((resultat) => {
        console.log('resultat after save', resultat);
        if (resultat) {
            res.status(200).json({
                message: 'plat added with success'
            })
        }
    });
});
app.put('/plats/:id', (req, res) => {
    console.log('here into edit plat object', req.body);
    console.log('here into edit', req.params.id);
    const newPlat = new Plat({
        _id: req.body._id,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });
    Plat.updateOne({ _id: req.params.id }, newPlat).then(
        (resultat) => {
            console.log('resultat after update', resultat);
            if (resultat) {
                res.status(200).json({
                    message: 'updated with succées'
                })
            }
        }
    )
})
// business logic chefs
app.get('/chefs', (req, res) => {
    let chefsArray = [
        { id: 1, name: 'ali', note: 7, speciality: 'plat tunisien' },
        { id: 2, name: 'salah', note: 4, speciality: 'plat italien' },
        { id: 3, name: 'rbat', note: 10, speciality: 'plat jean' },
        { id: 4, name: 'lotfi', note: 9, speciality: 'plat saragin' },
    ];
    chef.find((err, docs) => {
        if (err) {
            console.log('error into DB', err);
        }
        else {
            res.status(200).json({
                allChefs: docs
            });
        }
    })
});
app.get('/chefs/:id', (req, res) => {
    console.log('get chef by id');
    console.log('here id', req.params.id);
    // let chefsArray = [
    //     { id: 1, name: 'ali', note: 7, speciality: 'plat tunisien' },
    //     { id: 2, name: 'salah', note: 4, speciality: 'plat italien' },
    //     { id: 3, name: 'rbat', note: 10, speciality: 'plat jean' },
    //     { id: 4, name: 'lotfi', note: 9, speciality: 'plat saragin' },
    // ];
    // let searchedchef;
    // for (let i = 0; i < chefsArray.length; i++) {
    //     if (chefsArray[i].id == req.params.id) {
    //         searchedchef = chefsArray[i];
    //         break;
    //     }
    // }
    Chef.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    chef: result
                });
            }
        }
    )

})
app.delete('/chefs/:id', (req, res) => {
    console.log('here into delete', req.params.id);
    // object delete  from db
    Chef.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('result after delete', result);
            if (result) {
                res.status(200).json({
                    message: 'object deleted with success'
                });
            }
        }
    )
})
app.post('/chefs', (req, res) => {

    console.log('here into add', req.body);
    // save DB
    const chef = new Chef({
        name: req.body.name,
        speciality: req.body.speciality,
        note: req.body.note
    });
    chef.save().then((result) => {
        console.log('result after save', result);
        if (result) {
            res.status(200).json({
                message: 'chef added with success'
            });
        }
    });
});
app.put('/chefs/:id', (req, res) => {
    console.log('here into edit plat object', req.body);
    console.log('here into edit', req.params.id);
    const newChef = new Chef({
        _id: req.body._id,
        name: req.body.name,
        speciality: req.body.speciality,
        note: req.body.note
    });
    Chef.updateOne({ _id: req.params.id }, newChef).then(
        (resultat) => {
            console.log('resultat after update', resultat);
            if (resultat) {
                res.status(200).json({
                    message: 'updated with succées'
                })
            }
        }
    )

});
app.post('/chefs/search', (req, res) => {
    console.log('here into search', req.body.speciality);
    chef.find({ speciality: req.body.speciality }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    findedChefs: result
                })
            }
        }
    )
})
// business logic user
app.get('/users', (req, res) => {
    let usersArray = [
        { id: 1, firstName: 'ali', lastName: 'nidal', email: 'ali@gg.cc', tel: '12345678', pwd: 'Fcity' },
        { id: 1, firstName: 'ahmed', lastName: 'ekko', email: 'ahmed@gg.cc', tel: '145236', pwd: 'Fcity' },
        { id: 1, firstName: 'amen', lastName: 'gnar', email: 'amen@gg.cc', tel: '78541236', pwd: 'Fcity' },
        { id: 1, firstName: 'adel', lastName: 'irelia', email: 'adel@gg.cc', tel: '98653214', pwd: 'Fcity' },

    ];
    user.find((err, docs) => {
        if (err) {
            console.log('error into DB', err);
        }
        else {
            res.status(200).json({
                allUsers: docs
            });
        }
    })
});
app.get('/users/:id', (req, res) => {
    console.log('get user by id');
    console.log('here id', req.params.id);
    // let usersArray = [
    //     { id: 1, firstName: 'ali', lastName: 'nidal', email: 'ali@gg.cc',tel:'12345678',address:'Fcity' },
    //     { id: 1, firstName: 'ahmed', lastName: 'ekko', email: 'ahmed@gg.cc',tel:'145236',address:'Fcity' },
    //     { id: 1, firstName: 'amen', lastName: 'gnar', email: 'amen@gg.cc',tel:'78541236',address:'Fcity' },
    //     { id: 1, firstName: 'adel', lastName: 'irelia', email: 'adel@gg.cc',tel:'98653214',address:'Fcity' },

    // ];
    // let searcheduser;
    // for (let i = 0; i < usersArray.length; i++) {
    //     if (usersArray[i].id == req.params.id) {
    //         searcheduser = usersArray[i];
    //         break;
    //     }
    // }
    // res.status(200).json({
    //     user: searcheduser
    // });
    User.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    user: result
                });
            }
        }
    )
})
app.delete('/users/:id', (req, res) => {
    console.log('here into delete', req.params.id);
    // object delete  from db
    res.status(200).json({
        message: `
        object id ${req.params.id}id deleted with succées`
    })
})
app.post('/users/signUp', (req, res) => {

    bcrypt.hash(req.body.pwd, 10).then(
        (cryptedpwd) => {
            console.log('here into add', req.body);
            // save BD

            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd: cryptedpwd,
                tel: req.body.tel,
                role: req.body.role,

            });
            user.save().then((result) => {
                console.log('result after save', result);
                if (result) {
                    res.status(200).json({
                        message: 'user added with success'
                    });
                }
            });
        }
    )
});
app.put('/users/:id', (req, res) => {
    console.log('here into edit plat object', req.body);
    console.log('here into edit', req.params.id);
})
app.post('/users/login', (req, res) => {
    console.log('here into login', req.body);
    User.findOne({ email: req.body.email }).then(
        (resultEmail) => {
            console.log('result after login', resultEmail);
            if (!resultEmail) {
                res.status(200).json({
                    message: '0'
                })
            }
            return bcrypt.compare(req.body.pwd, resultEmail.pwd)
        }

    ).then(
        (resultPwd) => {
            console.log('here resultPwd', resultPwd);
            if (!resultPwd) {
                res.status(200).json({
                    message: '1'
                });
            }
            User.findOne({ email: req.body.email }).then(
                (result) => {
                    let userToSend = {
                        fName: result.firstName,
                        lName: result.lastName,
                        role: result.role,
                    }
                    res.status(200).json({
                        message: '2',
                        user: userToSend
                    });
                }
            )
        }
    )
});

// business logic weather

app.post("/weather", (req, res) => {
    const city = req.body.city;
    const apiKey = "62ee756a34835483299877a61961cafb";
    const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey + "&units=metric";
        console.log('here api key', apiKey);
    axios
        .get(apiUrl)
        .then((response) => {
            console.log('Here response', response);
            const weather = response.data.main;
            console.log('Here weather main', weather);
            const result = {
                temp: weather.temp,
                pressure: weather.pressure,
                humidity: weather.humidity
            }

            res.status(200).json({
                result: result
            })
        });
});
// make app exportable
module.exports = app;