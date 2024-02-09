import React, { useContext, useState } from 'react'
import './Login-style.css'
import { useNavigate } from 'react-router-dom'
import { Main_Context } from '../Context/Context_File'

import logo from './images/logo.png'
import visible from './images/visible.png'
import hidden from './images/hidden.png'



const LogIn = () => {
    const { travelDatasAll,inputValue, setInputValue } = useContext(Main_Context)
    // console.log("Got Data in Log In page", travelDatasAll)

    const [showPassword, setShowPassword] = useState(false);


    const locate = useNavigate()


    const handlechange = (e) => {
        const { name, value } = e.target
        setInputValue((prev) => ({ ...prev, [name]: value }))
    }
    console.log(inputValue)


    const userDetails = travelDatasAll.userDatas;
    console.log("userDetails", userDetails);


    const checkLogin = () => {

        if (inputValue === '') {
            const checkInput = document.querySelector('.check-inputvalue')
            checkInput.style.display = "inline"
            checkInput.innerHTML = "Please Enter Details"
        }
        else {

            const findUser = userDetails.find(item => item.username === inputValue.username && item.password === inputValue.password);
            if (!findUser) {
                const checkInput = document.querySelector('.check-inputvalue')
                checkInput.style.display = "inline"
                checkInput.innerHTML = "User Not Found"
            } else {
                if (findUser.userType === 'admin') {
                    locate('/admin')
                } else {
                    locate('/home')
                }

                localStorage.setItem("clientName", inputValue.username)
            }
        }
    }


    return (
        <div>

            <div className='login-main'>
                {/* <img src={logo} alt="" /> */}
                <div className="login-div">
                    <h1>LOG IN</h1>
                
                        <input type="text" className='inputs' name='username' value={inputValue.username} onChange={handlechange} placeholder='Username' />

                        <div className='password-div'>
                            <input type={showPassword ? "text" : "password"}
                                className='inputs' name='password'
                                value={inputValue.password} onChange={handlechange} placeholder='Password' />
                            <img className='showPasswordIcon' src={showPassword ? hidden : visible} onClick={() => setShowPassword(!showPassword)} alt="" />
                        </div>


                        <span className='check-inputvalue'></span>
                        <button className='logIn-button' onClick={checkLogin} >Log In</button>

                   
                </div>

            </div>

        </div >
    )
}

export default LogIn