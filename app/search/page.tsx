import SearchHeader from './components/SearchHeader'
import SearchSideBar from './components/SearchSideBar'
import SearchRestaurantCard from './components/SearchRestaurantCard'
import { PrismaClient, Restaurant } from '@prisma/client'

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const prisma = new PrismaClient();

const fetchRestaurantsByQuery = async ({ searchParams }: { searchParams: Props }): Promise<Restaurant[]> => {
    console.log(searchParams);
    // if (searchParams.city) {

    //     const restaurantsByLocation = await prisma.restaurant.findMany({
    //         where: {
    //             location: {
    //                 name: {
    //                     contains: `${searchParams.city}`
    //                 }
    //             }
    //         },
    //     })
    //     return restaurantsByLocation
    // }
    throw new Error('No location provided')
}

const SearchPage = ({ searchParams }: { searchParams: Props }) => {
    // const restaurantsFound = fetchRestaurantsByQuery(searchParams)
    fetchRestaurantsByQuery(searchParams)

    return (
        <>
            <SearchHeader />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar />
                <div className="w-5/6">
                    <SearchRestaurantCard />
                </div>
            </div>
        </>
    )
}

export default SearchPage