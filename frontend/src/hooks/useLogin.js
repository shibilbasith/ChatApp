import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const setAuthUser = useAuthStore((state) => state.setAuthUser);
    const login = async ({ username, password }) => {
        const success = handleInputErrors(username, password);
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { login }
}

export default useLogin;

const handleInputErrors=(username, password)=> {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}