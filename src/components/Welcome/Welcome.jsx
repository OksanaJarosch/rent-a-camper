import { StyledOrangeBtn } from "../../reusable/Reusable.styled";
import { SecondaryTitle, StyledLink, Text, Title, WelcomeText, WelcomeTitle } from "./Welcome.styled";


export const Welcome = () => {
    return(
        <WelcomeText>
            <WelcomeTitle>Welcome to </WelcomeTitle>
            <Title>Campers</Title>
            <SecondaryTitle>your premier gateway to the perfect camper for your next adventure!</SecondaryTitle>
            <Text> Dreaming of a nature escape, a road trip through breathtaking landscapes, or a cozy weekend by the lake? At Campers, you'll find a diverse selection of campers that cater to every adventure. It’s time to hit the road – your camper is waiting!</Text>
            <StyledOrangeBtn>
                <StyledLink to="/catalog">Find your camper</StyledLink>
            </StyledOrangeBtn>
        </WelcomeText>
    )

}