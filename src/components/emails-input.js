/**
 * @typedef {HTMLDivElement} EmailsInput
 */

((w) => {

    const createData = (node, data) => {
        // Create custom event
        const event = new CustomEvent('Event', { detail: data });
        event.initEvent('emails-change', true, true);

        Object.defineProperty(data, "push", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function (...args) {
                for (var i = 0, n = this.length, l = args.length; i < l; i++, n++) {          
                    this[n] = args[i];
                }
                node.dispatchEvent(event);
                return n;
            }
        });

        /**
         * clean array and add new items
         * @param {array} newData 
         */
        const updateData = (newData) => {
            data.length = 0;
            data.push(...newData)
        };

        return [data, updateData];
    }

    const EmailsInput = () => { 
        const node = document.createElement('div');
        node.className = 'emails-input';

        let [emails, updateEmails] = createData(node, []);

        /**
         * Remove email from the list
         * @param {Email} emailNode 
         */
        const onRemove = (emailNode) => {
            updateEmails(emails.filter((email) => email.id !== emailNode.dataset.id));
            node.removeChild(emailNode);
        }

        /**
         * Parse and validate input string
         * @param {string} str 
         */
        const onAdd = (str) => {
            const newEmails = EmailService.parseAndValidateEmails(str);
            updateEmails([...emails, ...newEmails]);

            node.lastChild.before(...newEmails.map((email) => Email({ ...email, onRemove })));
        }

        /**
         * Remove last email in the list
         */
        const onRemovePrev = () => {
            if (node.lastChild.previousSibling) {
                updateEmails(emails.filter((email) => email.id !== node.lastChild.previousSibling.dataset.id));
                node.removeChild(node.lastChild.previousSibling);   
            }
        }

        const getAllEmails = () => emails;

        /**
         * Remove all 'Email' nodes and update listf of emails
         */
        const removeAllEmails = () => {
            let i = 0;
            while (i < node.childNodes.length) {
                if (node.childNodes[i].dataset.component === 'Email') {
                    node.removeChild(node.childNodes[i]);
                } else {
                    i++;
                }
            }
            updateEmails([]);
        }

        /**
         * Replace all available emails to the new
         * @param {array|*} data 
         */
        const replaceAllEmails = (data) => {
            if (!Array.isArray(data)){
                return;
            }

            removeAllEmails();
            onAdd(data.join(','));
        }

        node.onclick = () => {
            node.lastChild.focus();
        }

        node.append(EmailInput({ onAdd, onRemovePrev }));

        /**
         * Get list of valid and invalid emails
         * @public
         * @example
         *  [
         *     { value: 'test@test.com', isValid: true },
         *     { value: 'test', isValid: false }
         *  ]
         */
        node.getAllEmails = getAllEmails;

        /**
         * Replace all emails
         * @public
         */
        node.replaceAllEmails = replaceAllEmails;

        /**
         * Add a new email
         * @public
         */
        node.addEmail = onAdd;
        
        return node;
    };

    w.EmailsInput = EmailsInput;

})(window);