import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "../icons/Icons"

interface PostInterface {
    username: string, postImage: string, postText: string, postDate: string
}

const CirclePost = ({ username, postImage, postText, postDate }: PostInterface) => {
    const Images = Icons.Images
    return (
        <div className="bg-orange-950 text-white p-3 rounded-2xl">
            <div className="flex gap-3">
                <Avatar className="w-24 h-24">
                    <AvatarImage src={postImage} />
                    <AvatarFallback>{<Images />}</AvatarFallback>
                </Avatar>
                <p>{postText}</p>
            </div>
            <div>
                <h3 className="mt-2">{username}</h3>
                <p>{postDate}</p>
            </div>
        </div>
    )
}

export default CirclePost