import '../resources/styles/common.scss';
import './index.scss';

import React, { useState, useEffect, Fragment } from 'react';
import { init, getProp, getItems } from 'prss';
import cx from 'classnames';

import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';
import Hero from '../resources/components/Hero';
import Menu from '../resources/components/Menu';
import Aside from '../resources/components/Aside';

const Docs = data => {
    init(data);

    const {
        heroTitle,
        heroMessage,
        heroImageUrl,
        featuredImageUrl,
        sidebarMenu
    } = getProp('vars') as IVars;

    const { content, uuid: postId, title: postTitle } = getProp('item');

    const sidebarHtml = getProp('sidebarHtml');

    const items = getItems('post').filter(item => item.uuid !== postId);

    const [menuTop, setMenuTop] = useState(0);
    const [menuHeight, setMenuHeight] = useState(0);
    const [smallWidthMode, setSmallWidthMode] = useState(false);
    const [menuFixed, setMenuFixed] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const FEATURED_IMG_HEIGHT = featuredImageUrl ? 250 : 0;
    const HEADER_HEIGHT = 80;
    const TITLE_HEIGHT = 155;
    const COMBINED_HEADER_HEIGHT =
        FEATURED_IMG_HEIGHT + HEADER_HEIGHT + TITLE_HEIGHT - 20;

    const onScroll = scrollTop => {
        const windowWidth = window.innerWidth;
        const isSmallWidth = windowWidth <= 768;
        const menuScrollTop =
            scrollTop > COMBINED_HEADER_HEIGHT
                ? scrollTop - COMBINED_HEADER_HEIGHT
                : 0;

        const sidebarElem = document.querySelector('.docs-sidebar') as any;
        const asideElem = document.querySelector('.page-aside') as any;

        const sidebarElemHeight = sidebarElem ? sidebarElem.offsetHeight : 0;
        const asideElemHeight = asideElem ? asideElem.offsetHeight : 0;

        const menuHeight =
            sidebarElemHeight - (menuScrollTop + asideElemHeight);

        if (!isSmallWidth) {
            setMenuTop(menuScrollTop);
            setMenuHeight(menuHeight);
            setSmallWidthMode(false);
        } else {
            setMenuTop(null);
            setMenuHeight(null);
            setSmallWidthMode(true);
        }

        if (menuScrollTop) {
            setMenuFixed(true);
        } else {
            setMenuFixed(false);
        }
    };

    const onResize = e => {
        handleSmallWidth();
    };

    const handleSmallWidth = () => {
        const windowWidth = window.innerWidth;
        const isSmallWidth = windowWidth <= 768;

        if (!isSmallWidth) {
            setSmallWidthMode(false);
            setShowMenu(false);
        } else {
            setSmallWidthMode(true);
        }
    };

    const toggleMenuShow = () => {
        if (smallWidthMode) {
            setShowMenu(!showMenu);
        }
    };

    useEffect(() => {
        handleSmallWidth();
    });

    return (
        <Page className="page-docs">
            <Header onScrollCallback={onScroll} onResizeCallback={onResize} />
            {postTitle && <Hero imageUrl={heroImageUrl} />}
            <main>
                <div
                    className={cx('container main-container', {
                        'small-width': smallWidthMode,
                        'menu-fixed': menuFixed,
                        'menu-show': showMenu
                    })}
                >
                    {featuredImageUrl && (
                        <div
                            className="featured-image"
                            style={{
                                backgroundImage: `url(${featuredImageUrl})`
                            }}
                        />
                    )}

                    <div class="post-title-container">
                        <h1 className="mb-0">{heroTitle || postTitle}</h1>
                        {heroMessage && (
                            <div className="docs-hero-message mt-2">
                                {heroMessage}
                            </div>
                        )}
                    </div>

                    <div className="row m-0">
                        {sidebarMenu && (
                            <div className="col-3 docs-sidebar">
                                <div
                                    className="docs-sidebar-inner-container"
                                    style={{
                                        marginTop: menuTop
                                            ? menuTop + 'px'
                                            : null
                                    }}
                                >
                                    <Menu
                                        name={sidebarMenu}
                                        ulClassName="sidebar-menu"
                                        style={{
                                            height: menuHeight
                                                ? menuHeight + 'px'
                                                : null
                                        }}
                                        prependedComponent={
                                            <Fragment>
                                                {smallWidthMode && (
                                                    <div
                                                        className="menu-title"
                                                        onClick={e =>
                                                            toggleMenuShow()
                                                        }
                                                    >
                                                        <i
                                                            class={`fa fa-caret-down mr-2`}
                                                        ></i>
                                                        <span>Navigate</span>
                                                    </div>
                                                )}
                                            </Fragment>
                                        }
                                    />
                                </div>
                                <Aside />
                            </div>
                        )}

                        <div className="col">
                            <div className="content">
                                {content && content.trim().length && (
                                    <section className="post-content mb-3 pb-5">
                                        <div
                                            className="post-inner-content"
                                            dangerouslySetInnerHTML={{
                                                __html: content
                                            }}
                                        />
                                    </section>
                                )}

                                {sidebarMenu && (
                                    <section>
                                        <Menu
                                            name={sidebarMenu}
                                            ulClassName="docs-footer-menu"
                                            mode="prev-next"
                                        />
                                    </section>
                                )}
                            </div>
                        </div>
                        {sidebarHtml && (
                            <div
                                className="col-3"
                                dangerouslySetInnerHTML={{
                                    __html: sidebarHtml
                                }}
                            />
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </Page>
    );
};

export default Docs;
