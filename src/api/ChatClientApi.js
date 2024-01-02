const BASE_URL = 'http://localhost:5532/classroom'; // Replace with your backend URL

const ChatClientApi = {
    // Fetch chat history for a given sender and receiver
    getChatHistory: async (senderId, receiverId) => {
        try {
            const response = await fetch(`${BASE_URL}/chat/history?senderId=${senderId}&receiverId=${receiverId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch chat history');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching chat history:', error);
            return [];
        }
    },

    // Fetch a message by its ID
    getMessageById: async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/chat/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch message by ID');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching message by ID:', error);
            return null;
        }
    },

    // Fetch all messages
    getAllMessages: async () => {
        try {
            const response = await fetch(`${BASE_URL}/chat/all`);
            if (!response.ok) {
                throw new Error('Failed to fetch all messages');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching all messages:', error);
            return [];
        }
    },

    // Send a new message
    sendMessage: async (message) => {
        try {
            const response = await fetch(`${BASE_URL}/chat/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });
            if (!response.ok) {
                throw new Error('Failed to send message');
            }
            return await response.json();
        } catch (error) {
            console.error('Error sending message:', error);
            return null;
        }
    },

    // Update an existing message by its ID
    updateMessage: async (id, message) => {
        try {
            const response = await fetch(`${BASE_URL}/chat/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });
            if (!response.ok) {
                throw new Error('Failed to update message');
            }
            return await response.json();
        } catch (error) {
            console.error('Error updating message:', error);
            return null;
        }
    },

    // Delete a message by its ID
    deleteMessage: async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/chat/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete message');
            }
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    },
};

export default ChatClientApi;