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
import SingleBook from './components/SingleBook'
import BookForm from './components/CreateBook'
import EditBookForm from './components/EditBookForm'

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<MainLayout/>}>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>} />
           <Route path='/register' element={<Register/>}/>
           <Route path='/book' element={<BookZone/>}/>
           <Route path='/single-book/:id' element={<SingleBook/>}/>
           <Route path='/create-book' element={<BookForm/>}/>
           <Route path='/edit-book/:id' element={<EditBookForm/>}/>
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
