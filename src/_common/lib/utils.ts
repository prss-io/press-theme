import classnames from "classnames";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cx = classnames;

export const isset = str => !!(str && str.trim().length);
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getFlattenedMenuNodes = nodes => {
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
