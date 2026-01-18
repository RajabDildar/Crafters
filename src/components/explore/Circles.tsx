import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Icons } from "../icons/Icons"
interface CirclesInterface {
    circleName: string,
    membersCount: number,
    date: string,
    image: string,
}
const Circles = ({ circleName, membersCount, date, image }: CirclesInterface) => {
    const Images = Icons.Images
    return (
        <div className="flex flex-col gap-1 bg-stone-400 p-3 rounded-2xl max-w-36 w-full m-auto">
            <Avatar className="border-emerald-800 border-4 h-16 w-16">
                <AvatarImage src={image} />
                <AvatarFallback>{<Images />}</AvatarFallback>
            </Avatar>
            <p>{circleName}</p>
            <p>{membersCount} members</p>
            <p>{date}</p>
        </div>
    )
}

export default Circles