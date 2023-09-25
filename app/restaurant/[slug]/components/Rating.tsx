import Stars from '@/app/components/Stars'
import { calculateRatingAverage } from '@/utils/calculateRatings'
import { Review } from '@prisma/client'
import React from 'react'

const Rating = ({ reviews }: { reviews: Review[] }) => {
    const rating = Number(calculateRatingAverage(reviews).toFixed(1))
    return (
        <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
                <Stars reviews={reviews} />
                <p className="text-reg ml-3">{rating}</p>
            </div>
            <div>
                <p className="text-reg ml-4">{reviews.length} Review{reviews.length === 1 ? "" : "s"}</p>
            </div>
        </div>
    )
}

export default Rating