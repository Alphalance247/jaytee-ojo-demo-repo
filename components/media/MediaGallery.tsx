import { useState } from "react";
import ThumbnailCarousel from "./ThumbnailCarousel";
import GalleryItem from "./GalleryItem";

interface MediaGalleryProps {
  media: { src: string; type: "image" | "video" }[];
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ media }) => {
  const [selectedMedia, setSelectedMedia] = useState(media[0]);

  return (
    <div className="space-y-4">
      <GalleryItem src={selectedMedia.src} type={selectedMedia.type} />
      <ThumbnailCarousel items={media} onSelect={setSelectedMedia} />
    </div>
  );
};

export default MediaGallery;
