import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ChatBar() {
    // Add your logic here for chat-related functionalities

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Chat</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/chat">Chat</NavLink>
                    {/* Add more NavLink items for different chat-related pages */}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default ChatBar;