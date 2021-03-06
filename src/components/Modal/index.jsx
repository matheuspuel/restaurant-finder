import React, {useEffect} from 'react';
import Portal from "./Portal";
import {Overlay, Dialog} from "./styles";

function Modal({children, open, onClose}) {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27)
        onClose();
    }

    window.addEventListener('keydown', onEsc)
    return () => {
      window.removeEventListener('keydown', onEsc)
    };
  }, [onClose]);


  return (
    <Portal>
      {!open ? null : (
        <Overlay onClick={onClose}>
          <Dialog onClick={e => e.stopPropagation()}>
            {children}
          </Dialog>
        </Overlay>
      )}
    </Portal>)

}

export default Modal;