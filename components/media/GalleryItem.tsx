"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
interface PreviewProps {
  item: { src: string; type: "image" | "video" };
}

const GalleryItem: React.FC<PreviewProps> = ({ item }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch((e) => console.log("Play error:", e));
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="relative w-full flex justify-center items-center">
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt="Preview"
          className="w-full h-[724px] object-cover rounded-lg max-md:h-[300px]"
          width={1240}
          height={724}
        />
      ) : (
        <>
          <video
            src={item.src}
            ref={videoRef}
            className="w-full h-[724px] object-cover rounded-lg max-md:h-[300px] relative"
            width={1240}
            height={724}
          />
          <div className="absolute bottom-[325.33px] left-[37rem] ">
            <button
              onClick={playPause}
              className="mt-4 px-4 py-2 bg-white  rounded-full h-10 w-10 flex justify-center items-center"
            >
              {isPlaying ? (
                <FaPlay className="flex items-center text-black opacity-50 h-10 w-10" />
              ) : (
                <FaPause className="flex items-center text-black opacity-50 h-10 w-10" />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

/* <div className="flex gap-4">
        <button
          onClick={onPrev}
          disabled={index === 0}
          className={`px-4 py-2 rounded ${
            index === 0 ? "bg-gray-300" : "bg-black text-white"
          }`}
        >
          Previous
        </button>

        <button
          onClick={onNext}
          disabled={index === items.length - 1}
          className={`px-4 py-2 rounded ${
            index === items.length - 1 ? "bg-gray-300" : "bg-black text-white"
          }`}
        >
          Next
        </button>
      </div> */

export default GalleryItem;
