import Image from "next/image";

interface GalleryItemProps {
  src: string;
  type: "image" | "video";
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, type }) => {
  return (
    <div className="relative w-full flex justify-center items-center">
      {type === "image" ? (
        <Image
          src={src}
          alt="Gallery"
          width={1240}
          height={724}
          // className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <video controls className="w-full h-full rounded-lg">
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default GalleryItem;
