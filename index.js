// Add your code here
function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    const configObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObject)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unauthorized Access');
            }
            return response.json();
        })
        .then(data => {
            const id = data.id;
            const idElement = document.createElement('p');
            idElement.textContent = id;
            document.body.appendChild(idElement);
            return data;
        })
        .catch(error => {
            const errorElement = document.createElement('p');
            errorElement.textContent = error.message;
            document.body.appendChild(errorElement);
            return error;
        });
}