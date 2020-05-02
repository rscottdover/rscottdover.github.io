import './style';
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import Overview from './components/Overview';
import Firm from './components/Firm';
import Staff from './components/Staff';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';

render(
    <Fragment>
        <Header pathname={window.location.pathname} />
        <Content>
            <Overview />
            <Firm />
            <Staff />
            <ContactUs />
            <Footer />
            <Slideshow />
        </Content>
    </Fragment>,
    document.querySelector('.app')
);
