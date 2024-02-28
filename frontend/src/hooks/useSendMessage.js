import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../store/useConversation";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const sendMessage = async ({ message, file }) => {

		setLoading(true);
		try {

			// const formData = new FormData();
			// formData.append('files', selectedFiles);


			// if (selectedFiles && selectedFiles.length > 0) {
			// 	formData.append('message', message);
			// 	if (Array.isArray(selectedFiles)) {
			// 		selectedFiles.forEach((file) => {
			// 			formData.append('files', file);
			// 		});
			// 	} else {
			// 		formData.append('files', selectedFiles);
			// 	}
			// }

			const formData = new FormData();
			if (file) {
				formData.append('files', file);
			}

			const payloadImg = { // send reciever id on params
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message }),
			}
			const payloadFile = { // send reciever id on params
				method: "POST",
				body: formData 
			}

			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, file ? payloadFile : payloadImg);
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setMessages([...messages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;