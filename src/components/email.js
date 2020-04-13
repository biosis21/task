/**
 * @typedef {HTMLDivElement} Email
 */

((w) => {

    const Email = ({ value, id, isValid, onRemove }) => {
        const node = document.createElement('div');
        node.textContent = value;
        node.className = 'email'
        node.setAttribute('data-component', 'Email');
        node.setAttribute('data-id', id);
        node.classList.toggle('email--invalid', !isValid);

        const removeButtonNode = RemoveButton();
        removeButtonNode.onclick = () => {
            onRemove(node);
        }

        node.appendChild(removeButtonNode);

        return node;
    };

    w.Email = Email;

})(window);