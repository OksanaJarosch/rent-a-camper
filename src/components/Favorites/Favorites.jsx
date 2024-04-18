import { useSelector } from "react-redux";
import { Container } from "../../reusable/Reusable.styled";
import { CampersSection } from "../Campers/Campers.styled";
import { CampersItem } from "../CampersItem/CampersItem";
import { selectFavorites } from "../../redux/selectors";

export const Favorites = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <Container>
            <CampersSection>
                <ul>
                    {favorites.map(camper => {
                        return <CampersItem key={camper._id} camper={camper}/>
                    })}
                </ul>
            </CampersSection>
        </Container>
    )

};