const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://media.istockphoto.com/id/1138329703/photo/spring-blossom.webp?a=1&b=1&s=612x612&w=0&k=20&c=pzWJmSrcDxXCZ2AkDwDi1Cjqx-Fb_TrRC53GFgUGckw="
        alt="Green plant wall background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      
      {/* Content Section */}
      <section className="relative flex justify-center items-center min-h-screen p-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-green-100 font-bold cursive leading-none lg:leading-snug ">
          Aloha. I&apos;m Kunal.
        </h1>
      </section>
    </main>
  );
};

export default Home;
