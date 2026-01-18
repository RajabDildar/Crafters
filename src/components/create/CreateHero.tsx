import Circles from "../explore/Circles"
import { Icons } from "../icons/Icons"
import CirclesBar from "../menubars/CirclesBar"
import { Button } from "../ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const CreateHero = () => {
    const ArrowLeft = Icons.ArrowLeft
    return (
        <div className="min-h-8 bg-[#EBE2D0] p-3">
            <div className="btns flex p-1 justify-between">
                <Button variant={"greenBtn"}> <ArrowLeft /> </Button>
                <Button variant={"greenBtn"}> Save</Button>
            </div>
            <div className="p-3 flex justify-center items-center">
                <div className="bg-[#593A16] p-6 rounded-2xl">
                    <CirclesBar />
                </div>
            </div>
            <div >
                <p className="font-medium my-3">Settings</p>
                <div className="flex items-center gap-3">
                    <Checkbox id="public" className="border border-emerald-800" />
                    <Label htmlFor="public">Public</Label>
                </div>
            </div>
            <div className="my-3">
                <div className="flex justify-between my-3">
                    <p className="font-medium">Members</p>
                    <Button variant={"whiteBtn"} className="border border-emerald-800">Invite</Button>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 p-3 bg-white">
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                    <Circles name="Tony" />
                </div>
            </div>
        </div>
    )
}

export default CreateHero