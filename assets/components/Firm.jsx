import React from 'react';
import Panel from './Panel';

const Firm = () => (
    <Panel className="alt" label="firm">
        <h2>Firm</h2>
        <p>
            Scott Dover is experienced in personal injury lawsuits, family court matters, workers' compensation,
            criminal defense, and has practiced in courtrooms across the State of South Carolina.
        </p>
        <div className="row">
            <div className="eight columns box alpha disc-list">
                <h4>Personal Injury</h4>
                <ul>
                    <li>
                        Car Accidents, Truck Accidents, Passengers in Car Wrecks, Motorcycle Accidents, Victims of Drunk
                        Driving
                    </li>
                    <li>Catastrophic Injuries</li>
                    <li>Wrongful Death – Fatal Accidents</li>
                </ul>
                <h4>Family Law</h4>
                <ul>
                    <li>Separation and Divorce</li>
                    <li>Child Custody and Support</li>
                </ul>
            </div>
            <div className="eight columns box omega disc-list">
                <h4>Workers&rsquo; Compensation Claims</h4>
                <ul>
                    <li>Temporary or Permanent Disability</li>
                </ul>
                <h4>Criminal Defense</h4>
                <ul>
                    <li>General Sessions Charges</li>
                    <li>
                        DUI <em className="fancy">&amp;</em> Drug Offenses
                    </li>
                    <li>Magistrate Level Offenses</li>
                    <li>Juvenile Charges</li>
                </ul>
            </div>
        </div>
    </Panel>
);

export default Firm;
