import React from 'react';

const ChatCard = ({ message, onUpdate, onDelete }) => {
    const handleUpdate = () => {
        // Assuming you have a form or modal to update the message content,
        // construct the updated message object and call the onUpdate function
        const updatedMessage = {
            id: message.id,
            senderId: message.senderId,
            message: 'Updated message content', // Update this with the new message content
            // Include other properties as needed for your backend
        };
        onUpdate(message.id, updatedMessage);
    };

    const handleDelete = () => {
        // Call the onDelete function with the message ID for deletion
        onDelete(message.id);
    };

    return (
        <div className="chat-card">
            <p>Sender: {message.senderId}</p>
            <p>Message: {message.message}</p>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ChatCard;