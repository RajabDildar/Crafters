import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Icons } from "../icons/Icons"
interface CircleBarInterface {
    image?: string
}

const CirclesBar = ({ image }: CircleBarInterface) => {
    const Images = Icons.Images
    return (

        <Avatar className={"border-emerald-800 border-4 h-16 w-16"} >
            <AvatarImage src={image} />
            <AvatarFallback>{<Images />}</AvatarFallback>
        </Avatar>
    )
}

export default CirclesBar
