import React from 'react';

function Contact() {
    return (
        <div style={{width: "37%", minWidth: "300px", border: "1px solid pink", margin: "0 auto"}}>
            <h4 className="montserrat">GET IN TOUCH</h4>
            <p style={{fontSize: "13px"}} className="mb-5">Trysail transom furl Sea legs scallywag Jack Ketch chandler mizzenmost reef sails skysail. Shiver me timbers loot bucko belaying pin Sea Legs boom gunwalls booty jury mast fore.</p>
            <div className="px-4">
                <h6>Contact Form</h6>
                <div className="row mt-4">
                    <div className="col-6">
                        <p style={{fontSize: "13px", marginBottom: "5px"}}>Name*</p>
                        <input type="text"/>
                    </div>
                    <div className="col-6">
                        <p style={{fontSize: "13px", marginBottom: "5px"}}>Email Address*</p>
                        <input type="text"/>
                    </div>
                    <p style={{fontSize: "13px", marginBottom: "5px"}}>Message*</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;
