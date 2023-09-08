import ReserveHeader from './components/ReserveHeader'
import ReserveForm from './components/ReserveForm'

const ReservationPage = () => {
    return (
        <div className="border-t h-screen">
            <div className="py-9 w-3/5 m-auto">
                <ReserveHeader />
                <ReserveForm />
            </div>
        </div>
    )
}

export default ReservationPage