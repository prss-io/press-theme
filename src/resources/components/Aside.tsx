import '../styles/Aside.scss';

import React, { FunctionComponent } from 'react';
import { getProp } from 'prss';

interface IProps {}

const Aside: FunctionComponent<IProps> = () => {
    const { asideHtml } = getProp('vars');
    return (
        <div
            className="page-aside"
            dangerouslySetInnerHTML={{
                __html: asideHtml
            }}
        />
    );
};

export default Aside;
