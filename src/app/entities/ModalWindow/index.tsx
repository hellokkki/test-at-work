import { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Checkmarck } from "../SVGs/Checkmark";

type TModalWindow = {
  isOpen: boolean;
  delay?: number;
  onClose: () => void;
  info: string;
  withIcon: boolean;
};

export const ModalWindow: React.FC<TModalWindow> = ({
  isOpen,
  delay,
  onClose,
  info,
  withIcon
}) => {
  useEffect(() => {
    if (isOpen === true) {
      const timer = setTimeout(() => {
        onClose();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={true}>
      <ModalOverlay />
      <ModalContent height="250px" className="outer">
        <ModalCloseButton />
        <ModalBody className="inner">
          {withIcon && (
          <Checkmarck />
          )}
          {info}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
