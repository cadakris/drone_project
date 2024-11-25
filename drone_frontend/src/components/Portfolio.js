import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
    const [post, setPosts] = useState ([]);
    const [error, setError] = useState ([]);

    useEffect(() => {
         const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/drone/api/project-posts/');
                setPosts(response.data);
            } catch(err) {
                setError(err);
            }
         }

         fetchPosts();
    },[])

    if (error) return <div> Error: {error.message} </div>

    return (
        <section className="portfolio">
        {projects.map(project => (
          <ProjectPost key={project.id} {...project} />
        ))}
      </section>
    )

};




export default Portfolio;