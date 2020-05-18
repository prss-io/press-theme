export const truncateStr = (str, len = 50) => {
    if (str.length > len) return str.substring(0, len) + '...';
    else return str;
};
