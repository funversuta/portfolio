import React from "react";
import "./Modal.styled";
import { ModalContainer, ModalContent, ModalExitBtn } from "./Modal.styled";

interface ModalProps {
  active: boolean;
  setActive: any;
  text: string;
  href?: string;
}

const Modal = ({ active, setActive, text, href }: ModalProps) => {
  return (
    <ModalContainer
      className={active ? "active" : ""}
      onClick={() => setActive(false)}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {text}
        <a href={href} target="_blank" rel="noreferrer" className="link">
          {href}
        </a>
      </ModalContent>
      <ModalExitBtn onClick={() => setActive(false)} />
    </ModalContainer>
  );
};

export default Modal;
