/* eslint-disable react/jsx-key */
import Button_ from '../components/button'
import { useContext } from 'react'
import { ModalContext } from '../context/modalContext'
import DonateModal from '../components/donateModal'

const DonateButton = (props ) => {

  const [modalShow, setModalShow] = useContext(ModalContext);

  return(
    <>
        <a role='button' onClick={ () => setModalShow(true)} >
          <Button_  {...props}   />
        </a>
        <DonateModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default DonateButton;