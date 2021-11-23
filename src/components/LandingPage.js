import styled from "styled-components"
import Waimakariri from '../assets/Waimakariri.svg'
import {Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <ContainerLanding>
            <img src={Waimakariri} alt="" />
            
            <IntroLanding>
                <h1>We have to talk... </h1>
                <p>Connect anytime, anywhere</p>
                <p class='text'>Make meaningful connections and don’t leave anything to interpretation</p>
            </IntroLanding>
            
            <ButtonsLanding>
                <Link to='/Login'>
                    <ButtonOne>Get In</ButtonOne>
                </Link>
                <Link to='/Register'>
                    <ButtonTwo>Join Us</ButtonTwo>
                </Link>
            </ButtonsLanding>
        </ContainerLanding>
    )
}

const ContainerLanding = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    img {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
        height: 100vh;
        
        /* filter: drop-shadow(0 0 0.1rem #463C74); */
    }
`

const IntroLanding = styled.main`
    position:absolute;
    top: 35%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 55%;
    
    h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        font-size: 4.5rem;
        color: #463C74;
        margin-left: 8rem;
        margin-bottom: 3rem;
    @media (min-width: 1200px){
        margin-bottom: 4rem;
    }
    @media (max-width: 768px){
        
        }
        
    @media (max-width: 480px){
        
        }
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.8rem;
        color: #463C74;
        margin-left: -5.5rem;
        @media (min-width: 1200px){
            margin-left: -4.7rem;
            font-size: 1.9rem;
    }
    }
    .text {
        margin: 1rem 2rem 1rem 12rem;
        @media (min-width: 1200px){
            margin: 1rem 4rem 1rem 15rem;
            font-size: 1.9rem;
    }
    }
`

const ButtonsLanding = styled.div`
    display: inline-block;
    position: absolute;
    top: 75%;
    margin: 1rem 1rem 0 7rem;
`

const ButtonOne = styled.button`
    margin-left: 1rem;
    background-color: #5fad56;
    border: none;
    border-radius: .3em;
    cursor: pointer;
    padding: 1em; 
    width: 10em;
    font-size: 1.2em;
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
    color: #463C74;
`
const ButtonTwo = styled.button`
    margin-left: 3rem;
    background-color: #FFC735;
    border: none;
    border-radius: .3em;
    cursor: pointer;
    padding: 1em; 
    width: 10em;
    font-size: 1.2em;
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
    color: #463C74;
`
export default LandingPage;