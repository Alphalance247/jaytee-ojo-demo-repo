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
          className="w-full h-[724px] object-cover rounded-lg max-md:h-[300px]"
        />
      ) : (
        <video controls className="w-full h-[724px] rounded-lg">
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default GalleryItem;
