import { useSelector } from "react-redux";
import { Container } from "../../reusable/Reusable.styled";
import { CampersSection } from "../Campers/Campers.styled";
import { CampersItem } from "../CampersItem/CampersItem";
import { selectFavorites } from "../../redux/selectors";
import { Placeholder } from "../../reusable/Reusable.styled";

export const Favorites = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <Container>
            <CampersSection>
            {favorites.length ? (
                <ul>
                    {favorites.map(camper => {
                        return <CampersItem key={camper._id} camper={camper}/>
                    })}
                </ul>
            ) : (
                <Placeholder>
                    <p>You do not have any favourites yet.</p>
                </Placeholder>
            )}
            </CampersSection>
        </Container>
    )

};