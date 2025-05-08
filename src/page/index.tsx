import '../resources/styles/common.css';
import './index.css';

import React from 'react';
import * as PRSS from 'prss';
import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';
import Hero from '../resources/components/Hero';

const Post = data => {
  PRSS.init(data);
  (window as any).PRSS = PRSS;

  const { heroTitle, heroMessage, heroImageUrl } = PRSS.getProp(
    'vars'
  ) as IVars;

  const { content, title: postTitle } = PRSS.getProp('item');
  const sidebarHtml = PRSS.getProp('sidebarHtml');

  return (
    <Page className="page-post">
      <Header />
      {(heroTitle || postTitle) && (
        <Hero imageUrl={heroImageUrl} containerChildClassName="mt-5">
          <h1 className="hero-title">{heroTitle || postTitle}</h1>
          {heroMessage && (
            <div
              className="hero-message mt-2"
              dangerouslySetInnerHTML={{
                __html: heroMessage
              }}
            />
          )}
        </Hero>
      )}
      <main>
        <div className="container main-container">
          <div className="row">
            <div className="col">
              <div className="content">
                <section className="post-content mb-3 pb-5">
                  <div
                    className="post-inner-content"
                    dangerouslySetInnerHTML={{
                      __html: content
                    }}
                  ></div>
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
