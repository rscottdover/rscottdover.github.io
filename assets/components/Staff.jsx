import Panel from './Panel';
import React from 'react';
import bioImage from './dover-bio.jpg';
import BioPopup from './BioPopup';

const Staff = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <Panel label="attorneys">
            <BioPopup isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} />
            <div className="photo-copy right">
                <img src={bioImage} alt="R. Scott Dover" />
                <div className="inner-content">
                    <h3>R. Scott Dover</h3>
                    <p>
                        Scott Dover has spent more than 30 years as a litigator in South Carolina. Scott was educated in
                        the Public Schools of Pickens County. After graduating from the University of South Carolina Law
                        School in 1987, he returned to Pickens, where he has focused on general trial litigation. Scott
                        focuses his practice on Personal Injury, including Automobile and Truck Accidents, Work Related
                        Injuries, Wrongful Death, and other forms of personal injury. Scott also handles numerous
                        Criminal Court and Family Court cases, as well as Social Security Disability Matters. Scott also
                        represents the Town of Central, the City of Pickens Police Department, and the Pickens County
                        Clerk of Court’s Office.
                        <a className="popup" onClick={() => setIsOpen(true)}>
                            &nbsp;Read More &raquo;
                        </a>
                    </p>
                </div>
            </div>

            <div className="cb"></div>
            <h2 className="centered-item admin-staff">
                <i>&mdash;</i> Administrative Staff <i>&mdash;</i>
            </h2>
            <div className="row single-height">
                <div className="eight columns alpha centered">
                    <strong>Mary</strong> serves the firm as a litigation paralegal and has worked with Scott for over
                    three years. Mary assists in all facets of the firm’s operation.
                    <a style={{ display: 'block', marginTop: '1em' }} href="mailto:mary@rscottdover.com">
                        - Email Mary -
                    </a>
                </div>
                <div className="eight columns omega centered">
                    <strong>Ben</strong> is the firm’s family court paralegal. He earned a paralegal certificate from
                    Duke University and has worked at the firm since January 2019.
                    <a style={{ display: 'block', marginTop: '1em' }} href="mailto:benjamin@rscottdover.com">
                        - Email Ben -
                    </a>
                </div>
            </div>
            <div style={{ clear: 'both' }} />
        </Panel>
    );
};

export default Staff;
