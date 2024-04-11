import { theme } from "../../helpers/themes";
import { StyledOrangeBtn } from "../../reusable/Reusable.styled";
import { AboutContainer, CamperStyled, Picture, PictureContainer, PriceContainer, Title, TitleContainer } from "./CampersItem.styled";
import sprite from "assets/sprite.svg";

export const CampersItem = ({camper}) => {
    const {gallery, name} = camper;

    return (
        <CamperStyled>
            <PictureContainer>
                <Picture src={gallery[0]} alt={name} />
            </PictureContainer>
            <AboutContainer>

                <TitleContainer>
                    <Title>A</Title>
                    <PriceContainer>
                        <Title>B</Title>
                        <svg width="24" height="24">
                            <use fill="transparent" stroke={`${theme.color.dark}`} href={`${sprite}#nofav`}/>
                        </svg>
                    </PriceContainer>
                </TitleContainer>

                <div>
                    <a href="" >4.4(2 Reviews)</a>
                    <p>A</p>
                </div>

                <p>A</p>
                <ul>
                    <li>1</li>
                </ul>

                <StyledOrangeBtn>Show more</StyledOrangeBtn>

            </AboutContainer>
        </CamperStyled>
    )
}