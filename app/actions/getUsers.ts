import { Prisma } from "@prisma/client";
import getSession from "./getSession";

const getUsers = async () => {
    const session = await getSession();

    if (!session?.user?.email) {
        return [];
    }

    try {
        const users = await prisma?.user.findMany({
            orderBy: {
                createAt: 'desc',
            },
            where: {
                NOT: {
                    email: session.user.email
                }
            }
        });

        return users;
    } catch (error: any) {
        return [];
    }
};

export default getUsers;