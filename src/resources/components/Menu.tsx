import React, { FunctionComponent, ReactNode, Fragment } from 'react';
import { getProp, getItem, hasItem } from 'prss';
import cx from 'classnames';
import '../styles/Menu.scss';

interface IProps {
    name: string;
    renderItem?: any;
    renderItemLabel?: any;
    ulClassName?: string;
    mode?: string;
    style?: any;
    prependedComponent?: ReactNode;
}

const Menu: FunctionComponent<IProps> = ({
    name,
    renderItem,
    renderItemLabel,
    ulClassName = '',
    mode,
    style = {},
    prependedComponent = null
}) => {
    const menu = getProp(`site.menus.${name}`);

    if (!menu) {
        return null;
    }

    const getFlattenedMenuNodes = nodes => {
        const items = [];
        const parseNode = node => {
            if (node) {
                items.push(node);
                if (node.children) {
                    node.children.forEach(parseNode);
                }
            }
        };
        nodes.forEach(parseNode);
        return items;
    };

    const flattenedMenuNodes = getFlattenedMenuNodes(menu);

    const parseMenuNode = node => {
        const menuNodeParser =
            mode === 'prev-next'
                ? prevNextRenderItem
                : renderItem || defaultRenderItem;
        return menuNodeParser(node, parseMenuNode);
    };

    const prevNextRenderItem = (node, parseMenuNode) => {
        const activeItemIndex = flattenedMenuNodes.findIndex(
            curNode => curNode.key === getProp('item').uuid
        );
        const prevItem = flattenedMenuNodes[activeItemIndex - 1]
            ? flattenedMenuNodes[activeItemIndex - 1]
            : null;
        const nextItem = flattenedMenuNodes[activeItemIndex + 1]
            ? flattenedMenuNodes[activeItemIndex + 1]
            : null;

        const isPrev = prevItem ? prevItem.key === node.key : false;
        const isNext = nextItem ? nextItem.key === node.key : false;

        if (!isPrev && !isNext) {
            return null;
        }

        const post = getItem(node.key);

        return (
            <li
                className={cx({
                    'menu-item-prev': isPrev,
                    'menu-item-next': isNext
                })}
                title={node.title || post.title}
            >
                {renderItemLabel ? (
                    renderItemLabel(post)
                ) : (
                    <a href={post.url}>
                        <span className="menu-item-title">
                            {isPrev ? 'Previous' : 'Next'}
                        </span>
                        <span className="menu-item-label">
                            {node.title || post.title}
                        </span>
                    </a>
                )}
            </li>
        );
    };

    const isNodeExpanded = node => {
        const activeItemId = getProp('item').uuid;
        return node.key === activeItemId || hasItem(activeItemId, node);
    };

    const defaultRenderItem = (node, parseMenuNode) => {
        const post = getItem(node.key);
        return (
            <li
                title={node.title || post.title}
                className={cx({
                    active: node.key === getProp('item').uuid,
                    expanded: isNodeExpanded(node)
                })}
            >
                {renderItemLabel ? (
                    renderItemLabel(post)
                ) : (
                    <a href={post.url}>{node.title || post.title}</a>
                )}
                {node.children && !!node.children.length && (
                    <ul>{node.children.map(parseMenuNode)}</ul>
                )}
            </li>
        );
    };

    const formattedMenu =
        mode === 'prev-next'
            ? flattenedMenuNodes.map(parseMenuNode)
            : menu.map(parseMenuNode);

    const hasItems = formattedMenu.filter(elem => !!elem);

    if (!hasItems.length) {
        return null;
    }

    return (
        <Fragment>
            {prependedComponent}
            <ul
                className={cx('page-menu', ulClassName, {
                    [`mode-${mode}`]: mode
                })}
                style={style}
            >
                {formattedMenu}
            </ul>
        </Fragment>
    );
};

export default Menu;
