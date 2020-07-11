import './overview.scss';
import Panel from './Panel';
import React from 'react';

import avBadge from './av-badge.png';
import superLawyer from './super-lawyer.png';
import superLawyer2x from './super-lawyer@2x.png';

const Overview = () => (
    <Panel label="home" className="overview">
        <p className="intro">
            The Law Offices of R. Scott Dover provide general litigation services to individuals in Pickens, Oconee,
            Greenville, Anderson, and Spartanburg Counties in the Upstate of South Carolina. Scott Dover has spent more
            than 32 years as a litigator in South Carolina, and has been recognized by &ldquo;Best Lawyers in
            America,&rdquo; &ldquo;South Carolina Super Lawyers,&rdquo; and has received a &ldquo;AV Preeminent&rdquo;
            rating by Martindale-Hubbell.
        </p>
        <div className="badges">
            <img src={superLawyer} srcset={`${superLawyer2x} 2x`} alt="South Carolina Super Lawyers" />
            <img src={avBadge} alt="AV Preeminent" />
        </div>
    </Panel>
);

export default Overview;
