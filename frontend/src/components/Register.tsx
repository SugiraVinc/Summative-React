import React, { useState, useEffect } from 'react';
import '../login.css'
import avatarImage from '../assets/happy-young-cute-illustration-face-profile-png.png';
import { setCredentials } from '../slices/authSlice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import Spinner from './Spinners';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {userInfo} = useSelector((state: any) => state.auth)

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

        if(password === confirmPassword) {
            const data = {
                name,
                email,
                password
            }
         const res = await fetch('/api/users/register', {
            credentials:'include',
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
         })
         console.log(data)
         const myData = await res.json()
         console.log(myData)
         dispatch(setCredentials({...myData}))
         toast.success('register successfully')
         navigate('/')
        }else {
            toast.error('password do not match')
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
          <label htmlFor="uname"><b>name</b></label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="uname"><b>email</b></label>
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

          <label htmlFor="psw"><b>Confirm Password</b></label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="psw"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {isLoading && <Spinner/>}
          <button type="submit">Register</button>
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
          <span className="psw">Already have an account <Link to="/login">Login</Link></span>
        </div>
      </form>
    </section>
  );
};

export default Register;