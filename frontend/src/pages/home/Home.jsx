import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import QuickSideMenu from '../../components/common/QuickSideMenu'

const Home = () => {
    return <>
        <div class="main-body">
            <QuickSideMenu />
            <Sidebar />
            <MessageContainer />
        </div>
    </>
}

export default Home