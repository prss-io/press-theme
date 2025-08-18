import '../styles/Aside.css';

import React, { FunctionComponent, useEffect, useRef } from 'react';
import * as PRSS from "@prss/ui";
import cx from 'classnames';

interface IProps {
  name: string;
}

const Aside: FunctionComponent<IProps> = ({ name, className = "" }) => {
  const vars = PRSS.getProp('vars');
  const asideName = vars[name];
  if (!asideName) return null;
  return <div className={cx('page-aside', name, className)} dangerouslySetInnerHTML={{ __html: asideName }} />;
};

export default Aside;
