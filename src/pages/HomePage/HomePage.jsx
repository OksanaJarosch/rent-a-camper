import { Welcome } from "../../components/Welcome/Welcome";
import { WelcomeContainer } from "../../components/Welcome/Welcome.styled";
import { HomeBackground } from "./HomePage.styled";

export default function HomePage() {
    return (
        <HomeBackground>
            <WelcomeContainer>
                <Welcome/>
            </WelcomeContainer>
        </HomeBackground>
    )
}