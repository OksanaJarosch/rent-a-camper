import { Welcome } from "../../components/Welcome/Welcome";
import { Container } from "../../reusable/Reusable.styled";
import { HomeBackground } from "./HomePage.styled";

export default function HomePage() {
    return (
        <HomeBackground>
            <Container>
                <Welcome/>
            </Container>
        </HomeBackground>
    )
}