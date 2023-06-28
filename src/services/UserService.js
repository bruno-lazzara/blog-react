exports.login = async (username, password) => {
    return await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });
};

exports.register = async (username, password) => {
    return await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
    });
};

exports.checkCredentials = async () => {
    return await fetch('http://localhost:4000/profile', {
        credentials: 'include'
      });
};

exports.logout = async () => {
    return await fetch('http://localhost:4000/logout', {
        credentials: 'include',
        method: 'POST'
      });
};
