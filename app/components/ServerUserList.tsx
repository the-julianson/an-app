// components/UserList.tsx

type User = {
    id: number;
    name: string;
    email: string;
};

async function getData(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
}

export default async function UserList() {
    const users = await getData();

    return (
        <div className="p-6 border rounded-lg shadow-lg bg-white w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-500">Server Side User List</h2>
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
