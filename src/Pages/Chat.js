import styled from "styled-components";
import ChatBox from "../components/ChatBox";
import Login from '../components/Login'
import { AuthProvider } from '../context/AuthContext'
import { Router, Routes, Route } from "react-router-dom";


const ChatRoom = () => {
    return (
        <>
        <Div >
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/chats" component={<ChatBox/>} />
                        <Route path="/" component={<Login/>}/>
                    </Routes>
                </AuthProvider>
        </Router>
        </Div>
        </>
    )
}

const Div = styled.div ` 
    width: 100%;

@media (max-width: 768px) {

    padding-top: 0rem;
}

@media (max-width: 480px) {

}
`
export default ChatRoom;