import { useEffect, useState } from "react";
import useActiveList from "./useActiveList";
import { Channel, Members } from "pusher-js";
import { pusherClient } from "../libs/pusher";

const useActiveChannel = () => {
  const { set, add, remove } = useActiveList();
  const [activeChannel, setActiveChannel] = useState<Channel | null>(null);

  useEffect(() => {
    let channel = activeChannel;
    if (!channel) {
      channel = pusherClient.subscribe('presence-messenger');
      setActiveChannel(channel);
    }

    channel.bind('pusher:subscription_succeeded', (members: Members) => {
      const initialMembers: string[] = [];

      members.each((member: Record<string, any>) => initialMembers.push(member.id)); // use .each for pusher Members
      set(initialMembers);
    })
  }, [])
}

export default useActiveChannel;