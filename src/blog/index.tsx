import '../resources/styles/common.scss';
import './index.scss';

import React from 'react';
import * as PRSS from 'prss';

import cx from 'classnames';

import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';
import Hero from '../resources/components/Hero';
import Aside from '../resources/components/Aside';
import { isset } from '../resources/services/utils';

const Blog = data => {
    PRSS.init(data);
    (window as any).PRSS = PRSS;

    const {
        heroTitle,
        heroMessage,
        heroImageUrl,
        sidebarAsideHtml
    } = PRSS.getProp('vars') as IVars;

    const links = PRSS.getJsonProp('vars.links') as ILink[];

    const { content, title } = PRSS.getProp('item');
    const sidebarHtml = PRSS.getProp('sidebarHtml');

    const items = PRSS.getItems('post', true);

    return (
        <Page className="page-blog">
            <Header />
            {(heroTitle || title) && (
                <Hero imageUrl={heroImageUrl}>
                    <h1 className="hero-title">{heroTitle || title}</h1>
                    {heroMessage && (
                        <div className="hero-message mt-2">{heroMessage}</div>
                    )}
                </Hero>
            )}
            <main>
                <div className="container main-container">
                    <div className="row">
                        <div className="col">
                            <div className="content">
                                {content && content.trim().length && (
                                    <section
                                        dangerouslySetInnerHTML={{
                                            __html: content
                                        }}
                                    />
                                )}

                                <section className="mb-3">
                                    <div>
                                        <Aside name="inlineAsideHtml" />
                                        {items.map(post => {
                                            return (
                                                <div className="card d-flex flex-row">
                                                    <a
                                                        className={cx(
                                                            'card-img-left',
                                                            {
                                                                'card-has-img': !!post
                                                                    .vars
                                                                    ?.featuredImageUrl
                                                            }
                                                        )}
                                                        href={post.url}
                                                    >
                                                        {post.vars
                                                            ?.featuredImageUrl && (
                                                            <img
                                                                src={
                                                                    post.vars
                                                                        ?.featuredImageUrl
                                                                }
                                                                alt={
                                                                    post.vars
                                                                        ?.featuredImageAlt
                                                                }
                                                                loading="lazy"
                                                            />
                                                        )}
                                                    </a>

                                                    <div className="card-body col">
                                                        {post.title && (
                                                            <a
                                                                className="card-title"
                                                                href={post.url}
                                                            >
                                                                {post.title}
                                                            </a>
                                                        )}

                                                        {post.content && (
                                                            <p className="card-text">
                                                                {post.content}
                                                            </p>
                                                        )}

                                                        {post.createdAt && (
                                                            <p className="card-text">
                                                                <small
                                                                    className="text-muted"
                                                                    title={PRSS.formattedDate(
                                                                        post.createdAt
                                                                    )}
                                                                >
                                                                    Posted{' '}
                                                                    {PRSS.timeAgo(
                                                                        post.createdAt
                                                                    )}
                                                                </small>
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </section>
                            </div>
                        </div>
                        {isset(sidebarHtml || sidebarAsideHtml) && (
                            <div className="col-3 page-sidebar">
                                <div
                                    className="page-sidebar-content"
                                    dangerouslySetInnerHTML={{
                                        __html: sidebarHtml
                                    }}
                                />
                                <Aside name="sidebarAsideHtml" />
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </Page>
    );
};

export default Blog;
