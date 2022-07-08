import React, { useContext, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { PopupContext } from "./Context/PopUpContext";
import { Card } from "@mui/material";
import "./userDetail.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
export default function UserDeatil() {
  const { Detail } = useContext(PopupContext);
  console.log(Detail,"Detail");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    console.log("in");
    if (Detail) {
      console.log("imin");
      handleOpen();
    }
  }, [Detail]);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <div
            onClick={handleClose}
            style={{ textAlign: "end", cursor: "pointer" }}
          >
            X
          </div>
          {Detail && (
            <div>
              <div className="top">
                <img src={Detail.image} alt="" />
                <div>
                  <div>
                    <h3>{Detail.name}</h3>
                  </div>
                  <div style={{ fontWeight: 500 }} className="status">
                    <div
                      className={`${
                        Detail.status === "Alive" ? "green" : "gray"
                      }`}
                    ></div>
                    {Detail.status}-{Detail.species}
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="bottom">
                <div className="up">
                  <div className="left">
                    <div className="head">Gender</div>
                    <div>{Detail.gender}</div>
                  </div>
                  <div className="right">
                    <div className="head">Location</div>
                    <div>{Detail.location.name}</div>
                  </div>
                </div>
                <div className="down">
                  <div className="left">
                    <div className="head">Species</div>
                    <div>{Detail.species}</div>
                  </div>
                  <div className="right">
                    <div className="head">Origin</div>
                    <div>{Detail.origin.name}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </Modal>
    </div>
  );
}
