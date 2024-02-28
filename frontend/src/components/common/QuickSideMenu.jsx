import { Button, Popover, Space } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom'
import useLogout from '../../hooks/useLogout';



const QuickSideMenu = () => {
  const {logout} = useLogout();

const content = (
    <div>
      <div onClick={logout} style={{cursor:'pointer'}}>logout</div>
    </div>
  );

    return (
        <>
            <div class="sideMenu">
                <div class="sideMenu_logo"><img src="https://cdn-icons-png.freepik.com/512/4218/4218179.png" alt="" /></div>
                <ul class="sideMenu_list">
                    <li class="sideMenu_chats active"><NavLink to={'/'} data-title="Chats"><img width="50" height="50"
                        src="https://img.icons8.com/ios/50/FFFFFF/chat.png" alt="chat" /></NavLink></li>
                    <li class="sideMenu_settings"><NavLink to={'/code_share'} data-title="Settings"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/code--v1.png" alt="code--v1" /></NavLink></li>
                    <li class="sideMenu_settings"><NavLink to={'/colab_dashboard'} data-title="Settings"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/design.png" alt="design" /></NavLink></li>
                    {/* <li class="sideMenu_saved"><a href="#" data-title="Saved"><img width="24" height="24"
                        src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/FFFFFF/external-bookmark-basic-user-interface-anggara-basic-outline-anggara-putra.png"
                        alt="external-bookmark-basic-user-interface-anggara-basic-outline-anggara-putra" /></a></li> */}
                    <li class="sideMenu_settings"><a href="#" data-title="Settings"><img width="50" height="50"
                        src="https://img.icons8.com/ios/50/FFFFFF/settings--v1.png" alt="settings--v1" /></a></li>
                </ul>
                {/* <div class="sideMenu_profile"><img src="https://avatar.iran.liara.run/public/boy" alt="" /></div> */}
                <Space wrap>
                    <Popover content={content} trigger="click" >
                        <div style={{cursor:'pointer', width:'60px'}} ><img src="https://avatar.iran.liara.run/public/boy" alt="" /></div>
                    </Popover>
                </Space>
            </div>
        </>
    )
}

export default QuickSideMenu