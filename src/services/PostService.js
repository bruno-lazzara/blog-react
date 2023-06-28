exports.getPosts = async () => {
    return await fetch('http://localhost:4000/posts');
};

exports.getPostById = async (id) => {
    return await fetch(`http://localhost:4000/post/${id}`);
}

exports.create = async (data) => {
    return await fetch('http://localhost:4000/post', {
        method: 'POST',
        body: data,
        credentials: 'include'
    });
};

exports.update = async (data) => {
    return await fetch('http://localhost:4000/post', {
        method: 'PUT',
        body: data,
        credentials: 'include'
    });
};
