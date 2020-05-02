import React from 'react';

const Panel = ({ containerClassName, className, children, label }) => (
    <div className={`${className || ''} panel`} data-label={label}>
        <div className={`${containerClassName || ''} container`}>{children}</div>
    </div>
);

export default Panel;
