import React, { Fragment } from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div className="main-logo-wrapper">
                    <div className="main-logo">
                        <div className="content">
                            <div className="inner-content">
                                <div className="ii-content">
                                    <span>
                                        <i></i>Law Offices Of<i></i>
                                    </span>
                                    <h1>R. Scott Dover</h1>
                                </div>
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="circle"></div>
                    </div>
                </div>
                <div className="tpl-header">
                    <div className="logo" style={{ display: 'none' }}>
                        <span>
                            <i></i>Law Offices Of<i></i>
                        </span>
                        <h1>R. Scott Dover</h1>
                    </div>
                    <ul className="tpl-nav">
                        <li className="right">
                            <ul>
                                <li className="attorneys">
                                    <a onClick={this.handleClick} href="/attorneys/">
                                        Attorneys
                                    </a>
                                </li>
                                <li className="contact">
                                    <a onClick={this.handleClick} href="/contact/">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="std home">
                            <a href="/" onClick={this.handleClick}>
                                Home
                            </a>
                        </li>
                        <li className="std firm">
                            <a href="/firm/" onClick={this.handleClick}>
                                Firm
                            </a>
                        </li>
                    </ul>
                </div>
            </Fragment>
        );
    }

    handleClick(e) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        this.jumpToHref(href, 'smooth');
    }

    componentDidMount() {
        const { pathname } = this.props;
        this.jumpToHref(pathname);
    }

    jumpToHref(href, behavior) {
        const label = href.replace(/\//g, '') || 'home';
        const div = document.querySelector(`[data-label="${label}"]`);

        history.pushState(null, null, href);
        if (typeof ga !== 'undefined') {
            ga('send', 'pageview', href);
        }

        const top = label !== 'home' ? div.offsetTop + 350 : 0;

        window.scrollTo({ top, behavior });
    }
}

export default Header;
