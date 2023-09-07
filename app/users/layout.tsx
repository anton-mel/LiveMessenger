import React from "react";
import Sidebar from '../components/sidebar/Sidebar';
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

export default async function UsersLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const users = await getUsers();

    if (!users) {
        return null;
    }

    return (
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <UserList items={users}/>
                {children}
            </div>
        </Sidebar>
    );
}