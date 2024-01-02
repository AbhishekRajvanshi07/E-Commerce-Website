import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";

import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div>
      <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>
          <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>amazon</span>
          </div>

          <div className={css.block}>
            <div className={css.detail}>
              <span>Contact us</span>
              <span className={css.pngLine}>
                <LocationMarkerIcon className={css.icon} />
                <span>111 north avanue orlando , FL 32801</span>
              </span>

              <span className={css.pngLine}>
                {" "}
                <PhoneIcon className={css.icon} />
                <a href="tel:352-306-4415"></a>
              </span>

              <span className={css.pngLine}>
                <InboxIcon className={css.icon} />
                <a href="mailto:support@amazon.com">support@amazon.com</a>
              </span>
            </div>
          </div>
          <div className={css.block}>
            <div className={css.detial}>
              <span>Account</span>
              <span className={css.pngLine}>
                <LoginIcon className={css.icon} />
                Sign In
              </span>
            </div>
          </div>
          <div className={css.block}>
            <div className={css.detial}>
              <span>Company</span>
              <span className={css.pngLine}>
                <UsersIcon className={css.icon} />
                About us
              </span>
            </div>
          </div>
          <div className={css.block}>
            <div className={css.detial}>
              <span>Resources</span>
              <span className={css.pngLine}>
                <LinkIcon className={css.icon} />
                <p>Safety Privacy & Terms</p>
              </span>
            </div>
          </div>
        </div>
        <div className={css.copyRight}>
          <span>Copyright @2022 by Amazon, Inc.</span>
          <span>All right reversed.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
