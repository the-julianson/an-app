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
    const [loading, setLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const hasFetched = useRef(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
                setLoading(false);
                setHasError(false);
            } catch (err) {
                setHasError(true);
                if (err instanceof Error) {
                    setErrorMsg(err.message);
                } else {
                    setErrorMsg("An unknown error occurred");
                }
                setLoading(false);
            }
        };

        if (!hasFetched.current) {
            hasFetched.current = true;
            setTimeout(fetchUsers, 1000);
        }
    }, []);

    return (
        <div className="p-6 border rounded-lg shadow-lg bg-white w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-500">Client Side User List</h2>
            <ul className="divide-y divide-gray-200">
                {loading ? (
                    <li className="text-center py-2 text-gray-500">Loading...</li>
                ) : hasError ? (
                    <li className="text-center py-2 text-red-500">{errorMsg}</li>
                ) : (
                    users.map((user) => (
                        <li key={user.id} className="py-2 flex justify-between items-center">
                            <span className="text-gray-700 font-medium">{user.name}</span>
                            <span className="text-gray-500">{user.email}</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default UserList;
