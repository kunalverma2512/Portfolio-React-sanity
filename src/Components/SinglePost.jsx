import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [SinglePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current=="${slug}"]{
            title,
            _id,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!SinglePost) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-gray-200 min-h-screen p-6 sm:p-12">
      <article className="container mx-auto shadow-lg bg-green-100 rounded-lg max-w-4xl">
        <header className="relative">
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <div className="bg-white bg-opacity-75 rounded p-6 sm:p-12">
              <h1 className="cursive text-2xl sm:text-3xl lg:text-6xl mb-2 sm:mb-4 text-center">
                {SinglePost.title}
              </h1>
              <div className="flex justify-center items-center text-gray-800 mt-2 sm:mt-4">
                <img
                  src={urlFor(SinglePost.authorImage).url()}
                  alt={SinglePost.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <p className="cursive pl-2 text-lg sm:text-2xl">{SinglePost.name}</p>
              </div>
            </div>
          </div>
          <img
            src={SinglePost.mainImage.asset.url}
            alt={SinglePost.title}
            className="w-full object-cover rounded-t h-64 sm:h-96 lg:h-[400px]"
          />
        </header>
        <div className="px-6 sm:px-16 lg:px-48 py-8 sm:py-12 lg:py-20 prose prose-sm sm:prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={SinglePost.body}
            projectId="630r8ztp"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
