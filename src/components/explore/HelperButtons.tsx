import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const HelperButtons = () => {
    return (
        <div className="flex justify-between p-3">
            <Button variant={"greenBtn"}>Filters</Button>
            <Link to={"/circle/create"}>
                <Button variant={"greenBtn"}>Add circle</Button>
            </Link>
        </div>
    )
}

export default HelperButtons