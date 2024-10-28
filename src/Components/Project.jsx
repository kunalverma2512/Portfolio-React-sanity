import { useEffect, useState } from "react";
import sanityClient from "../client";

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen py-10 px-4 sm:px-10 md:px-20">
      <section className="container mx-auto">
        <h1 className="text-3xl sm:text-5xl flex justify-center cursive">
          My Projects
        </h1>
        <h2 className="text-base sm:text-lg text-gray-600 flex justify-center mb-8 sm:mb-12 mt-6 sm:mt-8">
          Welcome to the Projects Page
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article key={index} className="relative rounded-lg shadow-lg bg-white p-8 sm:p-12">
                <h3 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs sm:text-sm space-y-2 sm:space-x-4">
                  <span className="block sm:inline">
                    <strong className="font-bold">Finished on:</strong>{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span className="block sm:inline">
                    <strong className="font-bold">Company:</strong> {project.place}
                  </span>
                  <span className="block sm:inline">
                    <strong className="font-bold">Type:</strong> {project.projectType}
                  </span>
                </div>
                <p className="my-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-red-500 font-bold hover:underline hover:text-red-400 text-lg sm:text-xl"
                >
                  View The Project{" "}
                  <span role="img" aria-label="right pointer">
                    👉
                  </span>
                </a>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
