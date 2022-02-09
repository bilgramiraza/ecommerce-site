import React from 'react'
import { useNavigate } from 'react-router-dom'

const Catalogue = () => {
    let navigate = useNavigate();
  return (
    <div>
        <h2>Catalogue</h2>
        <div onClick={()=>navigate(`/products/${parseInt(Math.random()*100)}`)}>
            Product
        </div>
    </div>
  )
}

export default Catalogue
