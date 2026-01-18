import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface dialogInterface {
  TriggerBtn: React.ReactNode,
  ActionBtn?: React.ReactNode,
  title?: string,
  desc?: string
}

const CustomDialog = ({ TriggerBtn, ActionBtn, title, desc }: dialogInterface) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {TriggerBtn}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-emerald-800 text-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-white">
            {desc}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {ActionBtn}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CustomDialog