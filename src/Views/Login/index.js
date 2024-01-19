
import { TextField, Button, Box } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../../config/Firebase/firebase'




function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = async () => {
       
        try {
            await login({ email, password })
            navigate("/")
            
        } catch (error) {
            console.log(error);
            
        }

    }
    


    return <Box sx={{ height: '60rem' }} className='reg-form d-flex justify-content-center align-items-center'>

        <form className='d-flex justify-content-center flex-column w-25 gap-5 '>
            <TextField onChange={(event) => setEmail(event.target.value)} type='email' id="outlined-basic" label="Email" variant="outlined" />
            <TextField onChange={(event) => setPassword(event.target.value)} type='password' id="outlined-basic" label="Password" variant="outlined" />

            <Button onClick={signIn} className='w-100 d-flex item-center p-3 ' variant="contained" color="primary">
                Login
            </Button>
            <p>
                Don't have an account..
                <span style={{ color: 'blue' }} onClick={() => navigate("/registered")} >Register here</span>
            </p>
        </form>

    </Box>
}

export default Login