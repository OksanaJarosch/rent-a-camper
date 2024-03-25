import { StyledBtn } from "../../reusable/Reusable.styled";
import { BackdropMenu, StyledNavLink } from "./Menu.styled";

export const MobileMenu = () => {
    return (
        <BackdropMenu>
            <StyledBtn>
                <StyledNavLink to="/" activeClassName="active">Home</StyledNavLink>
            </StyledBtn>
            <StyledBtn>
                <StyledNavLink to="/catalog" activeClassName="active">Campers</StyledNavLink>
            </StyledBtn>
            <StyledBtn>
                <StyledNavLink to="/favorites" activeClassName="active">Favorites</StyledNavLink>
            </StyledBtn>
        </BackdropMenu>
    )
};