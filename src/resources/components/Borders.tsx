import '../styles/Borders.scss';

import React, { FunctionComponent } from 'react';

interface IProps {}

const Borders: FunctionComponent<IProps> = () => (
    <div className="page-borders">
        <div className="t-border page-border" />
        <div className="b-border page-border" />
        <div className="l-border page-border" />
        <div className="r-border page-border" />
    </div>
);

export default Borders;
