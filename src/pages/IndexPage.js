import { useEffect, useState } from "react";
import Post from "../Post";
import postService from "../services/PostService";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPosts()
            .then(response => {
                response.json().then(posts => {
                    setPosts(posts);
                });
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </>
    );
}
