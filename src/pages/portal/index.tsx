import { useState } from "react";
import ReactDOM from "react-dom";

const modalStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "200px",
  height: "100px",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  padding: "20px",
  borderRadius: "5px",
  color: "#000",
};
interface ModalProps {
  onCloseModal: () => void;
}

const Modal = (props: ModalProps) => {
  console.log(props, "什么内容");
  const { onCloseModal } = props;
  return ReactDOM.createPortal(
    <div className="modal" style={modalStyle}>
      <div className="modal-content">这是里面的内容</div>
      <button onClick={onCloseModal}>关闭modal</button>
    </div>,
    document.body
  );
};

const Portal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {open && <Modal onCloseModal={closeModal} />}
      <div>portal</div>
      <button onClick={openModal}>点击打开modal</button>
    </>
  );
};

export default Portal;
