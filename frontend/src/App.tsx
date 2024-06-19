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

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home/>}/>
    )
  )
  return (
    <Provider store={store}>
           <RouterProvider router={router}/>
    </Provider>

  )
}

export default App
