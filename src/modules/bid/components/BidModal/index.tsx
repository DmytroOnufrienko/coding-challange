import { Button } from "@/modules/common/ui/button";
import { Solicitation } from "@/modules/common/components/SearchBar/data";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/modules/common/ui/dialog";
import { FC, ReactNode } from "react";

interface IBidDetailsModalProps {
  trigger: ReactNode;
  content: Solicitation;
}

const BidDetailsModal: FC<IBidDetailsModalProps> = ({ trigger, content }) => {
  const {
    id,
    title,
    dueDate,
    solicitationSummary,
    mainCategory,
    solicitationType,
    attachments,
  } = content;

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bid Details</DialogTitle>
        </DialogHeader>
        <p>
          <span className="text-bold">ID:</span> {id}
        </p>
        <p>Title: {title}</p>
        <p>Due Date: {dueDate}</p>
        <p>Solicitation Summary: {solicitationSummary}</p>
        <p>Main Category: {mainCategory}</p>
        <p>Solicitation Type: {solicitationType}</p>
        <p>Attachments: {attachments}</p>
        <DialogFooter>
          <DialogClose>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BidDetailsModal;
