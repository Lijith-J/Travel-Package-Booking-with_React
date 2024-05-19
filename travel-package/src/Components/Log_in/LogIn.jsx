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
import axios from 'axios'


const useStyles = makeStyles({
    textField: {
        borderColor: 'white',
        width: '70%',
        outline:"white"
    },
});



const LogIn = () => {
    const classes = useStyles()
    
    const navigate = useNavigate()


    const [err, setErr] = useState("")

    const [registerSwitch, setRegisterSwitching] = useState(false)

    const { TravelDatasAll, inputValue, setInputValue } = useContext(Main_Context)

    // console.log("Got Data in Log In page", travelDatasAll)

    const [showPassword, setShowPassword] = useState(false);


    const locate = useNavigate()

    const [registerformData, setRegiterFormData] = useState({
        name: '',
        email: '',
        password: '',
        userType: ''
    });

    const [loginFormData, setLoginFormData] = useState({
        username: '',
        password: ''
    })

    console.log(loginFormData)
    console.log(registerformData)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegiterFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setLoginFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleLoginInputChange = (event) => {
        const { name, value } = event.target;

        setLoginFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const registerUser = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:4004/api/auth/register', registerformData,
                { withCredentials: true })
            console.log(response.data)
            alert('Registered Succesfully')
        }
        catch (err) {
            console.error(err);
            alert(err.response.data)

        }
    }



    const logInUser = async (e) => {

        e.preventDefault()


        try {
            const response = await axios.post('http://localhost:4004/api/auth/login', loginFormData,
                { withCredentials: true })
            console.log(response.data)
            alert('Login Succesfully')
            const userData = response.data

            if (userData.usertype === 'admin') {
                navigate('/admin')
            } else {
                navigate('/home')
            }
        }
        catch (err) {
            console.error(err);
            alert(err.response.data)
        }
    }



    return (

        <>

            <div className='h-screen flex justify-center items-center bg-blue-100 login-main '>


                {
                    registerSwitch ? (

                        <form className='md:w-[28%] md:h-[60%] rounded-2xl login-form'>

                            <TextField
                                className={classes.textField}
                                label='Name'
                                type="text"
                                name="name"
                                value={registerformData.name}
                                onChange={handleInputChange}
                                placeholder='' />

                            <TextField
                                className={classes.textField}
                                label='Email'
                                type="email"
                                name="email"
                                value={registerformData.email}
                                onChange={handleInputChange}
                                placeholder='' />

                            <TextField
                                className={classes.textField}
                                label='Password'
                                type="text"
                                name="password"
                                value={registerformData.password}
                                onChange={handleInputChange}
                                placeholder='' />

                            <select
                                required
                                name="userType"
                                value={registerformData.userType}
                                onChange={handleInputChange}
                                className='p-3'
                            >
                                <option value="" disabled>select user</option>
                                <option value="admin">Admin</option>
                                <option value="client">Client</option>
                            </select>

                            <button className='ring-2 ring-white p-3'
                                onClick={registerUser}
                            >Register</button>

                            <Link onClick={() => setRegisterSwitching(false)}>Log in</Link>

                        </form>
                    )
                        :
                        (
                            <form action="" className='md:w-[28%] md:h-[60%] rounded-2xl login-form'>
                                <h1 className='text-2xl font-bold'>LOG IN</h1>


                                <TextField
                                    className={classes.textField}
                                    label="Username"
                                    placeholder='Email'
                                    type="email"
                                    name='username'
                                    value={loginFormData.username}
                                    onChange={handleLoginInputChange}
                                />

                                <FormControl variant="outlined" className={classes.textField}>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput

                                        id="outlined-adornment-password"
                                        type={showPassword ? "text" : "password"}
                                        name='password'
                                        value={loginFormData.password} onChange={handleLoginInputChange}
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
                                <button className='logIn-button' type='submit' onClick={logInUser} >Log In</button>

                                <Link to={'/home'} >Skip</Link>

                                <Link onClick={() => setRegisterSwitching(true)}>Register</Link>

                            </form>

                        )

                }


            </div>

        </ >
    )
}

export default LogIn