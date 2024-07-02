import React from 'react'
import {
Route,
RouterProvider,
createBrowserRouter,
createRoutesFromElements
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home'
import Login from './components/Login'
import MainLayout from './layout/MainLayout'
import BookZone from './components/BookStore'
import Register from './components/Register'

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<MainLayout/>}>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>} />
           <Route path='/register' element={<Register/>}/>
           <Route path='/book' element={<BookZone/>}/>
       </Route> 
    )
  )
  return (
    <Provider store={store}>
           <RouterProvider router={router}/>
    </Provider>

  )
}

export default App
