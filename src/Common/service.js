export function request( path, reqBody) {
    const token = JSON.parse(localStorage.getItem('session'))
    const auth = (token && token.token) ? token.token : null; 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'authorisation': `${auth}`  },
        body: JSON.stringify({params:reqBody})
    };
    const address = 'tudorevans.uk';
    const port = 80;
    return fetch(`http://${address}:${port}/${path}`, requestOptions)
        .then(response => {
            return response.text().then(text => {
            if (!response.ok) {
                if (response.status === 403) {
                    localStorage.clear();
                }
                return Promise.reject(response);
            } else if (JSON.parse(text)) {
                return {output:JSON.parse(text),status:response.status};
            } else {
                return response;
            }
        })
    }).catch((error) => { return error })
};