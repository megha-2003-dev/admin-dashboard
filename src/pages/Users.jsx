import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            setUsers(response.data)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return <p className="text-lg text-black">Loading Users....</p>
    }
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <input className="border p-2 mb-4" type="text" placeholder="Search users...." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <table className="table-auto border border-gray-300 rounded w-full">
                <thead>
                    <tr className="border-b hover:bg-gray-100">
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {filteredUsers.length === 0 ? (
                        <tr>
                            <td colSpan="2" className="p-4 text-center text-gray-500">
                                No users found
                            </td>
                        </tr>
                    ) : (
                        filteredUsers.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-100">
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.email}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Users;