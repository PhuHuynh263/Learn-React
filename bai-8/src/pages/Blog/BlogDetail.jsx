import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GoBack from "../../Components/GoBack";
function BlogDetail() {
    const params = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
    }, []);

    console.log(posts)

    return (<>
        <GoBack></GoBack>
        <h2>Title : {posts.title}</h2>
        <p>{posts.body}</p>
    </>)
}
export default BlogDetail;