import { useEffect, useState } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          bio,
          "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) {
    return <div>Loading...</div>;
  }

  return (
    <main className="relative min-h-screen">
      <img
        src="https://images.unsplash.com/photo-1483935254693-d16df5d8741a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Flower"
        className="absolute w-full h-full object-cover"
      />
      <div className="p-6 sm:p-10 lg:px-48 lg:py-20 mx-auto relative container">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-10 sm:p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 mb-6 lg:mb-0 mx-auto lg:mx-0"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center text-center lg:text-left">
            <h1 className="cursive text-3xl sm:text-4xl lg:text-6xl text-green-300 mb-4">
              Hey there. I&apos;m{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose prose-sm sm:prose lg:prose-xl text-white max-w-none">
              <BlockContent blocks={author.bio} projectId="630r8ztp" dataset="production" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
