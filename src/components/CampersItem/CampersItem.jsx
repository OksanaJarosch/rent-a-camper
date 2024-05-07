import { useEffect, useState } from "react";
import { theme } from "../../helpers/themes";
import { StyledOrangeBtn, Title } from "../../reusable/Reusable.styled";
import { AboutContainer, CamperStyled, Extra, ExtraSvg, Extras, FavBtn, FlexContainer, Location, Picture, PictureContainer, PriceContainer, ReviewsLink, ShirtText, TitleContainer } from "./CampersItem.styled";
import sprite from "assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/favorites/favoritesSlice";
import { selectFavorites } from "../../redux/selectors";
import { CamperModal } from "../Modal/Modal";


export const CampersItem = ({camper}) => {
    const {gallery, name, location, price, description, adults, engine, details, transmission, rating, reviews} = camper;

    const [isFavorite, setIsFavorite] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const fav = useSelector(selectFavorites);

    useEffect (() => {
        setIsFavorite(fav.some(camp => camp._id === camper._id))
    }, [camper._id, fav]);

    const camperExtras = [
        {name: "adults", label: `${adults} adults`, icon: "people", reverseStyle: true},
        {name: "transmission", label:`${transmission}`, icon: "automatic", reverseStyle: false},
        {name: "engine", label: `${engine}`, icon: "fuel", reverseStyle: true},
        {name: "airConditioner", label: "AC", icon: "clima", reverseStyle: true},
        {name: "kitchen", label: "Kitchen", icon: "kitchen", reverseStyle: false},
        {name: "beds", label: `${details.beds} beds`, icon: "bed", reverseStyle: false},
        {name: "TV", label: "TV", icon: "tv", reverseStyle: false},
        {name: "shower", label: "Shower", icon: "shower", reverseStyle: false},
    ];

    const handleFavorite = (camper) => {
        if (isFavorite) {
            dispatch(deleteFavorite(camper._id));
        } else {
            dispatch(addFavorite(camper));
        };

        setIsFavorite(!isFavorite);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <CamperStyled>
            <PictureContainer>
                <Picture src={gallery[0]} alt={name} />
            </PictureContainer>

            <AboutContainer>
                <TitleContainer>
                    <Title>{name}</Title>
                    <PriceContainer>
                        <Title>€{price.toFixed(2)}</Title>
                        <FavBtn onClick={() => handleFavorite(camper)}>
                            <svg width="24" height="24">
                                {isFavorite ? (
                                    <use fill="transparent" stroke={`${theme.color.dark}`} href={`${sprite}#fav`}/>
                                ) : (
                                    <use fill="transparent" stroke={`${theme.color.dark}`} href={`${sprite}#nofav`}/>
                                )}
                            </svg>
                        </FavBtn>
                    </PriceContainer>
                </TitleContainer>

                <FlexContainer>
                    <ReviewsLink href="" >
                        <svg width="16" height="16">
                            <use href={`${sprite}#star`}/>
                        </svg>
                        {rating}({reviews.length} Reviews)
                    </ReviewsLink>
                    <Location>
                        <svg width="16" height="16" fill="transparent" stroke={`${theme.color.dark}`}>
                            <use href={`${sprite}#map-pin`}/>
                        </svg>
                        {location}
                    </Location>
                </FlexContainer>

                <ShirtText>{description}</ShirtText>
                <Extras>
                    {camperExtras.map(extra => {
                        const {name, label, icon, reverseStyle} = extra;

                        return(
                            ((+(camper.details[name]) >= 1) || (camper[name])) &&
                            <Extra key={name}>
                                <ExtraSvg reverseStyle={reverseStyle}>
                                    <use href={`${sprite}#${icon}`} alt={name} />
                                </ExtraSvg>
                                <span>{label}</span>
                            </Extra>
                        )
                    })}
                </Extras>

                <StyledOrangeBtn onClick={handleModalOpen}>Show more</StyledOrangeBtn>

                {isModalOpen && <CamperModal onOpen={handleModalOpen} onClose={handleModalClose} camper={camper} isOpen={isModalOpen}/>}
            </AboutContainer>
        </CamperStyled>
    )
}