export default function ImageCarousel() {
  return (
    <div className="carousel carousel-vertical h-96 w-3/4 rounded-3xl">
      <div className="carousel-item">
        <img src="assets/van1.png" className="h-full w-full" />
      </div>
      <div className="carousel-item">
        <img src="assets/van2.jpg" className="h-full w-full" />
      </div>
      <div className="carousel-item">
        <img src="assets/van3.jpg" className="h-full w-full" />
      </div>
      <div className="carousel-item">
        <img src="assets/van4.jpg" className="h-full w-full" />
      </div>
      <div className="carousel-item">
        <img src="assets/van5.jpg" className="h-full w-full" />
      </div>
      <div className="carousel-item">
        <img src="assets/van6.jpeg" className="h-full w-full" />
      </div>
    </div>
  );
}
