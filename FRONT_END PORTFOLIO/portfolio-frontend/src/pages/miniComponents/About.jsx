const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dsadi1hf3/image/upload/v1731324095/IMG_20231023_102327_wojzra.jpg"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              My name is Wasim Akram.I am currently pursuing a Bachelor of
              Science in Information Technology (BSIT) from the University of
              Sargodha and expect to graduate in 2026. I work as a full stack
              web developer and freelancer. My hobbies include exploring new
              tech, solving coding problems, and occasionally playing video
              games.
            </p>
            <p>
              I have a strong passion for technology, but I also enjoy movies,
              series, video games, and cooking. I take pride in meeting
              deadlines and delivering quality work on time.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          I am dedicated and persistent in delivering work on time. I embrace
          challenges with determination and have the resilience to tackle them
          for as long as needed.
        </p>
      </div>
    </div>
  );
};

export default About;
