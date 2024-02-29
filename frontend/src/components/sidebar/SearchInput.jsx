import React, { useState } from 'react'
import useConversation from '../../store/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
	const [search, setSearch] = useState('');
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (

		<form onSubmit={handleSubmit} class="conversations_search_container">
			{/* <form onSubmit={handleSubmit} > */}
			{/* <input value={search} type="text" onChange={(e) => setSearch(e.target.value)} />
				<button type='submit'>search</button> */}

			<span>Chats</span>
			<input class="conversations_search_input" value={search} type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
			<button type='submit' class="add_chat_btn"><img src="https://img.icons8.com/pastel-glyph/64/FFFFFF/search--v1.png" alt="search--v1"/></button>

			{/* </form> */}
		</form>
	)
}

export default SearchInput