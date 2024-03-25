import sprite from "assets/sprite.svg"
import { StyledBurger, StyledLogo, StyledMenu, StyledNav, StyledNavLink } from "./Menu.styled"
import { useState } from "react"
import { theme } from "../../helpers/themes"

export const Menu = () => {

    const [isBackdrop, setIsBackdrop] = useState(false);

    return (
        <StyledMenu>
            <StyledLogo to="/">
                <svg width="32" height="32">
                    <use href={`${sprite}#van`}/>
                </svg>
            </StyledLogo>

            <StyledNav>
                <StyledNavLink to="/catalog" activeClassName="active">Campers</StyledNavLink>
                <StyledNavLink to="/favorites">Favorites</StyledNavLink>
            </StyledNav>

            <StyledBurger>
                <svg width="32" height="32" stroke={`${theme.color.dark}`} viewBox="0 0 32 32">
                    {isBackdrop ? (
                        <use href={`${sprite}#close-x`} />
                        ) : (
                        <use href={`${sprite}#menu-hamburger`} />
                    )}
                </svg>
            </StyledBurger>
            
        </StyledMenu>
    )
}