import styled from "styled-components"
import chatlogo from '../assets/chatlogo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <NavContainer>
            <ul>
                <img src={chatlogo} alt="logo" />
                    <li>
                        <Link to='/Login'>
                        </Link>
                        Login
                    </li>
                    <li>
                        <Link to='/Register'>
                        </Link>
                        Register
                    </li>
                <li>Contact</li>
                <Line></Line>
            </ul>
            
        </NavContainer>
    )
}

const NavContainer = styled.nav `
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
    ul{
        list-style: none;
    }
    li {
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