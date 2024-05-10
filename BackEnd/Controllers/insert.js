import { db } from "../connection.js";
import jwt from 'jsonwebtoken'

export const register = (req, res) => {
    
    const registerData = req.body
    console.log('regiter data', registerData)

    const selectQuery = "SELECT * FROM users WHERE  email=?";
    
    const value=[req.body.email]
    
    db.query(selectQuery,[value], (err, data) => { 

        console.log(data);
        if (err) return res.json(err); 
        if (data.length) return res.status(409).json("User already exists!"); 
     
        // // Hash the password and create a user 
        // const salt = bcrypt.genSaltSync(10); 
        // const hash = bcrypt.hashSync(req.body.password, salt); 
         
        // const insertQuery = "INSERT INTO users (name, password) VALUES (?,?)"; 
        // const values = [req.body.name, hash]; 
     
        // console.log(values); 
     
        // db.query(insertQuery, values, (err, data) => { 
        //   if (err) return res.json(err); 
        //   return res.status(200).json("User has been created."); 
        // });                                                                                       

        const q = 'INSERT INTO users (name,email,password,userType) VALUES (?,?,?,?)'
        const values=[req.body.name,req.body.email,req.body.password,req.body.userType]
        
        db.query(q, values, (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json('Succesfully registered')
        })

      }); 


}


export const login = (req,res)=>{

    console.log("acessed!", req.body)

   const q= "SELECT * FROM users WHERE email= ?";

   const w = req.body.username

//    console.log(w)

   db.query(q, w, (err,data)=>{
    console.log('dastaaaa',data)
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(405).json("user not found")

    const checkPassword =req.body.password
    //  bcrypt.compareSync(
    //     req.body.password,
    //     data[0].password
    // );

    if (!checkPassword)
    return res.status(300).json("wrong password or username");
    
    const token = jwt.sign({id:data[0].id} , "secretkey")
   
    // console.log(token)

    const { password, ...others } = data[0];
// console.log(data[0]);
    res.cookie("accessToken", token, {
        httpOnly: true
        }).status(201).json(others);
   })
}


export const logout =(req,res)=>{
        res.clearCookie("accessToken",{
           secure:true,
           sameSite:"none"
        }).status(200).json("user has been logout")
}

// export const addUser = (req, res) => { 
//     const register = req.body; 
//     // console.log(name); 
   
//     // Check existing user 
//     const selectQuery = "SELECT * FROM users WHERE name = ?"; 

//     db.query(selectQuery, [req.body.name], (err, data) => { 
//       if (err) return res.json(err); 
//       if (data.length) return res.status(409).json("User already exists!"); 
   
//       // Hash the password and create a user 
//       const salt = bcrypt.genSaltSync(10); 
//       const hash = bcrypt.hashSync(req.body.password, salt); 
       
//       const insertQuery = "INSERT INTO users (name, password) VALUES (?,?)"; 
//       const values = [req.body.name, hash]; 
   
//       console.log(values); 
   
//       db.query(insertQuery, values, (err, data) => { 
//         if (err) return res.json(err); 
//         return res.status(200).json("User has been created."); 
//       }); 
//     }); 
//   };