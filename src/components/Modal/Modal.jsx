import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '800',
    height: '600',
    zIndex: 1300,
    padding: 0,
  },
};

Modal.setAppElement('#root');

export const ModalStyled = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={onRequestClose}>
      <img src={image.largeImageURL} alt={image.tags} />
    </Modal>
  );
};
