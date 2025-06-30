import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectPost from "./ProjectPost";

const Portfolio = ({ title, filter, fpvRef, sdRef }) => {
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
      <div ref={filter === "FPV" ? fpvRef : filter === "SD" ? sdRef : null} className="portfolio-container bg-[#D4D3DC] py-10 px-6">
        {/* Styled Title */}
        <h2 className="text-4xl font-extrabold text-center text-[#E1A624] border-b-4 border-[#384454] inline-block pb-2 mb-10">
          {title}
        </h2>

        {/* Project Posts */}
        <section className="portfolio grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ProjectPost key={post.id} post={post} />
          ))}
        </section>
      </div>


  );
};

export default Portfolio;
