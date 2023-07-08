import prisma from "@/app/libs/prismadb";

// Fetch messages by conversationId, newest on the bottom
const getMessages = async(
  conversationId: string
) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId
      },
      include: {
        sender: true,
        seen: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

  } catch (error: any) {
    return [];
  }
}

export default getMessages;