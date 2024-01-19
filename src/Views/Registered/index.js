
import {TextField, Button, Box} from '@mui/material'

import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registered } from '../../config/Firebase/firebase'




function Registered(){
    const navigate = useNavigate()
    const [fullname, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signUp =async ()=>{
        try {
            await registered({fullname, email, password })
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
        
    }

    return <Box sx={{height: '55rem'}} className='reg-form d-flex justify-content-center align-items-center'>

<form className='d-flex justify-content-center flex-column w-25 gap-5 '>
<TextField onChange={(event)=>setFullName(event.target.value)} type='text' id="outlined-basic" label="Full Name" variant="outlined" />
<TextField onChange={(event)=>setEmail(event.target.value)} type='email' id="outlined-basic" label="Email" variant="outlined" />
<TextField onChange={(event)=>setPassword(event.target.value)} type='password' id="outlined-basic" label="Password" variant="outlined" />

<Button onClick={signUp} className='w-100 d-flex item-center p-3 ' variant="contained" color="primary">
Registered
</Button>

<p>
    Already have an account..
    <span style={{color: 'blue'}} onClick={()=>navigate("/login")} >Login here</span>
</p>
</form>


    </Box>
}

export default Registered