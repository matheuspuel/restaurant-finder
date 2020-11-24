import ReactDOM from 'react-dom';

function Portal({children}) {
  const portal = document.getElementById('modal-root')
  return ReactDOM.createPortal(children, portal)
}

export default Portal;