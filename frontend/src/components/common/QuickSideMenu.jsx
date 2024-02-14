import React from 'react'

const QuickSideMenu = () => {
    return (
        <>
            <div class="sideMenu">
                <div class="sideMenu_logo"><img src="https://cdn-icons-png.freepik.com/512/4218/4218179.png" alt="" /></div>
                <ul class="sideMenu_list">
                    <li class="sideMenu_chats active"><a href="#" data-title="Chats"><img width="50" height="50"
                        src="https://img.icons8.com/ios/50/FFFFFF/chat.png" alt="chat" /></a></li>
                    <li class="sideMenu_saved"><a href="#" data-title="Saved"><img width="24" height="24"
                        src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/FFFFFF/external-bookmark-basic-user-interface-anggara-basic-outline-anggara-putra.png"
                        alt="external-bookmark-basic-user-interface-anggara-basic-outline-anggara-putra" /></a></li>
                    <li class="sideMenu_settings"><a href="#" data-title="Settings"><img width="64" height="64"
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/FFFFFF/external-Calendar-cenima-flatart-icons-outline-flatarticons.png"
                        alt="external-Calendar-cenima-flatart-icons-outline-flatarticons" /></a></li>
                    <li class="sideMenu_settings"><a href="#" data-title="Settings"><img width="50" height="50"
                        src="https://img.icons8.com/ios/50/FFFFFF/settings--v1.png" alt="settings--v1" /></a></li>
                </ul>
                <div class="sideMenu_profile"><img src="https://avatar.iran.liara.run/public/boy" alt="" /></div>
            </div>
        </>
    )
}

export default QuickSideMenu