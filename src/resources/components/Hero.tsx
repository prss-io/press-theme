import '../styles/Hero.scss';
import React, { FunctionComponent, ReactNode } from 'react';
import cx from 'classnames';

interface IProps {
  children?: ReactNode;
  imageUrl: string;
  containerChildClassName?: string;
}

const Hero: FunctionComponent<IProps> = ({
  children,
  imageUrl = '',
  containerChildClassName = ''
}) => {
  return (
    <div className="hero">
      <div
        className="hero-image"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : null
        }}
      />
      <div className="container mt-5 mt-sm-0">
        <div
          className={cx(
            'row mx-2 justify-content-between',
            containerChildClassName
          )}
        >
          <div className="col">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
