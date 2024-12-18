'use client';

import React, { useState } from 'react';
import ChatList from '@/components/Helpdesk/ChatList';
import ChatDetail from '@/components/Helpdesk/ChatDetail';

const Helpdesk = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <>
            <h2 className='font-semibold text-xl mb-5'>Helpdesk</h2>
            <div className='flex h-screen bg-gray-50 rounded-lg'>
                <ChatList onSelectChat={(chat) => { setSelectedChat(chat) }} />
                <ChatDetail selectedChat={selectedChat} />
            </div>
        </>
    )
}

export default Helpdesk
