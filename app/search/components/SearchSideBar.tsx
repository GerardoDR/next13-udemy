import { Location, Cuisine, PRICE } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

const filters = ['city', 'cuisine', 'price']

const getQueryKeys = (initialQuery: {
    [key: string]: string | string[] | undefined
}) => Object.keys(initialQuery)

const queryBuilder = (
    initialQuery: { [key: string]: string | string[] | undefined },
    qKeys: string[],
    filter: string,
    value: string | PRICE
) => {
    if (qKeys.length === 0) return { [filter]: value }

    if (!qKeys.some(k => k === filter)) {
        return { ...initialQuery, [filter]: value }
    }
    const initialQueryCopy = { ...initialQuery }
    initialQueryCopy[filter] = value

    return initialQueryCopy
}

const SearchSideBar = async ({ locations, cuisines, initialQuery }: { locations: Location[], cuisines: Cuisine[], initialQuery: { [key: string]: string | string[] | undefined } }) => {
    const qKeys = getQueryKeys(initialQuery)
    return (
        <div className="w-1/5">
            <div className="border-b pb-4">
                <h1 className="mb-2">Region</h1>
                {locations.map(location => {
                    return (
                        <Link key={location.id} className="font-light text-reg" href={{ pathname: '/search', query: queryBuilder(initialQuery, qKeys, 'city', location.name) }} replace>
                            <p className="font-light text-reg capitalize">{location.name}</p>

                            {/* ALTERNATIVA DE RESOLUCION 
                            
                            href={{ pathname: '/search', query: {...searchParams, city: location.name }}
                            si... mucha bronca
                            si ya tenía city, lo reemplaza, sino lo agrega
                            */}
                        </Link>
                    )
                }
                )}
            </div>
            <div className="border-b pb-4 mt-3">
                <h1 className="mb-2">Cuisine</h1>
                {cuisines.map(cuisine => <Link key={cuisine.id} className="font-light text-reg" href={{ pathname: '/search', query: queryBuilder(initialQuery, qKeys, 'cuisine', cuisine.name) }}>
                    <p className="font-light text-reg capitalize">{cuisine.name}</p>
                </Link>
                )}
            </div>
            <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                    <Link href={{ pathname: '/search', query: queryBuilder(initialQuery, qKeys, 'price', 'CHEAP') }}
                        className="border w-full text-reg font-light rounded-l p-2">
                        $
                    </Link>
                    <Link href={{ pathname: '/search', query: queryBuilder(initialQuery, qKeys, 'price', 'REGULAR') }}
                        className="border-r border-t border-b w-full text-reg font-light p-2"
                    >
                        $$
                    </Link>
                    <Link href={{ pathname: '/search', query: queryBuilder(initialQuery, qKeys, 'price', 'EXPENSIVE') }}
                        className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r"
                    >
                        $$$
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchSideBar