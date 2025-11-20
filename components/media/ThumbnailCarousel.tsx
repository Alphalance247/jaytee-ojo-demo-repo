import { useRef } from "react";
import Image from "next/image";

interface ThumbnailCarouselProps {
  items: { src: string; type: "image" | "video" }[];
  onSelect: (media: { src: string; type: "image" | "video" }) => void;
}

const ThumbnailCarousel: React.FC<ThumbnailCarouselProps> = ({
  items,
  onSelect,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 200; // Adjust scrolling distance
      if (direction === "left") {
        carouselRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="relative flex items-center mt-10">
      {/* Left Scroll Button */}
      <button className="p-[11px] mr-10" onClick={() => scroll("left")}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9375 13.1932L6.5625 8.79546L10.9375 4.39771"
            stroke="#333333"
            stroke-width="1.90855"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      {/* Thumbnail List */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        <>
          {items.map((item, index) =>
            item?.type === "image" ? (
              <img
                key={index}
                src={item.src}
                alt="Thumbnail"
                className="w-[72px] h-[72px] object-cover cursor-pointer border-2 border-transparent hover:border-green-500"
                onClick={() => onSelect(item)}
              />
            ) : (
              <video
                controls
                className="w-[72px] h-[72px] rounded-lg"
                onClick={() => onSelect(item)}
                key={index}
              >
                <source src={item?.src} type="video/mp4" />
              </video>
            )
          )}
        </>
      </div>

      {/* Right Scroll Button */}
      <button className="p-[11px] ml-10" onClick={() => scroll("right")}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.0625 4.39779L11.4375 8.79554L7.0625 13.1933"
            stroke="#333333"
            stroke-width="1.90855"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
