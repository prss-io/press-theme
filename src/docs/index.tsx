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
import { isset } from '../resources/services/utils';

const Docs = data => {
    init(data);

    const {
        heroTitle,
        heroMessage,
        heroImageUrl,
        featuredImageUrl,
        sidebarMenu,
        footerCta,
        warningHtml,
        contentFooterHtml
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

        setSmallWidthMode(isSmallWidth);
        setMenuFixed(!!menuScrollTop);
        handleSidebarMaxHeight();
    };

    const onResize = e => {
        handleSmallWidth();
        handleSidebarMaxHeight();
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

    const handleSidebarMaxHeight = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const isSmallWidth = windowWidth <= 768;
        const winHeightMinusHeader = windowHeight - HEADER_HEIGHT;
        const contentElem = document.querySelector('.content') as any;
        const contentElemHeight = contentElem
            ? contentElem.offsetHeight + 40
            : 0;

        const menuHeight = isSmallWidth
            ? false
            : Math.max(winHeightMinusHeader, contentElemHeight);
        setMenuHeight(menuHeight);
    };

    const toggleMenuShow = () => {
        if (smallWidthMode) {
            setShowMenu(!showMenu);
        }
    };

    useEffect(() => {
        handleSmallWidth();
        handleSidebarMaxHeight();
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
                        <div className="row">
                            <div className="col-12 col-lg d-lg-flex flex-column justify-content-center">
                                <h1 className="mb-0">
                                    {heroTitle || postTitle}
                                </h1>
                                {heroMessage && (
                                    <div
                                        className="docs-hero-message mt-2"
                                        dangerouslySetInnerHTML={{
                                            __html: heroMessage
                                        }}
                                    />
                                )}
                            </div>
                            <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                                <Aside name="asideHtml" />
                            </div>
                        </div>
                    </div>

                    <div className="row m-0">
                        {isset(sidebarMenu) && (
                            <div
                                className="col-3 docs-sidebar"
                                style={{
                                    marginTop: menuTop ? menuTop + 'px' : null,
                                    maxHeight: menuHeight
                                        ? menuHeight + 'px'
                                        : null
                                }}
                            >
                                <div className="docs-sidebar-inner-container">
                                    <Menu
                                        name={sidebarMenu}
                                        ulClassName="sidebar-menu"
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
                            </div>
                        )}

                        <div className="col col-md-9">
                            <div className="content">
                                <div className="content-top">
                                    {isset(content || warningHtml) && (
                                        <section className="post-content mb-3">
                                            {warningHtml && (
                                                <div
                                                    class="alert alert-warning alert-dismissible fade show"
                                                    role="alert"
                                                    dangerouslySetInnerHTML={{
                                                        __html: warningHtml
                                                    }}
                                                />
                                            )}

                                            <div
                                                className="post-inner-content mb-5"
                                                dangerouslySetInnerHTML={{
                                                    __html: content
                                                }}
                                            />
                                            {isset(footerCta) && (
                                                <div
                                                    className="footer-cta"
                                                    dangerouslySetInnerHTML={{
                                                        __html: footerCta
                                                    }}
                                                />
                                            )}
                                        </section>
                                    )}

                                    {isset(sidebarMenu) && (
                                        <section>
                                            <Menu
                                                name={sidebarMenu}
                                                ulClassName="docs-footer-menu"
                                                mode="prev-next"
                                            />
                                        </section>
                                    )}
                                </div>

                                {isset(contentFooterHtml) && (
                                    <section className="content-footer">
                                        <Aside name="contentFooterHtml" />
                                    </section>
                                )}
                            </div>
                        </div>
                        {isset(sidebarHtml) && (
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
