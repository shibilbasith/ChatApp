import React, { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { useSocketContext } from '../../context/SocketContext';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';

const CodeShare = () => {
    const { socket } = useSocketContext();

    // const [socket, setSocket] = useState(null);
    const [roomId, setRoomId] = useState('');
    const [message, setMessage] = useState('');

    // useEffect(() => {
    //     // Connect to the Socket.IO server
    //     const socket = io('http://192.168.12.88:4000');
    //     setSocket(socket);

    //     // Clean up the socket connection on component unmount
    //     return () => {
    //         socket.disconnect();
    //     };
    // }, []);

    const joinRoom = () => {
        // Join the room with the specified roomId
        socket.emit('joinRoom', roomId);
    };

    const leaveRoom = () => {
        // Leave the current room
        socket.emit('leaveRoom', roomId);
    };

    const handleMessageSend = (val) => {
        // Send a message to the current room
        socket.emit('codeChange', roomId, val);
        setMessage(val);
    }

    useEffect(() => {
        if (!socket) return;

        // Listen for incoming messages from the current room
        socket.on('codeChange', (msg) => {
            console.log('frontMsg', msg);
            setMessage(msg);
        });

        // Clean up message listener on component unmount or room change
        return () => {
            socket.off('codeChange');
        };
    }, [socket, roomId]);

    return (
        <div className='codeView_container'>
            <div className="join_room_container">

                <div style={{ float: 'right' }}>
                    <input
                        type="text"
                        placeholder="Enter Room ID"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        style={{ borderRadius: '10px', height: '40px', padding: '10px', width:'300px' }}
                    />
                    <button onClick={joinRoom} style={{cursor:'pointer', color: '#fff', background: 'rgb(40 160 251)', border: 'none', padding: '10px', borderRadius: '6px', margin: '0 6px' }}>Join Room</button>
                    <button onClick={leaveRoom} style={{cursor:'pointer', color: '#fff', background: '#1677ff', border: 'none', padding: '10px', borderRadius: '6px', margin: '0 12px 0 6px' }}>
                        Leave
                    </button>
                </div>

                <div>
                    <Avatar.Group
                        maxCount={3}
                        size="large"
                        maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf'}}
                    >
                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
                        <Avatar style={{ backgroundColor: '#f56a00'}}>K</Avatar>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068',}} icon={<UserOutlined />} />
                        </Tooltip>
                        <Avatar style={{ backgroundColor: '#1677ff'}} icon={<AntDesignOutlined />}/>
                    </Avatar.Group>

                </div>
            </div>
            {/* <input
            type="text"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
      <button onClick={handleMessageSend}>Send</button> */}
            <div className="codeMirror_section">
                <CodeMirror value={message} height="86.6vh" width='91.6vw' theme={dracula} extensions={[javascript({ jsx: true })]} onChange={handleMessageSend} />
            </div>


        </div>
    );
};

export default CodeShare;
