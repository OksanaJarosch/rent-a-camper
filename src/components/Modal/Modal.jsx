import Modal from 'react-modal';
import sprite from "assets/sprite.svg";
import { theme } from '../../helpers/themes';
import { ButtonsContainer, CamperPhotos, CloseBtn, Description, DetailsContainer, FlexContainer, InfoBtn, LittleTitle, PhotoPlace, Price, ReviewsContainer, ScrollContainer, TitleFlexContainer } from './Modal.styled';
import { Title } from '../../reusable/Reusable.styled';
import { Location, Picture, ReviewsLink } from '../CampersItem/CampersItem.styled';
import { useState } from 'react';
import { Feautures } from '../Feautures/Feautures';
import { BookingForm } from '../BookingForm/BookingForm';
import { ReviewsList } from '../Reviews/ReviewsList';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: 'calc(100vh - 80px)',
        width: '90vw',
        maxWidth: '982px',
        borderRadius: '20px',
        padding: '40px 16px 40px 40px',
        overflow: 'hidden' 
    },
    overlay: {
        backgroundColor: 'rgba(17, 18, 19, 0.40)',
    },
};

Modal.setAppElement('#root');

export const CamperModal = ({onOpen, onClose, camper, isOpen}) => {
    const {gallery, name, location, price, description, rating, reviews} = camper;

    const [isFeautures, setIsFeautures] = useState(true);

    const handleFeautures = () => {
        setIsFeautures(true);
    };

    const handleReviews = () => {
        setIsFeautures(false);
    };

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

                <Price>€{price.toFixed(2)}</Price>

                <ScrollContainer>
                    <CamperPhotos>
                        {gallery.map(pic => {
                            return (<PhotoPlace key={name}>
                                        <Picture src={pic} alt={name}/>
                                    </PhotoPlace>)
                        })}
                    </CamperPhotos>

                    <Description>{description}</Description>

                    <ButtonsContainer>
                        <InfoBtn onClick={handleFeautures} isActive={isFeautures}>
                            <LittleTitle>
                                Feautures
                            </LittleTitle>
                        </InfoBtn>
                        <InfoBtn onClick={handleReviews} isActive={!isFeautures}>
                            <LittleTitle>
                                Reviews
                            </LittleTitle>
                        </InfoBtn>
                    </ButtonsContainer>


                    <FlexContainer>
                        <DetailsContainer>
                            {isFeautures ? <Feautures camper={camper}/> : <ReviewsList reviews={reviews}/>}
                        </DetailsContainer>
                        <BookingForm/>
                    </FlexContainer>
                </ScrollContainer>

        </Modal>
    )
};