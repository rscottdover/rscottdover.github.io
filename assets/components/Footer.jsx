import React from 'react';
import Panel from './Panel';

const Footer = () => (
    <Panel className="alt2" containerClassName="footer">
        <a href="https://secure.lawpay.com/pages/scottdover/operating" target="_blank">
            Make a payment
        </a>
        &nbsp;&middot;&nbsp; &copy; {new Date().getFullYear()} Law Offices of R. Scott Dover
        &nbsp;&middot;&nbsp;864.878.0662 &nbsp;&middot;&nbsp;221 Hampton Avenue, Pickens, SC 29671
    </Panel>
);

export default Footer;
