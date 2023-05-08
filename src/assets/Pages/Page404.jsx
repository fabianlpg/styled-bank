import image from "../images/doguito404.svg"
import image2 from "../images/doguito2404.svg"
import '../css/404.css'
import styled from "styled-components"

const Main404 = styled.main`
    padding-top: 10vh;
    padding-right: 1rem;
    padding-left: 1rem;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`

const Page404 = ({ theme }) => {
    return (
        <Main404 >
            {
                theme ? <img className="dog-image" src={image} alt="Doguito" /> : <img className="dog-image" src={image2} alt="Doguito" />
            }
            <p className="notfound-text">Esta página no existe</p>
        </Main404>
    )
}

export default Page404;
