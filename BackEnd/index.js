import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'

const travelApp = express();

travelApp.use(bodyParser.json())

travelApp.use(cors(
    {
        origin: "http://localhost:3000"
    }
))

// http://localhost:4004/traveldata


const placeDatas = [
    {
        id: 1,
        name: "Taj Mahal",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7f/47/3a/caption.jpg?w=300&h=300&s=1",
        place: "Delhi",
        rate: 15000,
        triptype: 'Luxury',
        status: "Waiting"
    },
    {
        id: 2,
        name: 'Mountaineering',
        image: "https://www.tourmyindia.com/states/jammu-kashmir/image/mountaineering-jammu-kashmir.jpg",
        place: "Kashmir",
        rate: 8000,
        triptype: 'Adventure',
        status: "Waiting"
    },
    {
        id: 3,
        name: 'Lotus Temple',
        image: "https://media.easemytrip.com/media/Blog/India/638152562600786338/638152562600786338GKt3lZ.png",
        place: "Delhi",
        rate: 5000,
        triptype: 'Luxury',
        status: "Waiting"
    },
    {
        id: 4,
        name: 'River Rafting',
        image: "https://www.tourmyindia.com/states/jammu-kashmir/image/river-rafting-jammu-kashmir.jpg",
        place: "Kashmir",
        rate: 9000,
        triptype: 'Adventure',
        status: "Waiting"
    },
    {
        id: 5,
        name: 'Adaaran Select Hudhuranfushi',
        image: "https://theebiza.com/wp-content/uploads/2023/06/Maldives_0004_Layer-1.webp",
        place: "Maldives",
        rate: 19000,
        triptype: 'Luxury',
        status: "Waiting"
    },
    {
        id: 6,
        name: 'Sun Island',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6EAYWPFvQN75mkax_4YmscZ2XZfB7J7TZA&usqp=CAU",
        place: "Maldives",
        rate: 15000,
        triptype: 'Luxury',
        status: "Waiting"
    },
    {
        id: 7,
        name: 'Alimatha Island',
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163754379.jpg?k=853236417a9063b62d6edca7420aad4369416ddc75afeabfdf120ebbce523365&o=&hp=1",
        place: "Maldives",
        rate: 21000,
        triptype: 'Luxury',
        status: "Waiting"
    },
    {
        id: 8,
        name: 'Hulhumale',
        image: "https://gca.org/wp-content/uploads/2022/02/iStock-538010535.jpg",
        place: "Maldives",
        rate: 18000,
        triptype: 'Luxury',
        status: "Waiting"
    },
    {
        id: 9,
        name: 'Veligandu Island Beach',
        image: "",
        place: "Maldives",
        rate: 25000,
        triptype: 'Luxury',
        status: "Waiting"
    },

    // _______________________________________________________________________
   
]



const userDatas = [

    {
        id: 1,
        username: "Lijith",
        password: "lijith",
        userType: "admin"
    },
    {
        id: 2,
        username: "Sarath",
        password: "sarath",
        userType: "client"
    },
    {
        id: 3,
        username: "Appu",
        password: "appu",
        userType: "client"
    },
    
]


travelApp.get("/traveldata", (req, res) => {
    res.send({ placeDatas: placeDatas, userDatas: userDatas });
})

travelApp.post("/addPlaceItems", (req, res) => {
    const inputData = req.body;

    placeDatas.push(inputData)

    console.log("Request Recieved -", inputData);
    res.send(placeDatas)
})


let port = 4004

travelApp.listen(port, () => {
    console.log(`API Loading Success ${port}`)
})