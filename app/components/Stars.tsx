import React from 'react'
import fullStar from '../../public/icons/full-star.png'
import halfStar from '../../public/icons/half-star.png'
import emptyStar from '../../public/icons/empty-star.png'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Review } from '@prisma/client'
import { calculateRatingAverage } from '@/utils/calculateRatings'

const Stars = ({ reviews, rating }: { reviews: Review[], rating?: number }) => {
    const reviewRating = rating || parseFloat(calculateRatingAverage(reviews).toFixed(1))

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const diff = reviewRating - i
            if (diff >= 1) stars.push(fullStar)
            else if (diff < 1 && diff > 0) {
                if (diff <= 0.2) stars.push(emptyStar)
                else if (diff > 0.2 && diff <= 0.6) stars.push(halfStar)
                else stars.push(fullStar)
            }
            else stars.push(emptyStar)
        }
        // eslint-disable-next-line react/jsx-key
        return stars.map((star: StaticImport) => <Image key={'star'+Math.random()} src={star} alt={'star rating'} className='w-4 h-4 mr-1' />)
    }

    return (
        <div className='flex items-center'>
            {renderStars()}
        </div>
    )
}

export default Stars