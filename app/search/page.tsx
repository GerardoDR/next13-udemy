import SearchHeader from './components/SearchHeader'
import SearchSideBar from './components/SearchSideBar'
import SearchRestaurantCard from './components/SearchRestaurantCard'
import { PrismaClient, Restaurant } from '@prisma/client'

const prisma = new PrismaClient();
const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    price: true,
    slug: true
}

const fetchRestaurantsByQuery = (city: string | undefined) => {
    if (!city) return prisma.restaurant.findMany({ select })

    return prisma.restaurant.findMany({
        where: {
            location: {
                name: {
                    contains: `${city.trim().toLocaleLowerCase()}`
                }
            }
        },
        select
    })
}
const fetchLocations = () => prisma.location.findMany()
const fetchCuisines = () => prisma.cuisine.findMany()

const SearchPage = async ({ searchParams }:
    {
        searchParams: { city: string | undefined, cuisine: string | undefined, price: string | undefined }
    }) => {

    const foundRestaurants = await fetchRestaurantsByQuery(searchParams.city)
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