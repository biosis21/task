/**
 * @typedef {HTMLDivElement} Header
 */

((w) => {
    
    const Header = ({ children }) => {
        const node = document.createElement('div');
        node.className = 'header';

        node.append(...(children || []));

        return node;
    };

    w.Header = Header;

})(window);