export default function HeroBanner() {
  return (
    <div className="flex h-screen w-full items-center justify-center pl-10 pr-10">
      <div className="mr-5">
        <h1 className="mb-2 text-4xl font-bold text-teal-600">Hey, I am Nick Don!</h1>
        <p className="primary-text mr-4">
          Welcome! I'm a full-stack developer based in Melbourne, Australia. I am driven by the goal
          of developing high-quality code that leads to high-quality products.
        </p>
        <p className="primary-text mt-3">
          I am currently looking for full-time full-stack/back-end/front-end roles within Australia.
        </p>
      </div>
      <img className="w-2/5 rounded-full" src="/assets/profile.jpg" alt="Nick Don" />
    </div>
  );
}
