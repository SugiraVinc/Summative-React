import React, { useState, useEffect } from 'react';
import '../login.css'
import avatarImage from '../assets/happy-young-cute-illustration-face-profile-png.png';
import { setCredentials } from '../slices/authSlice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import Spinner from './Spinners';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const {userInfo} = useSelector((state: any) => state.auth)
    console.log(userInfo)
  
    useEffect(() => {
      const getUserData = () => {
          if(userInfo) {
              dispatch(setCredentials(userInfo))
              navigate('/')
          }
      }
      getUserData()
    }, [userInfo])

 
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        try {
    
            const data = {
                email,
                password
            }
         const res = await fetch('/api/users/login', {
            credentials:'include',
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
         })

         const myData = await res.json()
         if(myData.email) {
            dispatch(setCredentials({...myData}))
            toast.success('login successfully')
            navigate('/')
         } else {
            toast.error('Invalid email or password')
         }
         
        } catch (err) {
            //@ts-ignore
            toast.error(err?.data?.message || err.error)
            console.log(err)
        }finally {
            setIsLoading(false)
        }
      };

  return (
    <section>
      <input type="checkbox" id="check" />
      

      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src={avatarImage} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
        <label htmlFor="email"><b>email</b></label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            {isLoading && <Spinner/>}
          <button type="submit">Login</button>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              name="remember"
            /> Remember me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
        <span className="psw">Don't have an account <Link to="/register">Register</Link></span>
        </div>
      </form>
    </section>
  );
};

export default Login;