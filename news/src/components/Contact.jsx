import React from "react";

function Contact() {
  return (
    <section className="contact">
      <div className="innerDiv">
        <h2 className="contactHead">CTV Television Network</h2>
        <h4>Mailing Address:</h4>
        <span>P.O. Box 9, Station 'O,' Toronto, Ontario, Canada M4A 2M9</span>
        <h4>Courier Address:</h4>
        <span>9 Channel Nine Court, Scarborough, Ontario, Canada M1S 4B5</span>
      </div>
      <div className="innerDiv">
        <h2 className="contactHead">Bell Media</h2>
        <h4>Mailing Address:</h4>
        <span>299 Queen Street West Toronto, Ontario, Canada M5V 2Z5</span>
      </div>
      <div className="innerDiv thirdDiv">
        <h4>Telephone: </h4>
        <span>(416) 384-5000</span>
        <h4>Telephone National: </h4>
        <span>1-866-690-6179</span>
        <h4>Telephone Ontario: </h4>
        <span>1-800-668-0060</span>
        <h4>TTY/TDD: </h4>
        <span>1-800-461-1542</span>
      </div>
    </section>
  );
}

export default Contact;
