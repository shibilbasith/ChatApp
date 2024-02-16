import React from 'react'
// import Sidebar from '../../components/sidebar/Sidebar'
// import MessageContainer from '../../components/messages/MessageContainer'
import QuickSideMenu from '../../components/common/QuickSideMenu'
import { Outlet, Route, Routes } from 'react-router-dom'
import ChatDashboard from './ChatDashboard'
import CollabDraw from './CollabDraw'

const Home = () => {
    return <>
        <div class="main-body">
            <QuickSideMenu />
            {/* <ChatDashboard /> */}
            {/* <div className="center_Content_section"> */}
                <Outlet />
              {/* </div> */}
            
       
        </div>
    </>
}

export default Home