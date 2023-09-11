import React from 'react'

const RestaurantHeader = ({ name }: { name: string }) => {

    const namePrettier = (): string => {
        const nameArray = name.trim().split('-')
        nameArray[nameArray.length - 1]=`(${nameArray[nameArray.length - 1]})`
        return nameArray.join(" ")
    }
    return (
        <div className="h-80 overflow-hidden">
            <div
                className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center"
            >
                <h1 className="text-6xl text-white capitalize text-shadow text-center">
                    {namePrettier()}
                </h1>
            </div>
        </div>
    )
}

export default RestaurantHeader