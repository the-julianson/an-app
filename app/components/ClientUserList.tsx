// components/UserList.tsx
'use client';

import { useEffect, useState, useRef } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => setUsers(data));
        }
    }, []);

    return (
        <div className="p-6 border rounded-lg shadow-lg bg-white w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-500">Client Side User List</h2>
            <ul className="divide-y divide-gray-200">
                {users.map((user) => (
                    <li key={user.id} className="py-2 flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{user.name}</span>
                        <span className="text-gray-500">{user.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;