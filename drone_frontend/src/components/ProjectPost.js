import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectPosts = () => {
    const [post, setPosts] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const response = await axios.get('http://localhost:8000/drone/api/project-posts/');
                setPosts(response.data);
            } catch (err) {
                setError(err);
            }
        };

        fetchPosts();
    }, []);

    if (error) return <div>Error: {error.message} </div>

    console.log(error)

    return(
        <div>
        <h1>Project Posts</h1>
        {post.length > 0 ? (
            <ul>
                {post.map((post) => (
                    <li key={post.id}>
                        <h2>{post.project_title}</h2>
                        <p>{post.description}</p>
                        {/* Add more fields here as needed */}
                    </li>
                ))}
            </ul>
        ) : (
            <p>No posts available</p>
        )}
    </div>
    
    
    )

};




export default ProjectPosts;