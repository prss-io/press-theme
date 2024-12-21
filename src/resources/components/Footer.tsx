import '../styles/Footer.css';

import React, { FunctionComponent } from 'react';
import * as PRSS from 'prss';

import prssImg from '../../resources/images/prss-sm.png';

interface IProps {}

const Footer: FunctionComponent<IProps> = () => {
  const { footerLeft, footerRight } = PRSS.getProp('vars');
  const { title } = PRSS.getProp('site');

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-6">
            {footerLeft ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: footerLeft
                }}
              ></div>
            ) : (
              <span>© {title}</span>
            )}
          </div>
          <div className="col col-12 col-md-6 mt-3 mt-md-0 d-flex justify-content-md-end">
            {footerRight ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: footerRight
                }}
              ></div>
            ) : (
              <a
                href="https://prss.io"
                className="d-flex align-items-center footer-shoutout"
                target="_blank"
                rel="noopener"
                title="Powered by PRSS Site Creator"
              >
                <img
                  className="prss-footer-image mr-1"
                  src={prssImg}
                  width={15}
                />
                <span className="font-weight-bold prss-tag">PRSS Site Creator</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
