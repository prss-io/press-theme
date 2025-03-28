import '../styles/Aside.css';

import React, { FunctionComponent, useEffect, useRef } from 'react';
import * as PRSS from 'prss';
import cx from 'classnames';

interface IProps {
  name: string;
}

const Aside: FunctionComponent<IProps> = ({ name }) => {
  const vars = PRSS.getProp('vars');
  const asideName = vars[name];
  if (!asideName) return null;
  return <div className={cx('page-aside', name)} dangerouslySetInnerHTML={{ __html: asideName }} />;
};

export default Aside;
