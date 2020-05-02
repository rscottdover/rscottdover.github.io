import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('.app');

const BioPopup = ({ isOpen, onRequestClose }) => (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Scott Dover">
        <a className="close-bio" onClick={onRequestClose}>
            &times;
        </a>
        <h3>R. Scott Dover</h3>
        <p>
            Scott Dover has spent more than 30 years as a litigator in South Carolina. Scott was educated in the Public
            Schools of Pickens County. After graduating from the University of South Carolina Law School in 1987, he
            returned to Pickens, where he has focused on general trial litigation. Scott focuses his practice on
            Personal Injury, including Automobile and Truck Accidents, Work Related Injuries, Wrongful Death, and other
            forms of personal injury. Scott also handles numerous Criminal Court and Family Court cases, as well as
            Social Security Disability Matters. Scott also represents the Town of Central, the City of Pickens Police
            Department, and the Pickens County Clerk of Court’s Office.
        </p>
        <p>
            Scott graduated from the University of South Carolina in 1984 with a Bachelor of Arts in Political Science.
            He obtained his Juris Doctorate from the University of South Carolina School of Law in 1987. He is licensed
            to practice law in all of the Courts of the State of South Carolina, the United States District Court for
            the District of South Carolina, the United States Court of Appeals for the Fourth Circuit, and the Supreme
            Court of the United States of America.
        </p>
        <p>
            Scott has been recognized by “Best Lawyers in America,” “South Carolina Super Lawyers,” and has received a
            “BV Distinguished” rating by Martindale-Hubbell for more than five years in a row.
        </p>
        <p>
            Scott is a member of the South Carolina Bar, the Pickens County and Greenville County Bar Associations. He
            is also a member of the American Board of Trial Advocates (ABOTA), South Carolina Association for Justice,
            American Association for Justice, and the American Bar Association. He has been recognized as a Master of
            the Bench by the Upstate South Carolina Inn of Court Association and is a member of the Federal Court
            Association.
        </p>
        <p>
            Scott also represents his Judicial District as a member of the Board of Governors and the House of Delegates
            for the South Carolina Bar Association.
        </p>
        <p>Scott is married to Caroline Dover and they have five (5) children.</p>
    </Modal>
);

export default BioPopup;
