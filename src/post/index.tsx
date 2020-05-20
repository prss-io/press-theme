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
    shuffle,
    formattedDate
} from 'prss';

import cx from 'classnames';

import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';
import Hero from '../resources/components/Hero';

const Post = data => {
    init(data);

    const {
        heroTitle,
        heroMessage,
        heroImageUrl,
        featuredImageUrl,
        featuredImageAlt
    } = getProp('vars') as IVars;

    const links = getJsonProp('vars.links') as ILink[];

    const { content, uuid: postId, title: postTitle, createdAt } = getProp(
        'item'
    );
    const { title, url } = getProp('site');
    const sidebarHtml = getProp('sidebarHtml');
    const headerHtml = getProp('headerHtml');

    const items = getItems('post').filter(item => item.uuid !== postId);
    const shuffledItem = shuffle(items)[0];

    return (
        <Page className="page-post">
            <Header />
            {postTitle && <Hero imageUrl={heroImageUrl} />}
            <main>
                <div className="container main-container">
                    <div className="row">
                        <div className="col">
                            <div className="content">
                                {featuredImageUrl && (
                                    <div
                                        className="featured-image"
                                        style={{
                                            backgroundImage: `url(${featuredImageUrl})`
                                        }}
                                    />
                                )}

                                <div class="post-title-container mb-2">
                                    <h1 className="mb-0">{postTitle}</h1>
                                    {createdAt && (
                                        <div
                                            className="text-muted mt-3 date post-date d-flex align-items-center"
                                            title={timeAgo(createdAt)}
                                        >
                                            <i class={`fa fa-clock-o mr-2`}></i>
                                            <span>
                                                Published on{' '}
                                                {formattedDate(createdAt)}
                                            </span>
                                        </div>
                                    )}
                                </div>

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

                                <section className="mb-3">
                                    <h4 className="section-title">
                                        <span>Explore More</span>
                                    </h4>

                                    <div className="mt-4 mb-4">
                                        {shuffledItem && (
                                            <div className="card mb-3 d-flex flex-row">
                                                {shuffledItem.vars
                                                    ?.featuredImageUrl && (
                                                    <div className="col-2 p-0">
                                                        <a
                                                            className={cx(
                                                                'card-img-left',
                                                                {
                                                                    'card-has-img': !!shuffledItem
                                                                        .vars
                                                                        ?.featuredImageUrl
                                                                }
                                                            )}
                                                            href={
                                                                shuffledItem.url
                                                            }
                                                        >
                                                            {shuffledItem.vars
                                                                ?.featuredImageUrl && (
                                                                <img
                                                                    src={
                                                                        shuffledItem
                                                                            .vars
                                                                            ?.featuredImageUrl
                                                                    }
                                                                    alt={
                                                                        shuffledItem
                                                                            .vars
                                                                            ?.featuredImageAlt
                                                                    }
                                                                    loading="lazy"
                                                                />
                                                            )}
                                                        </a>
                                                    </div>
                                                )}

                                                <div className="card-body col">
                                                    {shuffledItem.title && (
                                                        <a
                                                            className="card-title"
                                                            href={
                                                                shuffledItem.url
                                                            }
                                                        >
                                                            {shuffledItem.title}
                                                        </a>
                                                    )}

                                                    {shuffledItem.content && (
                                                        <p className="card-text">
                                                            {
                                                                shuffledItem.content
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        )}
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

export default Post;
