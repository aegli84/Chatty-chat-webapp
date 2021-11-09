import styled from "styled-components"
import chatlogo from '../assets/chatlogo.png'

const Header = () => {
    return(
        <HeaderContainer>
            <div>
                <img src={chatlogo} alt="logo" />
                <h3>Login</h3>
                <h3>Register</h3>
                <h3>Contact</h3>
                <Line></Line>
            </div>
            
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div `
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: no-wrap;
    margin: 1rem 5rem;
        img {
        margin-top: 1rem;
        width: 4rem;
    }
    h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #463C74;
        line-height: 1rem;
        margin-left: .5rem;
        margin-top: 2rem;
    }
`
const Line = styled.div`
    height: 10rem;
    width: .2rem;
    background-color: #FD6234;
    margin-top: 2rem;
    margin-left: 2.5rem;
    border-radius: 3rem;
`

export default Header