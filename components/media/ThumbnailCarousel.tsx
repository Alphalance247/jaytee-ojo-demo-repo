// import { useRef } from "react";
// import Image from "next/image";

// interface ThumbnailCarouselProps {
//   items: { src: string; type: "image" | "video" }[];
//   onSelect: (media: { src: string; type: "image" | "video" }) => void;
// }

// const ThumbnailCarousel: React.FC<ThumbnailCarouselProps> = ({
//   items,
//   onSelect,
// }) => {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (carouselRef.current) {
//       const scrollAmount = 200;
//       if (direction === "left") {
//         carouselRef.current.scrollBy({
//           left: -scrollAmount,
//           behavior: "smooth",
//         });
//       } else {
//         carouselRef.current.scrollBy({
//           left: scrollAmount,
//           behavior: "smooth",
//         });
//       }
//     }
//   };

//   return (
//     <div className="relative flex items-center mt-10">
//       {/* Left Scroll Button */}
//       <button className="p-[11px] mr-10" onClick={() => scroll("left")}>
//         <svg
//           width="18"
//           height="18"
//           viewBox="0 0 18 18"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M10.9375 13.1932L6.5625 8.79546L10.9375 4.39771"
//             stroke="#333333"
//             stroke-width="1.90855"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//       </button>

//       {/* Thumbnail List */}
//       <div
//         ref={carouselRef}
//         className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
//         style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
//       >
//         <>
//           {items.map((item, index) =>
//             item?.type === "image" ? (
//               <img
//                 key={index}
//                 src={item.src}
//                 alt="Thumbnail"
//                 className="w-[72px] h-[72px] object-cover cursor-pointer border-2 border-transparent hover:border-green-500"
//                 onClick={() => onSelect(item)}
//               />
//             ) : (
//               <div>
//                 <video
//                   controls
//                   className="w-[72px] h-[72px] rounded-lg"
//                   onClick={() => onSelect(item)}
//                   key={index}
//                 >
//                   <source src={item.src} type="video/mp4" />
//                 </video>
//               </div>
//             )
//           )}
//         </>
//       </div>

//       {/* Right Scroll Button */}
//       <button className="p-[11px] ml-10" onClick={() => scroll("right")}>
//         <svg
//           width="18"
//           height="18"
//           viewBox="0 0 18 18"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M7.0625 4.39779L11.4375 8.79554L7.0625 13.1933"
//             stroke="#333333"
//             stroke-width="1.90855"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };
// "use client";

// import { useState } from "react";

// interface MediaItem {
//   src: string;
//   type: "image" | "video";
// }

// interface GalleryProps {
//   items: MediaItem[];
// }

// const ThumbnailCarousel = ({ items }: GalleryProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const currentItem = items[currentIndex];

//   const goNext = () => {
//     if (currentIndex < items.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const goPrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center gap-6 mt-10">
//       {/* MAIN PREVIEW */}
//       <div className="w-[650px] h-[420px] bg-black rounded-xl flex items-center justify-center overflow-hidden">
//         {currentItem.type === "image" ? (
//           <img src={currentItem.src} className="w-full h-full object-contain" />
//         ) : (
//           <video
//             src={currentItem.src}
//             className="w-full h-full object-contain"
//             controls
//           />
//         )}
//       </div>

//       {/* NEXT / PREVIOUS */}
//       <div className="flex items-center justify-center gap-6">
//         <button
//           onClick={goPrev}
//           disabled={currentIndex === 0}
//           className={`px-4 py-2 rounded-md border ${
//             currentIndex === 0
//               ? "opacity-40 cursor-not-allowed"
//               : "cursor-pointer hover:bg-gray-200"
//           }`}
//         >
//           ← Previous
//         </button>

//         <button
//           onClick={goNext}
//           disabled={currentIndex === items.length - 1}
//           className={`px-4 py-2 rounded-md border ${
//             currentIndex === items.length - 1
//               ? "opacity-40 cursor-not-allowed"
//               : "cursor-pointer hover:bg-gray-200"
//           }`}
//         >
//           Next →
//         </button>
//       </div>

//       {/* THUMBNAILS */}
//       <div className="flex overflow-x-auto gap-4 mt-4 scrollbar-hide">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-[80px] h-[80px] rounded-md overflow-hidden border-2 cursor-pointer
//             ${
//               index === currentIndex
//                 ? "border-green-500"
//                 : "border-transparent hover:border-green-400"
//             }
//           `}
//           >
//             {item.type === "image" ? (
//               <img src={item.src} className="w-full h-full object-cover" />
//             ) : (
//               <video
//                 src={item.src}
//                 muted
//                 className="w-full h-full object-cover"
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThumbnailCarousel;
// "use client";
// import { useRef } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// interface ThumbnailCarouselProps {
//   items: { src: string; type: "image" | "video" }[];
//   onSelect: (index: number) => void;
//   selectedIndex: number;
// }

// const ThumbnailCarousel: React.FC<ThumbnailCarouselProps> = ({
//   items,
//   onSelect,
//   selectedIndex,
// }) => {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (carouselRef.current) {
//       const scrollAmount = 200;
//       carouselRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative flex justify-between items-center mt-10">
//       {/* Left Scroll */}
//       {/* <button className="p-[11px] mr-10" onClick={() => scroll("left")}>
//         ←
//       </button> */}
//       <button className="p-[11px] mr-10 bg-[#F5F5F5] w-10 h-10 rounded-[4px] ">
//         <FaAngleLeft />
//       </button>

//       {/* Thumbnails */}
//       <div
//         ref={carouselRef}
//         className="flex overflow-x-auto gap-4 scrollbar-hide"
//         style={{ whiteSpace: "nowrap" }}
//       >
//         {items.map((item, index) =>
//           item.type === "image" ? (
//             <img
//               key={index}
//               src={item.src}
//               alt="Thumbnail"
//               className={`w-[72px] h-[72px] object-cover cursor-pointer border-2 rounded-md
//               ${
//                 selectedIndex === index
//                   ? "border-green-500"
//                   : "border-transparent"
//               }`}
//               onClick={() => onSelect(index)}
//             />
//           ) : (
//             <video
//               key={index}
//               className={`w-[72px] h-[72px] object-cover  cursor-pointer border-2  rounded-md
//               ${
//                 selectedIndex === index
//                   ? "border-green-500"
//                   : "border-transparent"
//               }`}
//               onClick={() => onSelect(index)}
//             >
//               <source src={item.src} type="video/mp4" />
//             </video>
//           )
//         )}
//       </div>

//       {/* Right Scroll */}
//       {/* <button className="p-[11px] ml-10" onClick={() => scroll("right")}>
//         →
//       </button> */}
//       <button className="p-[11px] ml-10 bg-[#F5F5F5] w-10 h-10 rounded-[4px]">
//         <FaAngleRight />
//       </button>
//     </div>
//   );
// };
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface GalleryListProps {
  items: { src: string; type: "image" | "video" }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  next: () => void;
  prev: () => void;
  disableNext: boolean;
  disablePrev: boolean;
}

const ThumbnailCarousel: React.FC<GalleryListProps> = ({
  items,
  selectedIndex,
  onSelect,
  next,
  prev,
  disableNext,
  disablePrev,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // const scroll = (direction: "left" | "right") => {
  //   if (carouselRef.current) {
  //     const scrollAmount = 200;
  //     carouselRef.current.scrollBy({
  //       left: direction === "left" ? -scrollAmount : scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="relative flex items-center mt-10">
      {/* Left Scroll */}
      {/* <button className="p-[11px] mr-6" onClick={() => scroll("left")}>
        ←
      </button> */}
      <button
        className={
          disablePrev
            ? "p-[11px]  bg-gray-300 w-10 h-10 rounded-[4px] cursor-not-allowed"
            : "p-[11px]  bg-[#F5F5F5] w-10 h-10 rounded-[4px]"
        }
        onClick={prev}
        disabled={disablePrev}
      >
        <FaAngleLeft />
      </button>

      {/* Thumbnails */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide mx-4"
      >
        {items.map((item, index) =>
          item.type === "image" ? (
            <img
              key={index}
              src={item.src}
              className={`w-[72px] h-[72px] object-cover cursor-pointer rounded border-2  ${
                selectedIndex === index
                  ? "border-green-500"
                  : "border-transparent"
              }`}
              onClick={() => onSelect(index)}
            />
          ) : (
            <video
              key={index}
              className={`w-[72px] h-[72px] object-cover cursor-pointer rounded border-2 ${
                selectedIndex === index
                  ? "border-green-500"
                  : "border-transparent"
              }`}
              onClick={() => onSelect(index)}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          )
        )}
      </div>

      {/* Right Scroll */}
      <button
        className={
          disableNext
            ? "p-[11px]  bg-gray-300 w-10 h-10 rounded-[4px] cursor-not-allowed"
            : "p-[11px]  bg-[#F5F5F5] w-10 h-10 rounded-[4px]"
        }
        onClick={next}
        disabled={disableNext}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
