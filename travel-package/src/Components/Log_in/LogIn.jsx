import React, { useContext, useState } from 'react'
import './Login-style.css'
import { useNavigate } from 'react-router-dom'
import { Main_Context } from '../Context/Context_File'
import { Link } from 'react-router-dom'

import visible from './images/visible.png'
import hidden from './images/hidden.png'

import FormControl from '@mui/material/FormControl';
import { IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';


const useStyles = makeStyles({
    textField: {
        borderColor: 'white',
        width: '70%'
    },
});



const LogIn = () => {

    const classes = useStyles()

    const [registerSwitch, setRegisterSwitching] = useState(false)

    const { TravelDatasAll, inputValue, setInputValue } = useContext(Main_Context)
    // console.log("Got Data in Log In page", travelDatasAll)

    const [showPassword, setShowPassword] = useState(false);


    const locate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        userType: ''
    });
    console.log(formData)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handlechange = (e) => {
        const { name, value } = e.target
        setInputValue((prev) => ({ ...prev, [name]: value }))
    }

    console.log(inputValue)


    const userDetails = TravelDatasAll.userDatas;
    console.log("userDetails", userDetails);


    const checkLogin = (e) => {

        e.preventDefault()

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

            <div className='h-screen flex justify-center items-center login-main '>


                {
                    registerSwitch ? (
                        <div className='md:w-[28%] md:h-[60%] rounded-2xl login-form'>

                            <input type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className='p-3'
                                placeholder='Name' />

                            <input type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className='p-3'
                                placeholder='Email' />

                            <input type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className='p-3'
                                placeholder='Password' />

                            <select
                                name="userType"
                                value={formData.userType}
                                onChange={handleInputChange}
                                className='p-3'
                            >
                                <option value="" disabled>select user</option>
                                <option value="admin">Admin</option>
                                <option value="client">Client</option>
                            </select>

                            <button className='ring-2 ring-white p-3'>Register</button>

                            <Link onClick={() => setRegisterSwitching(false)}>Log in</Link>

                        </div>
                    )
                        :
                        (
                            <form action="" className='md:w-[28%] md:h-[60%] rounded-2xl login-form'>
                                <h1 className='text-2xl font-bold'>LOG IN</h1>


                                <TextField
                                    className={classes.textField}
                                    label="Username"
                                    type="text"
                                    name='username'
                                    value={inputValue.username}
                                    onChange={handlechange}
                                />

                                <FormControl variant="outlined" className={classes.textField}>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput

                                        id="outlined-adornment-password"
                                        type={showPassword ? "text" : "password"}
                                        name='password'
                                        value={inputValue.password} onChange={handlechange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>


                                <span className='check-inputvalue'></span>
                                <button className='logIn-button' type='submit' onClick={checkLogin} >Log In</button>

                                <Link to={'/home'} >Skip</Link>

                                <Link onClick={() => setRegisterSwitching(true)}>Register</Link>

                            </form>

                        )

                }


            </div>

        </div >
    )
}

export default LogIn