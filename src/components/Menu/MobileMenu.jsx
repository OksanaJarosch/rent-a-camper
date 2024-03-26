import { StyledBtn } from "../../reusable/Reusable.styled";
import { BackdropMenu, StyledNavLink } from "./Menu.styled";

export const MobileMenu = ({onClick}) => {
    return (
        <BackdropMenu>
            <StyledBtn type="button">
                <StyledNavLink to="/" activeClassName="active" onClick={onClick}>Home</StyledNavLink>
            </StyledBtn>
            <StyledBtn type="button">
                <StyledNavLink to="/catalog" activeClassName="active" onClick={onClick}>Campers</StyledNavLink>
            </StyledBtn>
            <StyledBtn type="button">
                <StyledNavLink to="/favorites" activeClassName="active" onClick={onClick}>Favorites</StyledNavLink>
            </StyledBtn>
        </BackdropMenu>
    )
};