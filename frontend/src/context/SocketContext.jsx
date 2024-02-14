import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { useAuthStore } from '../store/authStore'

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const authUser = useAuthStore((state) => state.authUser);

	useEffect(() => {
		if (authUser) {
			const socket = io("http://192.168.12.88:5002", {
				query: {
					userId: authUser._id, //send userId to backend via socket query
				},
			});

			setSocket(socket);

			// socket.on() is used to listen to the events. can be used both on client and server 
			socket.on("getOnlineUsers", (users) => {
				//recieve userId from backend 
				setOnlineUsers(users);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
