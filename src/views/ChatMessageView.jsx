import React, { useState, useEffect } from 'react';
import ChatClientApi from '../api/ChatClientApi';
import ChatCard from '../components/ChatCard';
import ChatBar from '../containers/ChatBar';

const ChatMessageView = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await ChatClientApi.getChatHistory('senderId', 'receiverId'); // Replace with actual IDs
            setMessages(data);
        }
        fetchData();
    }, []);

    const handleSendMessage = async (message) => {
        const newMessage = await ChatClientApi.sendMessage(message);
        setMessages([...messages, newMessage]);
    };

    const handleUpdateMessage = async (id, updatedMessage) => {
        await ChatClientApi.updateMessage(id, updatedMessage);
        const updatedMessages = messages.map((msg) =>
            msg.id === id ? { ...msg, ...updatedMessage } : msg
        );
        setMessages(updatedMessages);
    };

    const handleDeleteMessage = async (id) => {
        await ChatClientApi.deleteMessage(id);
        const filteredMessages = messages.filter((msg) => msg.id !== id);
        setMessages(filteredMessages);
    };

    return (
        <div className="chat-message-view">
            <div className="chat-messages">
                {messages.map((message) => (
                    <ChatCard
                        key={message.id}
                        message={message}
                        onUpdate={handleUpdateMessage}
                        onDelete={handleDeleteMessage}
                    />
                ))}
            </div>
            <ChatBar onSend={handleSendMessage} />
        </div>
    );
};

export default ChatMessageView;
