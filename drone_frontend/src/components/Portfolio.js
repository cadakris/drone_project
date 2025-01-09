import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectPost from "./ProjectPost";

const Portfolio = ({ title, filter }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/drone/api/project-posts/");
        const allPosts = response.data;

        // Filter posts by project_type
        const filteredPosts = allPosts.filter(
          (post) => post.project_type === filter
        );

        setPosts(filteredPosts);
        setError(null);
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, [filter]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="portfolio-container py-10 px-6">
      {/* Styled Title */}
      <h2 className="text-4xl font-extrabold text-center text-gray-800 border-b-4 border-indigo-500 inline-block pb-2 mb-10">
        {title}
      </h2>

      {/* Project Posts */}
      <section className="portfolio grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <ProjectPost key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
