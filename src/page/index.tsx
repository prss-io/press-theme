import '../resources/styles/common.scss';
import './index.scss';

import React from 'react';
import { init, getProp } from 'prss';
import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';
import Hero from '../resources/components/Hero';

const Post = data => {
    init(data);

    const { heroMessage, heroImageUrl } = getProp('vars') as IVars;

    const { content, title: postTitle } = getProp('item');
    const sidebarHtml = getProp('sidebarHtml');

    return (
        <Page className="page-post">
            <Header />
            {postTitle && (
                <Hero imageUrl={heroImageUrl}>
                    <h1 className="hero-title">{postTitle}</h1>
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
                                        className="post-content mb-3 pb-5"
                                        dangerouslySetInnerHTML={{
                                            __html: content
                                        }}
                                    />
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

export default Post;
