import React from 'react'
import RestaurantNavbar from '../components/RestaurantNavbar'
import Menu from '../components/Menu'

const RestaurantMenuPage = () => {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug='lalala'/>
        <Menu />
      </div>
    </>
  )
}

export default RestaurantMenuPage