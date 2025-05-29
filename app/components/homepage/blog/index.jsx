"use client";

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
        const data = await res.json();
        const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
        setBlogs(filtered);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
      }
    };

    getData();
  }, []);

  return (
    <section id="blog" className="my-12 lg:my-24">
      <h2 className="text-xl text-white mb-4">Articles</h2>
      {blogs.length === 0 ? (
        <p className="text-gray-400">Aucun article disponible.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#101123] rounded shadow hover:scale-[1.02] transition"
            >
              <img
                src={article.cover_image}
                alt={article.title}
                className="rounded mb-2 max-h-[200px] object-cover w-full"
              />
              <h3 className="text-white font-semibold">{article.title}</h3>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
