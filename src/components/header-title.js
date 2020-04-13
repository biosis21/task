/**
 * @typedef {HTMLParagraphElement} HeaderTitle
 */

((w) => {
    
    const HeaderTitle = ({ text }) => {
        const node = document.createElement('p');
        node.className = 'header-title';
        node.innerHTML = text;

        return node;
    };

    w.HeaderTitle = HeaderTitle;

})(window);