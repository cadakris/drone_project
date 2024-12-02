import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectPost from './ProjectPost';

const Portfolio = () => {
    const [posts, setPosts] = useState ([]);
    const [error, setError] = useState (null);
    

    useEffect(() => {
         const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/drone/api/project-posts/');
                setPosts(response.data);
                setError(null);
            } catch(err) {
                setError('Failed to fetch posts. Please try again later.');
                console.error('Error fetching posts:', err);
            }
         }

         fetchPosts();
    },[])

    if (error) return <div> Error: {error} </div>

    return (
        <div>
            <section className="portfolio">
                {posts.map((post) => (
                <ProjectPost key={post.id} post={post} />
                ))}
            </section>
        </div>
    )
};




export default Portfolio;