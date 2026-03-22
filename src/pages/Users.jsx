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
    return (
        <div>
            <input className="border p-2 mb-4" type="text" placeholder="Search users...." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <table className="table-auto border w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {users.filter((user) =>
                        user.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )

                        })

                    }
                </tbody>
            </table>
        </div>
    )
}
export default Users;