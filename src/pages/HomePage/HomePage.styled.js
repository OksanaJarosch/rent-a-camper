import styled from "styled-components";
import image from "assets/camper_optimized.webp";
import retinaimage from "assets/camper_optimized_retina.webp";

export const HomeBackground = styled.div`
    height: 100vh;
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-image: url(${retinaimage});
        }
`