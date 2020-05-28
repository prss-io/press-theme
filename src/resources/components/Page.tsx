import '../styles/Page.scss';

import React, { FunctionComponent, ReactNode } from 'react';
//import Head from './Head';
import cx from 'classnames';

interface IProps {
    children: ReactNode;
    className?: string;
}

const Page: FunctionComponent<IProps> = ({ children, className }) => {
    return (
        <div className={cx('page', className)}>
            {/*<Head />*/}
            {children}
        </div>
    );
};

export default Page;
