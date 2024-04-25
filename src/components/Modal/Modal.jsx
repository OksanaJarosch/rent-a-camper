import Modal from 'react-modal';
import sprite from "assets/sprite.svg";
import { theme } from '../../helpers/themes';
import { CloseBtn } from './Modal.styled';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '90vh',
        width: '90vh',
        borderRadius: '20px',
        padding: '40px',
    },
    overlay: {
        backgroundColor: 'rgba(17, 18, 19, 0.40)',
    },
};

Modal.setAppElement('#root');

export const CamperModal = ({onOpen, onClose, camper}) => {
    return (
        <Modal
            isOpen={onOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="details window"
            >

            <CloseBtn onClick={onClose}>
                <svg width="16" height="16" stroke={`${theme.color.dark}`} viewBox="0 0 32 32">
                    <use href={`${sprite}#close-x`} />
                </svg>
            </CloseBtn>
            
            <div>I am a modal</div>
            
        </Modal>
    )
};