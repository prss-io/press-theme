import '../styles/Header.scss';
import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import cx from 'classnames';
import * as PRSS from 'prss';
import Menu from './Menu';

interface IProps {
  onScrollCallback?: any;
  onResizeCallback?: any;
}

const HEADER_HEIGHT = 80;

const Header: FunctionComponent<IProps> = ({
  onScrollCallback,
  onResizeCallback
}) => {
  const { logoImageUrl } = PRSS.getProp('vars');
  const { title, url } = PRSS.getProp('site');
  const currentPostId = PRSS.getProp('item').uuid;

  const [scrollTop, setScrollTop] = useState(0);
  const [stickyEnabled, setStickyEnabled] = useState(false);
  const [stickyDisabled, setStickyDisabled] = useState(false);
  const stickyTimeout = useRef(null);

  useEffect(() => {
    const onScroll = e => {
      const targetScrollTop = e.target.documentElement.scrollTop;
      onScrollCallback && onScrollCallback(targetScrollTop);
      setScrollTop(targetScrollTop);

      if (!stickyEnabled && scrollTop > HEADER_HEIGHT) {
        setStickyEnabled(true);
        setStickyDisabled(false);
      }

      if (!stickyDisabled && stickyEnabled && targetScrollTop <= 20) {
        setStickyEnabled(false);
        setStickyDisabled(true);

        if (!stickyTimeout.current) {
          stickyTimeout.current = setTimeout(() => {
            setStickyDisabled(false);
            clearTimeout(stickyTimeout.current);
            stickyTimeout.current = null;
          }, 2000);
        }
      }
    };

    const onResize = e => {
      onResizeCallback && onResizeCallback(e);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [scrollTop]);

  const renderDropdownChildren = nodeChildren => {
    return (
      <div className="dropdown-menu">
        {nodeChildren.map(nodeItem => {
          const post = PRSS.getItem(nodeItem.key);
          return (
            <a className="dropdown-item" href={post.url}>
              {post.title}
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <header className="page-header">
      <div
        className={cx('header-nav', {
          scrolled: stickyEnabled,
          'sticky-unset': stickyDisabled,
          'sticky-top': stickyEnabled || stickyDisabled
        })}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark mx-2">
            <a className="navbar-brand logo" href={PRSS.getSiteUrl()}>
              {logoImageUrl ? <img src={logoImageUrl} /> : title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <Menu
                name="header"
                ulClassName="navbar-nav"
                renderItem={node => {
                  const post = PRSS.getItem(node.key);
                  const structureItem = post.path
                    ? PRSS.findInStructure(node.key)
                    : null;

                  const structureItemChildren = structureItem?.children || [];

                  const nodeChildren = node?.children || [];

                  const itemHaystack = [
                    ...structureItemChildren,
                    ...nodeChildren
                  ];

                  const isChildItem = PRSS.hasItem(currentPostId, itemHaystack);

                  return (
                    <li
                      className={cx('nav-item', {
                        dropdown: nodeChildren && nodeChildren.length,
                        active: node.key === currentPostId || isChildItem
                      })}
                    >
                      <a
                        className={cx('nav-link', {
                          'dropdown-toggle': nodeChildren && nodeChildren.length
                        })}
                        href={post.url}
                      >
                        {node.title || post.title}
                      </a>
                      {nodeChildren && renderDropdownChildren(nodeChildren)}
                    </li>
                  );
                }}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
