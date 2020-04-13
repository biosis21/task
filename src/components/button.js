/**
 * @typedef {HTMLButtonElement} Button
 */

((w) => {

    const Button = ({ text, onClick }) => {
        const node = document.createElement('button');
        node.className = 'button';
        node.textContent = text;
        node.setAttribute('type', 'button');

        node.onclick = onClick;

        return node;
    }

    w.Button = Button;

})(window);