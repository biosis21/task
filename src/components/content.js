/**
 * @typedef {HTMLDivElement} Content
 */

((w) => {
    
    const Content = ({ children }) => {
        const node = document.createElement('div');
        node.className = 'content';

        node.append(...(children || []));

        return node;
    };

    w.Content = Content;

})(window);