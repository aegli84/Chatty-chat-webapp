import styled from "styled-components"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import Waim from '../assets/Waim.svg'
// import 'firebase/app'
// import { auth } from './components/firebase'
// import firebase from 'firebase/app'
import '../ChatStyles.css'



const Login = () => {
    return (
        <ContainerLogin>
        <img src={Waim} alt="" />
        <div id='login-page' >
            
            <div id='login-card'>
                <h2 className='text-chat'>Login to Chat!</h2>
            
                <div 
                    className='login-button google'
                    // onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <FaGoogle/> Sign in with Google
                </div>
                <br /> <br />
                <div 
                    className='login-button facebook'
                    // onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FaFacebook/> Sign in with Facebook
                </div>
            </div>
        </div>
    </ContainerLogin>
    )
}

const ContainerLogin = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        position: absolute;
        top: -5rem;
        width: 100%;
        
        z-index: -1;
        filter: drop-shadow(-.5rem -.5rem .1rem #FD6234);
        filter: drop-shadow(-.5rem -.2rem .1rem orange );
    }
`
export default Login;