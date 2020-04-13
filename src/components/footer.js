/**
 * @typedef {HTMLDivElement} Footer
 */

((w) => {
    
    const Footer = ({ children }) => {
        const node = document.createElement('div');
        node.className = 'footer';

        node.append(...children);

        return node;
    };

    w.Footer = Footer;

})(window);