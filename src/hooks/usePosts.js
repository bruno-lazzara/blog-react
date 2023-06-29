import { useEffect, useState } from "react";
import postService from "../services/PostService";

export default function usePosts() {
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

    return posts;
}