import React from "react";

const chats = [
    {
        id: 1,
        name: "Martin Randolph",
        message: "Yes, 2pm is awesome",
        date: "11/19/19",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        status: "read",
    },
    {
        id: 2,
        name: "Andrew Parker",
        message: "What kind of strategy is better?",
        date: "11/16/19",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        status: "unread",
    },
    {
        id: 3,
        name: "Karen Castillo",
        message: "Voice Message 0:14",
        date: "11/15/19",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        status: "voice",
    },
];

const ChatList = ({ onSelectChat }) => {
    return (
        <div className="w-1/3 border-r rounded-lg border-gray-300 h-screen overflow-auto">
            <ul>
                {chats.map((chat) => (
                    <li
                        key={chat.id}
                        className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                        onClick={() => onSelectChat(chat)}
                    >
                        <img
                            src={chat.avatar}
                            alt={chat.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="font-semibold">{chat.name}</h3>
                            <p className="text-sm text-gray-500 truncate">{chat.message}</p>
                        </div>
                        <span className="ml-auto text-xs text-gray-400">{chat.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList;
