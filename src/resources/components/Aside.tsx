import '../styles/Aside.scss';

import React, { FunctionComponent, useEffect, useRef } from 'react';
import * as PRSS from 'prss';
import cx from 'classnames';

interface IProps {
    name: string;
}

const Aside: FunctionComponent<IProps> = ({ name }) => {
    const vars = PRSS.getProp('vars');
    const asideName = vars[name];
    const divRef = useRef(null);

    if (!asideName) return null;

    useEffect(() => {
        const html = document.createRange().createContextualFragment(asideName);
        divRef.current.innerHtml = '';
        divRef.current.appendChild(html);
    }, []);

    return <div ref={divRef} className={cx('page-aside', name)} />;
};

export default Aside;
