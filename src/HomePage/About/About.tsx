import ImageCarousel from './ImageCarousel/ImageCarousel';

export default function About() {
  return (
    <div className="primary-text flex h-screen w-full items-center justify-center pl-10 pr-10">
      <div className="flex">
        <div className="m-auto">
          <h1 className="mb-8 text-center text-4xl font-medium text-teal-600">About Me</h1>
          <p className="mr-2">
            I have always had a love for computers and learning how they work. This passion took
            some time to eventuate, but eventually led me to a career in software development.
          </p>
          <p className="mt-6">
            While my journey is not the same as the standard computer science student, I am glad
            things have panned out this way. The time I spent in commerce and banking has given me a
            unique perspective on software development and the tech industry as a whole. I have also
            gained valuable skills in communication, teamwork, and problem-solving that I believe
            are essential for any developer.
          </p>
          <p className="mt-6">
            Now, as a highly motivated developer with a passion for continuous learning and growth,
            I am driven by the goal of developing high-quality code that leads to high-quality
            products. My current work has led me to specialise in frontend development using
            TypeScript and React, as well as backend development with Elixir. I have also continued
            to learn a multitude of other important languages as well as concepts in my own time. I
            am eager to leverage my experience and passion for software to innovate and build
            products that make a positive impact on the world.
          </p>
          <div className="mt-6 flex items-center">
            <div className="mr-6">
              <h2 className="mb-6 text-center text-2xl font-medium text-indigo-900">Interests</h2>
              <p>
                Outside of coding, I enjoy playing and watching sports, reading, and spending
                quality time with my friends and family. I also love going camping, always looking
                for new places to explore. Over the last 2 years, I built a campervan with the help
                of my partner, which we use to explore various places.
              </p>
            </div>
            <div className="flex w-4/6 flex-col items-center">
              <ImageCarousel />
              <p>Scroll Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
