import { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";

const Post = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
          }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen py-10 sm:py-12 px-4 sm:px-10 md:px-20">
      <section className="container mx-auto">
        <h1 className="text-3xl sm:text-5xl flex justify-center cursive">
          Blog Posts Page
        </h1>
        <h2 className="text-base sm:text-lg text-gray-600 flex justify-center mt-6 sm:mt-10 mb-8 sm:mb-12">
          Welcome to my page of blog posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {postData &&
            postData.map((post, index) => (
              <article key={index}>
                <Link to={`/post/${post.slug.current}`}>
                  <span className="block h-60 sm:h-64 relative rounded shadow-lg leading-snug bg-white border border-l-4 border-green-400 overflow-hidden">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full object-cover rounded-r"
                    />
                    <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-2">
                      <h3 className="text-white text-sm sm:text-lg font-bold">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Post;
