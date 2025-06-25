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
    sidebarAsideHtml,
    blogPosts,
    currentPage,
    totalPages
  } = PRSS.getProp('vars') as any;

  const { rootPath } = data;
  const { content, title } = PRSS.getProp('item');
  const sidebarHtml = PRSS.getProp('sidebarHtml');
  const items = PRSS.getItems('post', true, blogPosts);
  const adjustedRootPath = currentPage === 1 ? rootPath : `../${rootPath}`;

  return (
    <Page className="page-blog">
      <Header />
      {(heroTitle || title) && (
        <Hero imageUrl={heroImageUrl} containerChildClassName="mt-5">
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

                <section className="mb-3 blog-items">
                  <div>
                    <Aside name="inlineAsideHtml" />
                    {items.map(post => {
                      return (
                        <div className="card d-flex flex-row">
                          <a
                            className={cx('card-img-left', {
                              'card-has-img': !!post?.vars?.featuredImageUrl
                            })}
                            href={post?.url}
                          >
                            {post?.vars?.featuredImageUrl && (
                              <img
                                src={post?.vars?.featuredImageUrl}
                                alt={post?.vars?.featuredImageAlt}
                                loading="lazy"
                              />
                            )}
                          </a>

                          <div className="card-body col">
                            {post?.title && (
                              <a className="card-title" href={post?.url}>
                                {post?.title}
                              </a>
                            )}

                            {post?.content && (
                              <p className="card-text">{post?.content}</p>
                            )}

                            {post?.createdAt && (
                              <p className="card-text">
                                <small
                                  className="text-muted"
                                  title={PRSS.formattedDate(post?.createdAt)}
                                >
                                  Posted {PRSS.formattedDate(post?.createdAt)}
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
          <div className="row">
            <div className="col">
              <nav aria-label="Page navigation">
                <ul className="pagination flex justify-content-center mt-2 mb-5">
                  {currentPage > 1 && (
                    <li className="page-item">
                      <a
                        className="page-link"
                        href={`${adjustedRootPath}blog/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
                      >
                        Previous
                      </a>
                    </li>
                  )}
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNumber = i + 1;
                    const isActive = currentPage === pageNumber;
                    return (
                      <li key={i} className="page-item">
                        <a
                          href={`${pageNumber === 1 ? `${adjustedRootPath}blog/` : `${adjustedRootPath}blog/${pageNumber}/`}`}
                          className={cx('page-link', { active: isActive })}
                        >
                          {pageNumber}
                        </a>
                      </li>
                    );
                  })}
                  {currentPage < totalPages && (
                    <li className="page-item">
                      <a
                        className="page-link"
                        href={`${adjustedRootPath}blog/${currentPage + 1}`}
                      >
                        Next
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
};

export default Blog;
