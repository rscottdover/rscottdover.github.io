import React from 'react';
import Panel from './Panel';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.googleMaps = React.createRef();
    }

    render() {
        return (
            <Panel label="contact" className="alt" containerClassName="contact-us">
                <h2>Contact Us</h2>
                <div className="row padding-top">
                    <div className="column alpha one-third">
                        <div className="google-map" ref={this.googleMaps}></div>
                        <div className="address">
                            <ul>
                                <li>
                                    <b>Address</b>
                                    <span>
                                        221 Hampton Avenue
                                        <br />
                                        Pickens, SC 29671
                                    </span>
                                    <div style={{ clear: 'left', paddingBottom: '8px' }}></div>
                                    <em>Mailing</em>
                                    <span>
                                        P.O. Box 462
                                        <br />
                                        Pickens, SC 29671
                                    </span>
                                    <div style={{ clear: 'left' }}></div>
                                </li>
                                <li>
                                    <b>Phone</b>
                                    <span>864.878.0662</span>
                                    <div style={{ clear: 'left' }}></div>
                                </li>
                                <li>
                                    <b>Fax</b>
                                    <span>
                                        864.878.8209
                                        <br />
                                        864.878.0735
                                    </span>
                                    <div style={{ clear: 'left' }}></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="column omega two-thirds">
                        <p>
                            To schedule a consultation, please provide the following information. One of our staff will
                            contact you to schedule an appointment.
                        </p>
                        <form className="contact-form" method="post" action="//formspree.io/rscottdover1@gmail.com">
                            <input type="hidden" name="_next" value="http://rscottdover.com/contact#!/thanks" />
                            <ul>
                                <li>
                                    <input type="text" name="name" placeholder="Enter your name (i.e. John Smith)" />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name="contact"
                                        placeholder="How can we contact you? (i.e. phone or email)"
                                    />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="How can we help you?"></textarea>
                                </li>
                                <li className="align-right">
                                    <input type="submit" value="Submit" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div style={{ clear: 'both' }}></div>
            </Panel>
        );
    }

    componentDidMount() {
        const opts = {
            center: new google.maps.LatLng(34.88238480755083, -82.70261280356596),
            zoom: 14,
        };

        const map = new google.maps.Map(this.googleMaps.current, opts);

        const infoWindow = new google.maps.InfoWindow({
            content:
                '\
                <b class="bold">Law Offices Of R. Scott Dover</b><br>\
                221 Hampton Avenue<br/>Pickens, SC 29671<br/>\
                <a href="http://maps.google.com?daddr=220+Hampton+Ave+Pickens+SC" target="_blank">Get Directions</a>\
            ',
        });

        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(34.88238480755083, -82.70261280356596),
            map: map,
            icon: {
                url: '/assets/img/marker-icon.png',
            },
        });

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });
    }
}

export default ContactUs;
