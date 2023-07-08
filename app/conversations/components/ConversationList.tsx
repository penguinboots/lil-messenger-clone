"use client";
import { Conversation } from ".prisma/client";
import { FullConversationType } from "@/app/types";

interface ConversationListProps {
  initialItems: FullConversationType[];
}

const ConversationList = ({ initialItems }) => {
  return (
    <div>ConversationList</div>
  );
};

export default ConversationList;
