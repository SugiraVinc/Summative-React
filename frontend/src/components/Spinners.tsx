import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";


const Spinner: React.FC = () => {
    const color = {
        width: '100px',
        margin: '0 auto'
    }
  return (
    <>
      <CircleLoader
       color='#35C2A8'
       cssOverride={color}
      />
    </>
  )
}

export default Spinner