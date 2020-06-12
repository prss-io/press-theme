import '../resources/styles/common.scss';
import './index.scss';

import React from 'react';
import {
    init,
    getProp,
    getJsonProp,
    timeAgo,
    getItems,
    getPathUrl,
    formattedDate,
    truncateStr
} from 'prss';
import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';
import Hero from '../resources/components/Hero';

const Home = data => {
    init(data);

    const {
        heroTitle,
        heroMessage,
        heroImageUrl,
        featuredImageUrl,
        featuredImageAlt
    } = getProp('vars') as IVars;

    const links = getJsonProp('vars.links') as ILink[];

    const { content } = getProp('item');
    const { title, url } = getProp('site');
    const sidebarHtml = getProp('sidebarHtml');

    const items = getItems('post', true);

    return (
        <Page className="page-home">
            <Header />
            <Hero imageUrl={heroImageUrl}>
                {heroTitle && <h1 className="hero-title">{heroTitle}</h1>}
                {heroMessage && (
                    <div className="hero-message mt-2">{heroMessage}</div>
                )}
                {links && (
                    <div className="links mt-4">
                        {links.map((link, index) => (
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener"
                                key={'link' + index}
                                className="mr-3"
                            >
                                {link.icon && (
                                    <i class={`fa ${link.icon} mr-1`}></i>
                                )}
                                <span>{link.text}</span>
                            </a>
                        ))}
                    </div>
                )}
            </Hero>
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
                                    <h2 className="section-title">
                                        <span>Latest Posts</span>
                                        <a href={getPathUrl('blog')}>more</a>
                                    </h2>

                                    <div className="row mt-4 mb-4">
                                        {items.slice(0, 6).map(post => {
                                            return (
                                                <div class="col-sm-6 col-md-4">
                                                    <div className="card mb-4">
                                                        {post.vars
                                                            ?.featuredImageUrl && (
                                                            <a
                                                                className="card-image"
                                                                href={post.url}
                                                            >
                                                                <img
                                                                    className="card-img-top"
                                                                    src={
                                                                        post
                                                                            .vars
                                                                            ?.featuredImageUrl
                                                                    }
                                                                    alt={
                                                                        post
                                                                            .vars
                                                                            ?.featuredImageAlt
                                                                    }
                                                                    loading="lazy"
                                                                />
                                                            </a>
                                                        )}

                                                        <div className="card-body">
                                                            {post.title && (
                                                                <a
                                                                    className="card-title"
                                                                    href={
                                                                        post.url
                                                                    }
                                                                >
                                                                    {truncateStr(
                                                                        post.title,
                                                                        65
                                                                    )}
                                                                </a>
                                                            )}

                                                            {post.content && (
                                                                <p className="card-text mt-1">
                                                                    {
                                                                        post.content
                                                                    }
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

export default Home;
