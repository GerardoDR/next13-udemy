import { PRICE } from '@prisma/client'
import React, { ReactElement } from 'react'
import { JsxElement } from 'typescript'

const Price = ({ price }: { price: PRICE }) => {
    const renderPrice = ():ReactElement => {
        switch (price) {
            case PRICE.CHEAP:
                return (<><span>$$</span><span className='text-gray-400'>$$</span></>)
            case PRICE.REGULAR:
                return (<><span>$$$</span><span className='text-gray-400'>$</span></>)
            default:
                return (<><span>$$$$</span><span className='text-gray-400'>$$</span></>)
        }
    }

    return (
        <p className="mr-3">{renderPrice()}</p>
    )
}

export default Price