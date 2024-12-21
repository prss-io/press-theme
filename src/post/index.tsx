import '../resources/styles/common.css';
import './index.css';

import React from 'react';
import * as PRSS from 'prss';

import cx from 'classnames';

import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';
import Hero from '../resources/components/Hero';
import { isset } from '../resources/services/utils';
import Aside from '../resources/components/Aside';

const Post = data => {
  PRSS.init(data);
  (window as any).PRSS = PRSS;

  const {
    heroTitle,
    heroMessage,
    heroImageUrl,
    featuredImageUrl,
    featuredImageAlt,
    sidebarAsideHtml
  } = PRSS.getProp('vars') as IVars;

  const links = PRSS.getJsonProp('vars.links') as ILink[];

  const { content, uuid: postId, title: postTitle, createdAt } = PRSS.getProp(
    'item'
  );
  const { title, url } = PRSS.getProp('site');
  const sidebarHtml = PRSS.getProp('sidebarHtml');
  const headerHtml = PRSS.getProp('headerHtml');

  const items = PRSS.getItems('post').filter(item => item.uuid !== postId);
  const shuffledItem = PRSS.shuffle(items)[0];

  return (
    <Page className="page-post">
      <Header />
      {postTitle && <Hero imageUrl={heroImageUrl} />}
      <main>
        <div className="container main-container">
          <div className="row">
            <div className="col">
              <div className="content">
                {/*<div className="post-title-container mb-2">
                                    <h1 className="mb-0">{postTitle}</h1>
                                    {createdAt && (
                                        <div
                                            className="text-muted mt-3 date post-date d-flex align-items-center"
                                            title={PRSS.timeAgo(createdAt)}
                                        >
                                            <i className={`fa fa-clock-o mr-2`}></i>
                                            <span>
                                                Published on{' '}
                                                {PRSS.formattedDate(createdAt)}
                                            </span>
                                        </div>
                                    )}
                                    </div>*/}

                <div className="post-title-container mb-2">
                  <div className="row justify-content-between">
                    <div className="col-12 col-lg d-lg-flex flex-column justify-content-center">
                      <h1 className="mb-0">{postTitle}</h1>
                      {createdAt && (
                        <div
                          className="text-muted mt-3 date post-date d-flex align-items-center"
                          title={PRSS.timeAgo(createdAt)}
                        >
                          <i className={`fa fa-clock-o mr-2`}></i>
                          <span>
                            Published on {PRSS.formattedDate(createdAt)}
                          </span>
                        </div>
                      )}
                    </div>
                    {PRSS.getProp('vars')?.asideHtml && (
                      <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                        <Aside name="asideHtml" />
                      </div>
                    )}
                  </div>
                </div>

                {featuredImageUrl && (
                  <div
                    className="featured-image"
                    style={{
                      backgroundImage: `url(${featuredImageUrl})`
                    }}
                  />
                )}

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

                {shuffledItem && (
                  <section className="mb-3">
                    <h4 className="section-title explore-more">
                      <span>Explore More</span>
                    </h4>

                    <div className="">
                      <div
                        className={cx('card mb-3 d-flex flex-row', {
                          'has-img': !!shuffledItem.vars?.featuredImageUrl
                        })}
                      >
                        {shuffledItem.vars?.featuredImageUrl && (
                          <div className="col-2 p-0 explore-featured-image">
                            <a
                              className={cx('card-img-left', {
                                'card-has-img': !!shuffledItem.vars
                                  ?.featuredImageUrl
                              })}
                              href={shuffledItem.url}
                            >
                              {shuffledItem.vars?.featuredImageUrl && (
                                <img
                                  src={shuffledItem.vars?.featuredImageUrl}
                                  alt={shuffledItem.vars?.featuredImageAlt}
                                  loading="lazy"
                                />
                              )}
                            </a>
                          </div>
                        )}

                        <div className="card-body col">
                          {shuffledItem.title && (
                            <a className="card-title" href={shuffledItem.url}>
                              {shuffledItem.title}
                            </a>
                          )}

                          {shuffledItem.content && (
                            <p className="card-text">{shuffledItem.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                )}
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

export default Post;
