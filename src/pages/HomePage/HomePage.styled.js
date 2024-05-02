import styled from "styled-components";
import image from "assets/camper_optimized.webp";


export const HomeBackground = styled.div`
min-height: 100vh;
background-image: url(${image});
    background-size: 45%;
    background-position: 130% calc(100% + 200px);
    background-repeat: no-repeat;
`;