import CustomDialog from "@/layouts/CustomDialog"
import CirclesBar from "../menubars/CirclesBar"
import { Button } from "../ui/button"
interface CardInterface {
    name: string,
    count?: number,
    date?: string,
    image?: string,
    desc?: string
}
const Circles = ({ name, count, date, image, desc }: CardInterface) => {
    return (
        <CustomDialog TriggerBtn={
            <div className={"flex flex-col gap-1 bg-[#EBE2D0] p-3 rounded-2xl w-full m-auto cursor-pointer"}>
                <CirclesBar image={image} />
                <p>{name}</p>
                {count && <p>{count} members</p>}
                <p>{date}</p>
            </div>
        }
            title={name}
            desc={desc}
            ActionBtn={<Button variant={"whiteBtn"}>Join</Button>}
        />
    )
}

export default Circles