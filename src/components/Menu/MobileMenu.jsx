import { StyledBtn } from "../../reusable/Reusable.styled";
import { BackdropMenu, MobBtn, StyledNavLink } from "./Menu.styled";

export const MobileMenu = ({onClick}) => {
    return (
        <BackdropMenu>
            <MobBtn type="button">
                <StyledNavLink to="/" activeClassName="active" onClick={onClick}>Home</StyledNavLink>
            </MobBtn>
            <MobBtn type="button">
                <StyledNavLink to="/catalog" activeClassName="active" onClick={onClick}>Campers</StyledNavLink>
            </MobBtn>
            <MobBtn type="button">
                <StyledNavLink to="/favorites" activeClassName="active" onClick={onClick}>Favorites</StyledNavLink>
            </MobBtn>
        </BackdropMenu>
    )
};