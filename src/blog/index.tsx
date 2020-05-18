import '../resources/styles/common.scss';
import './index.scss';

import React from 'react';
import {
    init,
    getProp,
    getJsonProp,
    timeAgo,
    getItems,
    formattedDate
} from 'prss';

import cx from 'classnames';

import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';
import Hero from '../resources/components/Hero';

const Blog = data => {
    init(data);

    const { heroTitle, heroMessage, heroImageUrl } = getProp('vars') as IVars;

    const links = getJsonProp('vars.links') as ILink[];

    const { content } = getProp('item');
    const { title, url } = getProp('site');
    const sidebarHtml = getProp('sidebarHtml');

    const items = getItems('post', true);

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
                                                                    title={formattedDate(
                                                                        post.createdAt
                                                                    )}
                                                                >
                                                                    Posted{' '}
                                                                    {timeAgo(
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

export default Blog;
