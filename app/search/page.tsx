import SearchHeader from './components/SearchHeader'
import SearchSideBar from './components/SearchSideBar'
import SearchRestaurantCard from './components/SearchRestaurantCard'
import { PrismaClient, Restaurant } from '@prisma/client'

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const prisma = new PrismaClient();

// const fetchRestaurantsByQuery = async({ searchParams }: Props): Promise<Restaurant[]> => {
//     if (searchParams.city) {
//         const location = searchParams.city
//         const restaurantsByLocation = await prisma.restaurant.findMany({
//             where: {
//                 location: {
//                     name: `${location}`
//                 }
//             },
//         })
//         return restaurantsByLocation
//     }
//     return
// }

const SearchPage = ({ searchParams }: Props) => {
    // const restaurantsFound = fetchRestaurantsByQuery(searchParams)
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