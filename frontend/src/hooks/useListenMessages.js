import { useEffect } from "react";
import useConversation from "../store/useConversation";
import { useSocketContext } from "../context/SocketContext";
import addNotification from "react-push-notification";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			// newMessage.shouldShake = true;
			
			setMessages([...messages, newMessage]); //update message array with new socket call messages
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;
