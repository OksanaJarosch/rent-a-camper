import { theme } from "../../helpers/themes";
import { StyledOrangeBtn } from "../../reusable/Reusable.styled";
import { AboutContainer, CamperStyled, Extra, ExtraSvg, Extras, FlexContainer, Picture, PictureContainer, PriceContainer, ShirtText, Title, TitleContainer } from "./CampersItem.styled";
import sprite from "assets/sprite.svg";

export const CampersItem = ({camper}) => {
    const {gallery, name, location, price, description, adults, engine, details, transmission} = camper;

    const camperExtras = [
        {name: `${adults}`, label: `${adults} adults`, icon: "people"},
        {name: `${transmission.authomatic}`, label: "Automatic", icon: "automatic"},
        {name: `${engine}`, label: `${engine}`, icon: "fuel"},
        {name: `${details.airConditioner}`, label: "AC", icon: "clima"},
        {name: `${details.kitchen}`, label: "Kitchen", icon: "kitchen"},
        {name: `${details.beds}`, label: `${details.beds} beds`, icon: "bed"},
    ];

    return (
        <CamperStyled>
            <PictureContainer>
                <Picture src={gallery[0]} alt={name} />
            </PictureContainer>
            <AboutContainer>

                <TitleContainer>
                    <Title>{name}</Title>
                    <PriceContainer>
                        <Title>{price}</Title>
                        <svg width="24" height="24">
                            <use fill="transparent" stroke={`${theme.color.dark}`} href={`${sprite}#nofav`}/>
                        </svg>
                    </PriceContainer>
                </TitleContainer>

                <FlexContainer>
                    <a href="" >4.4(2 Reviews)</a>
                    <p>{location}</p>
                </FlexContainer>

                <ShirtText>{description}</ShirtText>
                <Extras>
                    {camperExtras.map(extra => {
                        const {name, label, icon} = extra;

                        return(
                            name &&
                            <Extra key={name}>
                                <ExtraSvg width="20" height="20">
                                    <use href={`${sprite}#${icon}`} alt={name} />
                                </ExtraSvg>
                                <span>{label}</span>
                            </Extra>
                        )
                    })}
                </Extras>

                <StyledOrangeBtn>Show more</StyledOrangeBtn>

            </AboutContainer>
        </CamperStyled>
    )
}