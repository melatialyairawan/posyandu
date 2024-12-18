import React from "react";

const ChatDetail = ({ selectedChat }) => {
    const messages = [
        {
            id: 1,
            sender: "customer",
            text: "Hi, I'm facing an issue with a recent booking. Can you help?",
            time: "08:20 PM",
        },
        {
            id: 2,
            sender: "me",
            text: "Of course! I'd be happy to assist. Could you please share more details about the issue?",
            time: "08:21 PM",
        },
        {
            id: 3,
            sender: "customer",
            text: "The service staff I interacted with seemed impatient and not very accommodating.",
            time: "08:23 PM",
        },
        {
            id: 4,
            sender: "me",
            text: "I'm really sorry to hear about your experience. That's definitely not the level of service we aim to provide.",
            time: "08:25 PM",
        },
        {
            id: 5,
            sender: "me",
            text: "Could you let me know when this happened and at which location? I'll escalate this to our team for further review.",
            time: "08:26 PM",
        },
        {
            id: 6,
            sender: "customer",
            text: "It was this morning at the Surakarta branch.",
            time: "08:28 PM",
        },
        {
            id: 7,
            sender: "me",
            text: "Thank you for sharing that. I'll ensure this feedback reaches our team to improve customer service and ensure patience in future interactions.",
            time: "08:30 PM",
        },
        {
            id: 8,
            sender: "customer",
            text: "I appreciate it! Hopefully, this will be handled soon.",
            time: "08:32 PM",
        },
        {
            id: 9,
            sender: "me",
            text: "Absolutely. Thank you for bringing this to our attention, and we'll follow up with you shortly with an update.",
            time: "08:33 PM",
        },
    ];

    if (!selectedChat) {
        return (
            <div className="w-2/3 flex items-center justify-center text-gray-400 h-screen">
                <p>Select a chat to view details</p>
            </div>
        );
    }

    return (
        <div className="w-2/3 flex flex-col h-screen rounded-lg bg-gray-50">
            {/* Header */}
            <div className="p-4 border-b border-gray-300 flex items-center gap-3">
                <img
                    src={selectedChat.avatar}
                    alt={selectedChat.name}
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <h2 className="text-lg font-semibold">{selectedChat.name}</h2>
                    <p className="text-sm text-gray-500">
                        Online
                    </p>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {messages.map((msg) => (
                    <div key={msg.id} className="flex flex-col">
                        {/* Chat Bubble */}
                        <div
                            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"
                                }`}
                        >
                            {msg.sender === "customer" && (
                                <img
                                    src={selectedChat.avatar}
                                    alt="avatar"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                            )}
                            <div
                                className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === "me"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                                    }`}
                            >
                                <p className="text-sm">{msg.text}</p>
                                <span className={`block text-xs mt-1 text-right ${msg.sender === "me"
                                    ? "text-gray-200"
                                    : "text-gray-600"
                                    }`}>
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Field */}
            <div className="p-4 border-t border-gray-300">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default ChatDetail;
