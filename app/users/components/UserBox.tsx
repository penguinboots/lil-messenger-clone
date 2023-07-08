"use client";

import { User } from ".prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface UserBoxProps {
  data: User;
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios.post('/api/conversations', {
      userId: data.id
    })
    .then((data) => {
      router.push(`/conversations/${data.data.id}`)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [data, router])

  return (
  <div>

  </div>
  );
};

export default UserBox;
