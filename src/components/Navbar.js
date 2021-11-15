import styled from "styled-components"
import chatlogo from '../assets/chatlogo.png'
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {

    const activeStyle = { color: '#FD6234' };

    return(
        <>
        <NavContainer>
            <ul>
                <img src={chatlogo} alt="logo" />
                <li>
                    <Tab to='/' activeStyle={activeStyle}>Home</Tab>
                </li>
                <li>
                    <Tab to='Login' activeStyle={activeStyle}>Login</Tab>
                </li>
                <li>
                    <Tab to='Register' activeStyle={activeStyle}>Register</Tab>
                </li>
                <li>
                    <Tab to='Contact' activeStyle={activeStyle}>Contact</Tab>
                </li>
                <Line></Line>
            </ul>
        </NavContainer>
        </>
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
    a{
        text-decoration: none;
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
const Tab = styled(Link)`
    color: #463C74;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        color:  #FD6234;
        transition: all 0.5s;
    }
    `
export default Navbar