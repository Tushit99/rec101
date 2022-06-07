import axios from "axios";
import {useContext}  from "react" ; 
import {useState} from "react" ; 
import { Navigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";


const Login = () => { 
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 
    const [state, dispatch] = useContext(AppContext);  

    const handle= (e)=>{ 
        e.preventDefault() 
        axios({
            url:"https://reqres.in/api/login",  
            method: "POST" , 
            body:{
                email , 
                password 
            }
        }).then((res)=>{
            alert("Success");  
            dispatch({
                type: "LOGIN_SUCCESS" , 
                token: res.data.token 
            }); 
        }).catch((err)=>{
            console.log(err.message); 
            
        })
    }

    if(state.isAuth){
        return <Navigate to="/users" />
    }

  return (
    <div className="loginpage">
        <h1> Login </h1>
         
       <form onSubmit={handle}>
        <div>
            <input className="log-input" placeholder='Email' value={email} type="text"  onChange={(e)=> setEmail(e.target.value)} />
        </div>  
        <div>
            <input className="log-input" placeholder='Password' value={password} type="text"  onChange={(e)=> setPassword(e.target.value)} />
        </div> 
        <div>
            <button className="log-but" type="submit" > Submit </button>
        </div>
    </form> 
    </div>
  )
}

export default Login