export default function HeroBanner() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-10">
      <div>
        <h1 className="mb-2 text-4xl font-bold">Hey I am Nick Don</h1>
        <p className="mr-2">
          Welcome! I'm a full-stack developer based in Melbourne, Australia. I am driven by the goal
          of developing high-quality code that leads to high-quality products.
        </p>
        <p className="mt-3">
          I am currently looking for full time full-stack/back-end/front-end roles within Australia
        </p>
      </div>
      <img className="rounded-full" src="/assets/profile.webp" alt="Nick Don" />
    </div>
  );
}
