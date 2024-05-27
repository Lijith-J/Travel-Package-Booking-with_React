import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bycrypt from 'bcryptjs'

const travelApp = express();
let port = 4004;

travelApp.use(bodyParser.json());

travelApp.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

mongoose.connect("mongodb://localhost:27017/Travel_package")
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.error("Database Connection Error", err);
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    usertype: String,
},{versionKey:false});

const User = mongoose.model('users', userSchema)

travelApp.post('/register', async (req, res) => {
    const { name, email, password, usertype } = req.body;
    console.log("Register Data", req.body)

    try {
        const hashedPassword = await bycrypt.hash(password, 10)
        const newUser = new User({ name, email, password: hashedPassword, usertype });
        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, 'your_jwt-secret');

        res.status(201).json({ message: "User register successful", token })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }

})

travelApp.post('/login', async (req, res) => {

    const { email, password } = req.body;
    console.log("Login Data", req.body)

    try {
        const user = await User.findOne({
            $or: [
                { email: email },
                { password: password }
            ]
        });

        if (!user) {
            return res.status(400).json({ message: "User not registered" })
        }

        const isPasswordValid = await bycrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Password is incorrect" })
        }

        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
        res.status(200).json({ message: "Login successful", token, user })

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split('')[1];

    if (token) {
        jwt.verify(token, 'your_jwt_secret', (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next()
        })
    }
    else {
        res.sendStatus(401);
    }
}
travelApp.get('/protected', authenticateJWT, (req, res) => {
    res.status(200).json({ message: "This is a proctected route", user: req.user })
})

travelApp.listen(port, () => {
    console.log(`Running Port Success ${port}`);
});








// http://localhost:4004/traveldata

// const placeDatas = [
//     {
//         id: 1,
//         name: "Taj Mahal",
//         image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7f/47/3a/caption.jpg?w=300&h=300&s=1",
//         place: "Delhi",
//         rate: 15000,
//         triptype: 'Luxury',
//         status: "Waiting"
//     },
//     {
//         id: 2,
//         name: 'Mountaineering',
//         image: "https://www.tourmyindia.com/states/jammu-kashmir/image/mountaineering-jammu-kashmir.jpg",
//         place: "Kashmir",
//         rate: 8000,
//         triptype: 'Adventure',
//         status: "Waiting"
//     },
//     {
//         id: 3,
//         name: 'Lotus Temple',
//         image: "https://media.easemytrip.com/media/Blog/India/638152562600786338/638152562600786338GKt3lZ.png",
//         place: "Delhi",
//         rate: 5000,
//         triptype: 'Luxury',
//         status: "Waiting"
//     },
//     {
//         id: 4,
//         name: 'River Rafting',
//         image: "https://www.tourmyindia.com/states/jammu-kashmir/image/river-rafting-jammu-kashmir.jpg",
//         place: "Kashmir",
//         rate: 9000,
//         triptype: 'Adventure',
//         status: "Waiting"
//     },
//     {
//         id: 5,
//         name: 'Adaaran Select Hudhuranfushi',
//         image: "https://theebiza.com/wp-content/uploads/2023/06/Maldives_0004_Layer-1.webp",
//         place: "Maldives",
//         rate: 19000,
//         triptype: 'Luxury',
//         status: "Waiting"
//     },
//     {
//         id: 6,
//         name: 'Sun Island',
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6EAYWPFvQN75mkax_4YmscZ2XZfB7J7TZA&usqp=CAU",
//         place: "Maldives",
//         rate: 15000,
//         triptype: 'Luxury',
//         status: "Waiting"
//     },
//     {
//         id: 7,
//         name: 'Alimatha Island',
//         image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163754379.jpg?k=853236417a9063b62d6edca7420aad4369416ddc75afeabfdf120ebbce523365&o=&hp=1",
//         place: "Maldives",
//         rate: 21000,
//         triptype: 'Luxury',
//         status: "Waiting"
//     },
//     {
//         id: 8,
//         name: 'Hulhumale',
//         image: "https://gca.org/wp-content/uploads/2022/02/iStock-538010535.jpg",
//         place: "Maldives",
//         rate: 18000,
//         triptype: 'Luxury',
//         status: "Waiting"
//     },
//     {
//         id: 9,
//         name: 'Veligandu Island Beach',
//         image: "",
//         place: "Maldives",
//         rate: 25000,
//         triptype: 'Luxury',
//         status: "Waiting"
//     },

// ]

// _______________________________________________________________________

// const userDatas = [

//     {
//         id: 1,
//         username: "Lijith",
//         password: "lijith",
//         userType: "admin"
//     },
//     {
//         id: 2,
//         username: "Sarath",
//         password: "sarath",
//         userType: "client"
//     },
//     {
//         id: 3,
//         username: "Appu",
//         password: "appu",
//         userType: "client"
//     },

// ]

// travelApp.get("/traveldata", (req, res) => {
//     res.send({ placeDatas: placeDatas, userDatas: userDatas });
// })

// travelApp.post("/addPlaceItems", (req, res) => {
//     const inputData = req.body;

//     placeDatas.push(inputData)

//     console.log("Request Recieved -", inputData);
//     res.send(placeDatas)
// })
