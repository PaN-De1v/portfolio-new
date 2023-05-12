import React from "react";
import global from "./../css/global.module.css";
import Logo from "./../assets/logo.png";

function Home() {
  return(
    <div className={global.container}>
      <header className={global.header}>
        <h1>
          I'm De1v,<br/>
          Czech Republic Developer<br />
          Programming in <strong>JavaScript, GoLang</strong>
        </h1>
        <img src={Logo} alt="logo" width="300" className={global.rounded_logo} />
      </header>
      <div className={global.btns}>
        <button onClick={() => navigator.clipboard.writeText("De1v#0111").then(() => alert("Copied Discord Tag to clipboard!"))} className={global.btn_primary}>De1v#0111</button>
        <button onClick={() => navigator.clipboard.writeText("de1v@dearths.lol").then(() => alert("Copied e-mail to clipboard!"))} className={global.btn_secondary}>de1v@dearths.lol</button>
      </div>
      <div className={global.links}>
        <a className={global.link} href="https://github.com/PaN-De1v">GitHub</a>
        <a className={global.link} href="https://instagram.com/de1v_">Instagram</a>
      </div>
      <p className={global.copyright}>Copyright © De1v 2023</p>
    </div>
  )
}

export default Home;