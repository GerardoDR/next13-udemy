import RestaurantHeader from './components/RestaurantHeader'
import type { Metadata, ResolvingMetadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
// export const metadata: Metadata = {
//   title: `Restaurant`,
//   description: 'Layout Test',
// }
type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    console.log(params);
    console.log(searchParams);
    
    // read route params
    const slug = params.slug
    // fetch data
    // const restaurant = await fetch(`https://localhost:3000/restaurant/${slug}`).then((res) => res.json())
    // console.log(restaurant);
    return {
        title: slug,
    }
}


const RestaurantLayout = ({ children, params, searchParams }: { children: React.ReactNode, params: Props, searchParams: Props }) =>{
// const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <RestaurantHeader />
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                {children}
            </div>
        </main>
    )
}

export default RestaurantLayout