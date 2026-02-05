import { useState } from "react";
import ThumbnailCarousel from "./ThumbnailCarousel";
import GalleryItem from "./GalleryItem";

interface MediaGalleryProps {
  media: { src: string; type: "image" | "video" }[];
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ media }) => {
  const [selectedMedia, setSelectedMedia] = useState(media[0]);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const items = [
  //   { src: "/img1.jpg", type: "image" },
  //   { src: "/video1.mp4", type: "video" },
  //   { src: "/img2.jpg", type: "image" },
  //   { src: "/img3.jpg", type: "image" },
  // ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(index + 1);
    // console.log(currentIndex);
    console.log(index);
  };
  const prev = () => {
    setIndex(index - 1);
    console.log("prev");
  };
  const handleSelect = (i: number) => {
    setIndex(i);
    console.log(index);
  };
  return (
    <div className="space-y-4">
      {/* <GalleryItem src={selectedMedia.src} type={selectedMedia.type} /> */}
      <GalleryItem
        item={media[index]}
        // index={index}
        // onPrev={prev}
        // onNext={next}
      />
      {/* <ThumbnailCarousel items={media} onSelect={setSelectedMedia} /> */}
      <ThumbnailCarousel
        items={media}
        selectedIndex={index}
        onSelect={handleSelect}
        next={next}
        prev={prev}
        disableNext={index === media.length - 1}
        disablePrev={index === 0}
      />
    </div>
  );
};

export default MediaGallery;
