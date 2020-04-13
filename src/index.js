/**
 * Initialization
 */

((w) => {

    const emailsInputNode = EmailsInput();
    emailsInputNode.addEventListener('emails-change', (e) => {
        // The list of emails available in e.detail
        console.log(1)
    }, false);

    const emailsInputNode2 = EmailsInput();
    emailsInputNode2.addEventListener('emails-change', (e) => {
        // The list of emails available in e.detail
        console.log(2)
    }, false);

    // Create EmailForm component with all nested components
    const emailsFormNode = EmailsForm({
        children: [
            Header({
                children: [
                    HeaderTitle({ text: 'Share <span>Board name</span> with others' })
                ]
            }),
            Content({
                children: [
                    emailsInputNode,
                    emailsInputNode2
                ]
            }),
            Footer({
                children:[
                    Button({ 
                        text: 'Add email', 
                        onClick: () => {
                            emailsInputNode.addEmail(EmailService.generateEmail());
                        }
                    }),
                    Button({ 
                        text: 'Get emails count', 
                        onClick: () => {
                            const emails = emailsInputNode.getAllEmails().filter((email) => email.isValid);
                            alert(emails.length);
                        }
                    })
                ]
            })
        ]
    });

    // Add EmailForm node to the root element
    document.getElementById('root').appendChild(emailsFormNode);

})(window);
