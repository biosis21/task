/**
 * @typedef {HTMLDivElement} Email
 */

((w) => {
    
    const EmailsForm = ({ children }) => {
        const node = document.createElement('div');
        node.className = 'emails-form';

        node.append(...children);

        return node;
    };

    w.EmailsForm = EmailsForm;

})(window);