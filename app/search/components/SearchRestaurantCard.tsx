import Price from '@/app/components/Price';
import Stars from '@/app/components/Stars';
import { RestaurantCardType } from '@/app/page';
import Link from 'next/link'
import React from 'react'


const SearchRestaurantCard = ({ restaurant }: { restaurant: RestaurantCardType }) => {
    return (
        <div className="border-b flex pb-5 ml-4">
            <img
                src={restaurant.main_image}
                alt=""
                className="w-44 h-24 rounded"
            />
            <div className="pl-5">
                <h2 className="text-3xl">{restaurant.name}</h2>
                <div className="flex items-start">
                    <div className="mb-2">
                        <Stars reviews={restaurant.reviews} />
                    </div>
                    <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <Price price={restaurant.price} />
                        <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
                        <p className="mr-4 capitalize">{restaurant.location.name}</p>
                    </div>
                </div>
                <div className="text-red-600">
                    <Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
                </div>
            </div>
        </div>
    )
}

export default SearchRestaurantCard