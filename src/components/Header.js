import styled from "styled-components"
import { BsEnvelope } from 'react-icons/bs'
import chattylogo from '../assets/chattylogo.png'

const Header = () => {
    return(
        <HeaderContainer>
            <div>
                <img src={chattylogo} alt="" />
            </div>
            <ContactDiv>
                <p>Contact</p>
                <button>
                    <BsEnvelope className='icon'/>
                </button>
            </ContactDiv>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: no-wrap;
    margin: 2rem 5rem;
    div > img {
        width: 18%;
    }
`
const ContactDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    p{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 1.2rem;
        color: whitesmoke;
    }
    button {
        background-color: transparent;
        border: none;
    }
    .icon {
        font-size: 2rem;
        color: whitesmoke;
        margin: 1rem;
        cursor: pointer;
    }
`

export default Header