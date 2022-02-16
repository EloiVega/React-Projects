import { Fragment } from "react/cjs/react.production.min";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalDestination = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalDestination
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDestination
      )}
    </Fragment>
  );
};

export default Modal;
