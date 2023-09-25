import SearchHeader from './components/SearchHeader'
import SearchSideBar from './components/SearchSideBar'
import SearchRestaurantCard from './components/SearchRestaurantCard'
import { PRICE, PrismaClient, Restaurant } from '@prisma/client'

export interface SearchParams {
    city?: string | undefined,
    cuisine?: string | undefined,
    price?: PRICE | undefined
}

interface SearchBarQuery {
    location?: { name: { contains: string } },
    cuisine?: { name: { contains: string } },
    price?: { equals: PRICE }
}

const prisma = new PrismaClient();
const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    price: true,
    slug: true,
    reviews: true
}

const fetchRestaurantsByQuery = (searchParams: SearchParams) => {
    if (!searchParams.city && !searchParams.cuisine && !searchParams.price) return prisma.restaurant.findMany({ select })
    const where: SearchBarQuery = {/* */}
    if (searchParams.city) {
        const location = {
            name: {
                contains: searchParams.city.toLowerCase()
            }
        }
        where.location = location
    }
    if (searchParams.cuisine) {
        const cuisine = {
            name: {
                contains: searchParams.cuisine.toLowerCase()
            }
        }
        where.cuisine = cuisine
    }
    if (searchParams.price) {
        const price = { equals: searchParams.price }
        where.price = price
    }
    return prisma.restaurant.findMany({
        where,
        select
    })
}

const fetchLocations = () => prisma.location.findMany()
const fetchCuisines = () => prisma.cuisine.findMany()

const SearchPage = async ({ searchParams }:
    {
        searchParams: SearchParams
    }) => {

    const foundRestaurants = await fetchRestaurantsByQuery(searchParams)
    const locations = await fetchLocations()
    const cuisines = await fetchCuisines()

    return (
        <>
            <SearchHeader />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar locations={locations} cuisines={cuisines} initialQuery={searchParams} />
                <div className="w-5/6">
                    {
                        foundRestaurants.length > 1 ?
                            (foundRestaurants.map(r => {
                                return <SearchRestaurantCard key={r.id} restaurant={r} />
                            })) :
                            <p>Sorry, no restaurants found in this area</p>
                    }
                </div>
            </div>
        </>
    )
}

export default SearchPage