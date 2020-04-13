((w) => {

    const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const generateRandomString = () => {
        return Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    }

    const generateEmail = () => {
        return generateRandomString() + '@' + generateRandomString() + '.com';
    }

    const parseEmails = (str) => {
        if (!str) {
            return [];
        }
        const spaceRegEx = /\s/g;
        const delimiter = ',';

        return str.split(delimiter).map((item) => item.replace(spaceRegEx, ''));
    }

    const validateEmails = (emails) => {
        return emails.map((email) => ({
            id: generateRandomString(),
            value: email,
            isValid: EMAIL_REGEXP.test(email)
        }))
    }

    const parseAndValidateEmails = (str) => {
        return validateEmails(parseEmails(str));
    }

    w.EmailService = {
        parseEmails,
        validateEmails,
        generateEmail,
        parseAndValidateEmails
    };

})(window);