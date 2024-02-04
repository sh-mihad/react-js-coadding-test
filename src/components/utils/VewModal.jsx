import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAxiosGet from "../customHooks/useAxios";
import ModalC from "./ModalC";
export default function VewModal({ show, setShow, modalNo, setModalNo }) {
  const [checked, setChecked] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const [rowDto, getRowDto, loadRowDto, setRowDto] = useAxiosGet();
  const handleClose = () => {
    setShow(false);
    setModalNo(0);
  };

  useEffect(() => {
    if (modalNo === 1) {
      getRowDto(`https://contact.mediusware.com/api/contacts/`, (data) =>
        setRowDto(data?.results)
      );
    } else {
      getRowDto(
        `https://contact.mediusware.com/api/country-contacts/bangladesh/`,
        (data) => setRowDto(data?.results)
      );
    }
  }, [modalNo]);
  console.log("os",showModalC);

  let displayingData = [];
  if (!checked) {
    displayingData = rowDto?.map((item, id) => (
      <tr key={item?.id}  className="cursor-pointer" onClick={() => setShowModalC(true)}>
        <td>{item?.id}</td>
        <td>{item?.country?.name}</td>
        <td>{item?.phone}</td>
      </tr>
    ));
  } else {
    displayingData = rowDto
      ?.filter((item) => item.id % 2 === 0)
      ?.map((item) => (
        <tr key={item?.id} className="cursor-pointer" onClick={() => setShowModalC(true)}>
          <td>{item?.id}</td>
          <td>{item?.country?.name}</td>
          <td>{item?.phone}</td>
        </tr>
      ));
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalNo === 1 ? "All Contacts" : "US Contacts"}
          </Modal.Title>
        </Modal.Header>
        {loadRowDto ? (
          <div>Loading....</div>
        ) : (
          <Modal.Body>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Country</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>{displayingData}</tbody>
            </table>
          </Modal.Body>
        )}
        <Modal.Footer style={{display:"flex",justifyContent:"space-between"}}>
        <div>
              <input
                id="evenCheck"
                type="checkbox"
                value={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <label htmlFor="evenCheck">Even</label>
            </div>
            <div>
              <Button
                style={{backgroundColor:"white",color: "#46139f" }}
                onClick={() => setModalNo(1)}
              >
                All Contacts
              </Button>
              <Button
              
                style={{backgroundColor:"white",color: "#ff7f50" }}
                onClick={() => setModalNo(2)}
              >
                US Contacts
              </Button>
              <Button
                style={{ backgroundColor: "#46139f", color: "white",border:"1px solid #46139f" }}
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
        </Modal.Footer>
      </Modal>
      {
        showModalC && <ModalC showModalC={showModalC} setShowModalC={setShowModalC}/>
      }
    </>
  );
}
