import React from 'react'
import RestaurantNavbar from '../components/RestaurantNavbar'
import Menu from '../components/Menu'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findFirstOrThrow({
    where: {
      slug
    },
    select: {
      items: true
    }
  })
  return restaurant.items
}

const RestaurantMenuPage = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug)
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  )
}

export default RestaurantMenuPage