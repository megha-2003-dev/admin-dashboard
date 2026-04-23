import { useState } from "react";
import { useUsers } from "../hooks/useUsers";

function Users() {
    const { users, loading, error, refetch } = useUsers();
    const [searchTerm, setSearchTerm] = useState("");

    // ✅ Proper loading state
    if (loading) {
        return (
            <div className="flex flex-col gap-3 p-4">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-200 rounded animate-pulse" />
                ))}
            </div>
        );
    }

    // ✅ Proper error state with retry
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
                <p className="text-red-500 font-medium">{error}</p>
                <button
                    onClick={refetch}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Try Again
                </button>
            </div>
        );
    }

    const filteredUsers = users.filter((user) =>
        user.login.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-700">
                    GitHub Users
                    <span className="ml-2 text-sm font-normal text-gray-400">
                        ({users.length} total)
                    </span>
                </h2>

                {/* ✅ Search */}
                <input
                    className="border p-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    type="text"
                    placeholder="Search by username..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded shadow overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-3 text-left text-gray-600 font-medium">User</th>
                            <th className="p-3 text-left text-gray-600 font-medium">Username</th>
                            <th className="p-3 text-left text-gray-600 font-medium">Type</th>
                            <th className="p-3 text-left text-gray-600 font-medium">Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* ✅ Empty state */}
                        {filteredUsers.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="p-8 text-center text-gray-400">
                                    <p className="text-2xl mb-2">🔍</p>
                                    <p>No users found for "{searchTerm}"</p>
                                </td>
                            </tr>
                        ) : (
                            filteredUsers.map((user) => (
                                <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors">
                                    {/* ✅ Avatar from GitHub API */}
                                    <td className="p-3">
                                        <img
                                            src={user.avatar_url}
                                            alt={user.login}
                                            className="w-8 h-8 rounded-full"
                                        />
                                    </td>
                                    <td className="p-3 font-medium text-gray-700">
                                        {user.login}
                                    </td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            user.type === "Organization"
                                                ? "bg-purple-100 text-purple-700"
                                                : "bg-green-100 text-green-700"
                                        }`}>
                                            {user.type}
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        {/* ✅ Clickable GitHub profile link */}
                                        <a
                                            href={user.html_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-500 hover:underline text-sm"
                                        >
                                            View →
                                        </a>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
