import { Button } from "../ui/button"

const HelperButtons = () => {
    return (
        <div className="flex justify-between p-3">
            <Button variant={"greenBtn"}>Filters</Button>
            <Button variant={"greenBtn"}>Add circle</Button>
        </div>
    )
}

export default HelperButtons