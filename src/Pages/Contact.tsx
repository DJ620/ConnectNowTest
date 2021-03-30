import React from "react";

function Contact() {
  const styles = {
    contact: {
      width: "37%",
      minWidth: "300px",
      margin: "0 auto",
      fontSize: "13px"
    },
    label: {
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      backgroundColor: "#182c47",
      border: "none",
      color: "#b6cae3",
    },
    blue: {
      color: "#5692e8"
    },
    button: {
      color: "#ffffff",
      backgroundColor: "#5692e8",
      border: "none",
      height: "30px",
      width: "65px",
    }
  };
  return (
    <div style={styles.contact}>
      <h4 className="montserrat">GET IN TOUCH</h4>
      <p className="mb-5">
        Trysail transom furl Sea legs scallywag Jack Ketch chandler mizzenmost
        reef sails skysail. Shiver me timbers loot bucko belaying pin Sea Legs
        boom gunwalls booty jury mast fore.
      </p>
      <div className="p-3" style={{ backgroundColor: "#0e1a2b" }}>
        <h6>Contact Form</h6>
        <div className="row mt-4">
          <div className="col-12 col-lg-6">
            <p style={styles.label}>Name <span style={styles.blue}>*</span></p>
            <input type="text" className="mb-4" style={styles.input} />
          </div>
          <div className="col-12 col-lg-6">
            <p style={styles.label}>Email Address <span style={styles.blue}>*</span></p>
            <input type="text" className="mb-4" style={styles.input} />
          </div>
        </div>
        <p style={styles.label}>Message <span style={styles.blue}>*</span></p>
        <textarea style={styles.input} rows={4} />
        <div className="d-flex justify-content-end">
          <button
            className="mt-1"
            style={styles.button}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
