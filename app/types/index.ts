import { Conversation, Message, User } from "@prisma/client";

export type FullMessagType = Message & {
    sender: User,
    seen: User[]
};

export type FullConversationType = Conversation & {
    users: User[],
    messages: FullMessagType[],
};
