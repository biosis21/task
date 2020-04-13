/**
 * @typedef {HTMLInputElement} EmailInput
 */

((w) => {

    const KEY = {
        Enter: 13,
        Comma: 188,
        Backspace: 8
    }

    const EmailInput = ({ onAdd, onRemovePrev }) => {
        const node = document.createElement('input');
        node.setAttribute('type', 'text');
        node.setAttribute('placeholder', 'add more people...');
        node.className = 'email-input';

        node.onkeyup = (e) => {
            const value = e.target.value.replace(/\s/, '');

            if (value && e.keyCode === KEY.Enter) {
                onAdd(value);
                e.target.value = '';
                return;
            }

            if (value && e.keyCode === KEY.Comma) {
                console.log(value)
                onAdd(value.replace(',', ''));
                e.target.value = '';
                return;
            }

            if (!value && e.keyCode === KEY.Backspace) {
                onRemovePrev();
                return;
            }

        }

        node.onblur = (e) => {
            if (e.target.value === '') { 
                return;
            }

            onAdd(e.target.value);
            e.target.value = '';
        }

        node.onpaste = (e) => {
            setTimeout(() => {
                onAdd(e.target.value);
                e.target.value = '';
            }, 4);
        }

        return node;
    }

    w.EmailInput = EmailInput;

})(window);