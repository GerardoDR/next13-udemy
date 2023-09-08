import NavBar from '@/app/components/NavBar'
import RestaurantHeader from './components/RestaurantHeader'
import RestaurantNavbar from './components/RestaurantNavbar'
import RestaurantTitle from './components/RestaurantTitle'
import Rating from './components/Rating'
import Description from './components/Description'
import RestaurantImages from './components/RestaurantImages'
import Reviews from './components/Reviews'
import ReservationsCard from './components/ReservationsCard'

const RestaurantDetailsPage = () => {
    return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <RestaurantNavbar />
                <RestaurantTitle />
                <Rating />
                <Description />
                <RestaurantImages />
                <Reviews />
            </div>
            <div className="w-[30%] relative text-reg shadow">
                <ReservationsCard />
            </div>
        </>
    )
}

export default RestaurantDetailsPage