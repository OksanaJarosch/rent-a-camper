import Modal from 'react-modal';
import sprite from "assets/sprite.svg";
import { theme } from '../../helpers/themes';
import { CamperPhotos, CloseBtn, Description, PhotoPlace, ReviewsContainer, TitleFlexContainer } from './Modal.styled';
import { Title } from '../../reusable/Reusable.styled';
import { Location, Picture, ReviewsLink } from '../CampersItem/CampersItem.styled';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '90vh',
        width: '80vw',
        maxWidth: '982px',
        borderRadius: '20px',
        padding: '40px',
    },
    overlay: {
        backgroundColor: 'rgba(17, 18, 19, 0.40)',
    },
};

Modal.setAppElement('#root');

export const CamperModal = ({onOpen, onClose, camper, isOpen}) => {
    const {gallery, name, location, price, description, adults, engine, details, transmission, rating, reviews} = camper;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="details window"
            >

            <TitleFlexContainer>
                <Title>{name}</Title>
                <CloseBtn onClick={onClose}>
                    <svg width="16" height="16" stroke={`${theme.color.dark}`} viewBox="0 0 32 32">
                        <use href={`${sprite}#close-x`} />
                    </svg>
                </CloseBtn>
            </TitleFlexContainer>

            <ReviewsContainer>
                    <ReviewsLink href="" >
                        <svg width="16" height="16">
                            <use href={`${sprite}#star`}/>
                        </svg>
                        {rating}({reviews.length} Reviews)
                    </ReviewsLink>
                    <Location>
                        <svg width="16" height="16" fill="transparent" stroke={`${theme.color.dark}`}>
                            <use href={`${sprite}#map-pin`}/>
                        </svg>
                        {location}
                    </Location>
                </ReviewsContainer>

                <Title>€{price.toFixed(2)}</Title>

                <CamperPhotos>
                    {gallery.map(pic => {
                        return (<PhotoPlace key={name}>
                                    <Picture src={pic} alt={name}/>
                                </PhotoPlace>)
                    })}
                </CamperPhotos>

                <Description>{description}</Description>
            
        </Modal>
    )
};