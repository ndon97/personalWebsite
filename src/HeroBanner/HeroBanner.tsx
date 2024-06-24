export default function HeroBanner() {
  return (
    <div className="justify-cente flex h-screen w-full items-center p-10">
      <div>
        <h1 className="mb-2 text-4xl font-bold">Hey I am Nick Don</h1>
        <p className="mr-2">
          Welcome! I'm a full-stack developer based in Melbourne, Australia. I am driven by the goal
          of developing high-quality code that leads to high-quality products. After transitioning
          from commerce to software development due to my love for working with computers and
          coding.
        </p>
      </div>
      <img className="rounded-full" src="public/static/images/profile.webp" alt="Nick Don" />
    </div>
  );
}
