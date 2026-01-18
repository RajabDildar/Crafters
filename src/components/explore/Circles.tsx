import CirclesBar from "../menubars/CirclesBar"
interface CardInterface {
    name: string,
    count?: number,
    date?: string,
    image: string,
    cls?: string,
}
const Circles = ({ name, count, date, image, cls }: CardInterface) => {
    return (
        <div className={"flex flex-col gap-1 bg-stone-400 p-3 rounded-2xl w-full m-auto" + " " + cls}>
            <CirclesBar image={image} />
            <p>{name}</p>
            {count && <p>{count} members</p>}
            <p>{date}</p>
        </div>
    )
}

export default Circles