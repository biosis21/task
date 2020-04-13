/**
 * @typedef {HTMLDivElement} RemoveButton
 */

((w) => {

    const RemoveButton = () => {
        const node = document.createElement('div');
        node.className = 'remove-button';
        return node;
    }

    w.RemoveButton = RemoveButton;

})(window);