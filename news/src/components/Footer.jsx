import React from "react";
import { useState } from "react";

function Footer() {
  const [time, setTime] = useState()

  const currTime = new Date().toLocaleString()

    function myTimer() {
        setTime(currTime);
    }

    setInterval(myTimer,1000);

  return (
    <footer className="footer">
      {currTime}
      <p id="copyright">
        Copyright Â© 2022 - amit2006@gmail.com. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
