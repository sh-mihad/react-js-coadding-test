import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function ModalC({ showModalC, setShowModalC }) {
  const handleClose = () => {
    setShowModalC(false);
  };

  return (
    <>
      <Modal show={showModalC} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal -C</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello World</Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#46139f", color: "white" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
