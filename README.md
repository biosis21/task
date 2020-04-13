# Task

## Demo

https://biosis21.github.io/task/

## Repository

https://github.com/biosis21/task

## How to use `EmailsInput` component

### How install the component

```
    const emailsInputNode = EmailsInput();

    document.getElementById('root').appendChild(emailsFormNode);
```

### How subscribe to emails list

```
    const emailsInputNode = EmailsInput();

    emailsInputNode.addEventListener('emails-change', (e) => {
        // The list of emails available in e.detail
    }, false);
```
### How to retrieve list of all emails

```
    const emailsInputNode = EmailsInput();
    emailsInputNode.getAllEmails();
```

### How to add a new email

```
    const emailsInputNode = EmailsInput();
    emailsInputNode.addEmail('test@tets.com');
```

### How to replace all emails with new

```
    const emailsInputNode = EmailsInput();
    emailsInputNode.replaceAllEmails([
        'test@test.com', 
        'test1@test.com',
        'test2@test.com'
    ]);
```