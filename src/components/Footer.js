import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <wrapperFooter className=" bg-bluenav1-educal container">
        <section className="colonne1 ">
          <a href="#" className="">
            <img src="img/logo.png" alt="logo educal" />
          </a>
          <p>
            great lesson ideas and lesson plans for ESL teachers! Educators can
            customize lesson plans to best.
          </p>
          <div className="logos-sociaux">
            <a href="#" className="">
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />

              <FontAwesomeIcon
                icon={faFacebook}
                className="text-red-600 text-8xl"
              />
            </a>
            <a href="#" className=""></a>
            <a href="#" className=""></a>
          </div>
        </section>
        <section className=""></section>
        <section className=""></section>
        <section className=""></section>
      </wrapperFooter>
    </footer>
  );
}
