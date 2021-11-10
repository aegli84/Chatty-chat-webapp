import styled from "styled-components"
import Patterns from '../assets/Patterns.png'

const LandingPage = () => {
    return(
        <ContainerLanding>
            <img src={Patterns} alt="" />
            
            <IntroLanding>
                <h1>We have to talk... </h1>
                <p>Connect anytime, anywhere</p>
                <p class='text'>Make meaningful connections and don’t leave anything to interpretation</p>
            </IntroLanding>
            <ButtonsLanding>
                <ButtonOne>Get In</ButtonOne>
                <ButtonTwo>Join Us</ButtonTwo>
            </ButtonsLanding>
        </ContainerLanding>
    )
}

const ContainerLanding = styled.div `

    img {
        position: fixed;
        top: 0;
        left: 10;
        right: 0;
        display: flex;
        width: 55%;
        z-index: -5;
        filter: drop-shadow(0 0 0.1rem #463C74);
    }
`

const IntroLanding = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 8rem;
    margin-top: -10rem;
    h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        font-size: 5rem;
        color: #463C74;
        margin-left: 7rem;
        margin-bottom: 2.5rem;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1.8rem;
        color: #463C74;
        margin-left: 7rem;
    }
    .text {
        margin: 1rem 25rem 1rem 7rem;
    }
`

const ButtonsLanding = styled.div`
    display: inline-block;
    margin-top: 2rem;
`

const ButtonOne = styled.button`
    margin-left: 15rem;
    background-color: #B4D51E;
    border: none;
    border-radius: .3em;
    cursor: pointer;
    padding: 1em; 
    width: 10em;
    font-size: 1.2em;
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
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
`
export default LandingPage