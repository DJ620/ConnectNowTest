import React from "react";

function Contact() {
  const styles = {
    input: {
      width: "100%",
      backgroundColor: "#182c47",
      border: "none",
    },
  };
  return (
    <div
      style={{
        width: "37%",
        minWidth: "300px",
        margin: "0 auto",
      }}
    >
      <h4 className="montserrat">GET IN TOUCH</h4>
      <p style={{ fontSize: "13px" }} className="mb-5">
        Trysail transom furl Sea legs scallywag Jack Ketch chandler mizzenmost
        reef sails skysail. Shiver me timbers loot bucko belaying pin Sea Legs
        boom gunwalls booty jury mast fore.
      </p>
      <div className="p-3" style={{ backgroundColor: "#0e1a2b" }}>
        <h6>Contact Form</h6>
        <div className="row mt-4">
          <div className="col-12 col-lg-6">
            <p style={{ fontSize: "13px", marginBottom: "5px" }}>Name*</p>
            <input
              type="text"
              className="mb-4"
              style={styles.input}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p style={{ fontSize: "13px", marginBottom: "5px" }}>
              Email Address*
            </p>
            <input type="text" className="mb-4" style={styles.input} />
          </div>
        </div>
        <p style={{ fontSize: "13px", marginBottom: "5px" }}>Message*</p>
        <textarea style={styles.input} rows={4} />
        <div className="d-flex justify-content-end">
          <button className="btn mt-1" style={{height: "30px", fontSize: "13px", backgroundColor: "#5692e8", color: "#ffffff"}}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
