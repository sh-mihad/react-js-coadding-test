import { useState } from "react";
import VewModal from "./utils/VewModal";

const Problem2 = () => {
  const [show, setShow] = useState(false);
  const [modalNo, setModalNo] = useState(0);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              onClick={() => {
                setShow(true);
                setModalNo(1);
              }}
              type="button"
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              onClick={() => {
                setShow(true);
                setModalNo(2);
              }}
              type="button"
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      {show && (
        <VewModal
          modalNo={modalNo}
          setModalNo={setModalNo}
          show={show}
          setShow={setShow}
        />
      )}
    </>
  );
};

export default Problem2;
