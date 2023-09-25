import Link from 'next/link'
import React from 'react'
import { RestaurantCardType } from "../page"
import Price from './Price'
import { calculateRatingAverage } from '@/utils/calculateRatings'
import Stars from './Stars'
interface Props {
    restaurant: RestaurantCardType
}

const RestaurantCard = ({ restaurant }: Props) => {
    const reviewsRating = calculateRatingAverage(restaurant.reviews)

    const ratingText = () => {
        if (reviewsRating > 4) return "Awesome"
        if (reviewsRating <= 4 && reviewsRating > 3) return "Good"
        if (reviewsRating <= 3 && reviewsRating > 0) return "Average"
        return ""
    }
    
    return (
        <div
            className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
        >
            <Link href={`/restaurant/${restaurant.slug}`}>
                <img
                    src={restaurant.main_image}
                    alt=""
                    className="w-full h-36"
                />
                <div className="p-1">
                    <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
                    <div className="flex">
                        <Stars reviews={restaurant.reviews} />
                        {reviewsRating > 0 && <p className="ml-2 text-sm">{ratingText()}</p>}
                    </div>
                    <p className="ml-2">{restaurant.reviews.length} review{restaurant.reviews.length === 1 ? "" : "s"}</p>
                    <div className="flex text-reg font-light capitalize">
                        <p className=" mr-3">{restaurant.cuisine.name}</p>
                        <Price price={restaurant.price} />
                        <p>{restaurant.location.name}</p>
                    </div>
                    <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
                </div>
            </Link>
        </div>
    )
}

export default RestaurantCard