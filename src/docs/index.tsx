import React from 'react';
import * as PRSS from "@prss/ui";
import cx from 'classnames';

import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';
import Hero from '../resources/components/Hero';
import Aside from '../resources/components/Aside';
import { Menu } from '@prss/ui';
import { isset } from '../resources/services/utils';

import { ContentRenderer } from "@prss/ui";

const Docs = data => {
  PRSS.init(data);
  (window as any).PRSS = PRSS;

  const {
    heroTitle,
    heroMessage,
    heroImageUrl,
    featuredImageUrl,
    sidebarMenu,
    footerCta,
    warningHtml,
    contentFooterHtml,
    docsImageUrl
  } = PRSS.getProp('vars') as IVars;

  const { content, uuid: postId, title: postTitle } = PRSS.getProp('item');

  const sidebarHtml = PRSS.getProp('sidebarHtml');

  const items = PRSS.getItems('post').filter(item => item.uuid !== postId);

  // Helper function to check if a node should be active (includes parent activation)
  const isNodeActive = (node: any) => {
    // Check if this node is the active item
    if (node.key === postId) {
      return true;
    }
    
    // Check if this node contains the active item in its children
    if (PRSS.hasItem(postId, node)) {
      return true;
    }
    
    return false;
  };

  // Custom menu item renderer for documentation sidebar
  const renderDocMenuItem = (node: any) => {
    const post = PRSS.getItem(node.key);
    const nodeChildren = node?.children || [];
    const hasChildren = nodeChildren.length > 0;
    const isActive = isNodeActive(node);
    
    return (
      <li key={node.key} className={cx({ "active": isActive })}>
        <a 
          href={post?.url}
          className={cx(
            "block py-2 px-3 rounded-md transition-colors",
            isActive 
              ? "text-primary font-medium" 
              : "hover:bg-gray-100"
          )}
        >
          {node.title || post?.title}
        </a>
        
        {hasChildren && (
          <ul className="ml-0 pl-0 bg-muted">
            {nodeChildren.map(childNode => {
              const childPost = PRSS.getItem(childNode.key);
              const isChildActive = childNode.key === postId;
              
              return (
                <li key={childNode.key} className={cx("", isChildActive ? "active" : "")}>
                  <a 
                    href={childPost?.url}
                    className={cx(
                      "block py-1.5 px-3 rounded-md transition-colors",
                      isChildActive 
                        ? "text-primary font-medium" 
                        : "hover:bg-gray-100 text-gray-600"
                    )}
                  >
                    {childNode.title || childPost?.title}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  };

  // Renderer for prev/next navigation
  const renderPrevNextItem = (node: any, index: number, isFirst: boolean, isLast: boolean) => {
    const isActive = node.key === postId;
    
    if (!isActive) return null;
    
    const prevNode = !isFirst ? items[index - 1] : null;
    const nextNode = !isLast ? items[index + 1] : null;
    
    return (
      <div className="d-flex justify-content-between w-100">
        {prevNode && (
          <a href={prevNode.url} className="d-flex align-items-center text-primary">
            <i className="fa fa-chevron-left me-2"></i>
            <span>Previous</span>
          </a>
        )}
        
        {nextNode && (
          <a href={nextNode.url} className="d-flex align-items-center text-primary ms-auto">
            <span>Next</span>
            <i className="fa fa-chevron-right ms-2"></i>
          </a>
        )}
      </div>
    );
  };

  return (
    <Page className="page-docs">
      <Header />
      {postTitle && <Hero imageUrl={heroImageUrl} />}
      <main>
        <div className="container main-container">
          {featuredImageUrl && (
            <div
              className="featured-image"
              style={{
                backgroundImage: `url(${featuredImageUrl})`
              }}
            />
          )}

          <div className="post-title-container">
            <div className="row">
              <div className="col-12 col-lg d-lg-flex flex-column justify-content-center">
                {docsImageUrl ? (
                  <img 
                    src={docsImageUrl} 
                    alt={heroTitle || postTitle}
                    className="docs-image docs-header-image mb-0"
                    style={{maxHeight: '96px', width: 'auto'}}
                  />
                ) : (
                  <h1 className="mb-0">{heroTitle || postTitle}</h1>
                )}
                {heroMessage && (
                  <div
                    className="docs-hero-message mt-2"
                    dangerouslySetInnerHTML={{
                      __html: heroMessage
                    }}
                  />
                )}
              </div>
              {PRSS.getProp('vars')?.asideHtml && (
                <div className="mt-4 mt-lg-0">
                  <Aside name="asideHtml" />
                </div>
              )}
            </div>
          </div>

          <div className="row m-0">
            {isset(sidebarMenu) && (
              <div className="col docs-sidebar pt-2">
                {/* Mobile Menu Toggle */}
                <div className="d-lg-none mb-3">
                  <button 
                    className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-between"
                    data-mobile-menu-toggle="docs-sidebar"
                    data-mobile-menu-open="false"
                  >
                    <span>Documentation Menu</span>
                    <i className="mobile-menu-chevron fa fa-chevron-down"></i>
                  </button>
                </div>
                
                {/* Sidebar Navigation */}
                <div 
                  className="docs-sidebar-inner-container d-lg-block"
                  data-mobile-menu="docs-sidebar"
                >
                  <Menu
                    name={sidebarMenu}
                    ulClassName="sidebar-menu"
                    renderItem={renderDocMenuItem}
                  />
                </div>
              </div>
            )}

            <div className={`col ${isset(sidebarMenu) ? 'col-lg-9' : ''}`}>
              <div className="content">
                <div className="content-top">
                  <section className="post-content mb-3">
                    {warningHtml ? (
                      <div
                        className="alert alert-warning alert-dismissible fade show"
                        role="alert"
                        dangerouslySetInnerHTML={{
                          __html: warningHtml
                        }}
                      />
                    ) : null}

                    <ContentRenderer 
                      content={content}
                      className="post-inner-content mb-5"
                    />
                    
                    {isset(footerCta) ? (
                      <div
                        className="footer-cta"
                        dangerouslySetInnerHTML={{
                          __html: footerCta
                        }}
                      />
                    ) : null}
                  </section>

                  {isset(sidebarMenu) && (
                    <section>
                      <Menu
                        name={sidebarMenu}
                        ulClassName="docs-footer-menu d-flex justify-content-between"
                        mode="prev-next"
                        renderItem={renderPrevNextItem}
                      />
                    </section>
                  )}
                </div>

                {isset(contentFooterHtml) && (
                  <section className="container content-footer">
                    <Aside name="contentFooterHtml" className="row" />
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
