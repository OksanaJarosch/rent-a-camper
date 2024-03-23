import { Link, NavLink } from "react-router-dom"
import sprite from "assets/sprite.svg"
import { StyledMenu, StyledNav } from "./Menu.styled"

export const Menu = () => {
    return (
        <StyledMenu>
            <Link to="/">
                <svg width="32" height="32">
                    <use href={`${sprite}#van`}/>
                </svg>
            </Link>
            <StyledNav>
                <button><NavLink to="/catalog">Campers</NavLink></button>
                <button><NavLink to="/favorites">Favorites</NavLink></button>
            </StyledNav>
        </StyledMenu>
    )
}