import { useEffect, useState } from "react";
import axios from "axios";

// ✅ Custom hook — API logic separated from UI components
export function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = () => {
        setLoading(true);
        setError(null);

        axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/users?per_page=30`)
            .then((res) => setUsers(res.data))
            .catch(() => setError("Failed to fetch users. Please try again."))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users, loading, error, refetch: fetchUsers };
}
