import sprite from "assets/sprite.svg"
import { StyledBurger, StyledLogo, StyledMenu, StyledNav, StyledNavLink } from "./Menu.styled"
import { useState } from "react"
import { theme } from "../../helpers/themes"
import { MobileMenu } from "./MobileMenu"

export const Menu = () => {

    const [isBackdrop, setIsBackdrop] = useState(false);

    const toggleBackdrop = () => {
        setIsBackdrop (!isBackdrop)
    };

    return (
        <>
        <StyledMenu>
            <StyledLogo to="/">
                <svg width="36" height="36">
                    <use href={`${sprite}#van`}/>
                </svg>
            </StyledLogo>

            <StyledNav>
                <StyledNavLink to="/catalog" activeClassName="active">Campers</StyledNavLink>
                <StyledNavLink to="/favorites" activeClassName="active">Favorites</StyledNavLink>
            </StyledNav>

            <StyledBurger type="button" onClick={toggleBackdrop}>
                <svg width="32" height="32" stroke={`${theme.color.dark}`} viewBox="0 0 32 32">
                    {isBackdrop ? (
                        <use href={`${sprite}#close-x`} />
                        ) : (
                        <use href={`${sprite}#menu-hamburger`} />
                    )}
                </svg>
            </StyledBurger>
        </StyledMenu>

        {isBackdrop && <MobileMenu onClick={toggleBackdrop}/>}
        </>
    )
}