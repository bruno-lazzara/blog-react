import Post from "../components/Post";
import usePosts from "../hooks/usePosts";

export default function IndexPage() {
    const posts = usePosts();
    
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post key={post._id} {...post} />
            ))}
        </>
    );
}
