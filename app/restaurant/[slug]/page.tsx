import RestaurantNavbar from './components/RestaurantNavbar'
import RestaurantTitle from './components/RestaurantTitle'
import Rating from './components/Rating'
import Description from './components/Description'
import RestaurantImages from './components/RestaurantImages'
import Reviews from './components/Reviews'
import ReservationsCard from './components/ReservationsCard'
import { PrismaClient, Review } from '@prisma/client'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient();

interface Restaurant {
    id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
    reviews: Review[]
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findFirst({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true,
            reviews: true
        }
    })

    if (!restaurant) { throw new Error("Restaurant not found" && redirect("/not-found")) }

    return restaurant
}

const RestaurantDetailsPage = async ({
    params
}: {
    params: { slug: string }
}) => {

    const restaurant = await fetchRestaurantBySlug(params.slug)

    return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <RestaurantNavbar slug={params.slug} />
                <RestaurantTitle title={restaurant.name} />
                <Rating reviews={restaurant.reviews} />
                <Description description={restaurant.description} />
                <RestaurantImages images={restaurant.images} />
                <Reviews reviews={restaurant.reviews} />
            </div>
            <div className="w-[25%] relative text-reg shadow">
                <ReservationsCard />
            </div>
        </>
    )
}

export default RestaurantDetailsPage