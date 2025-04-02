import React, { useState } from "react";
import Layout from "../layout";
import GalleryTabs from "@/components/media/GalleryTabs";
import MediaGallery from "@/components/media/MediaGallery";

const pictures: { src: string; type: "image" | "video" }[] = [
  { src: "/assets/media/ImageDevelopment.webp", type: "image" },
  { src: "/assets/media/ImageDevelopment.webp", type: "image" },
  { src: "/assets/media/ImageLineup.webp", type: "image" },
  { src: "/assets/media/ImageLineup.webp", type: "image" },
  { src: "/assets/media/ImagePlaying.webp", type: "image" },
  { src: "/assets/media/ImagePlaying.webp", type: "image" },
  { src: "/assets/media/ImageDevelopment.webp", type: "image" },
  { src: "/assets/media/ImageLineup.webp", type: "image" },
  { src: "/assets/media/ImagePlaying.webp", type: "image" },
  { src: "/assets/media/ImageLineup.webp", type: "image" },
  { src: "/assets/media/ImagePlaying.webp", type: "image" },
  { src: "/assets/media/ImageDevelopment.webp", type: "image" },
  { src: "/assets/media/ImageDevelopment.webp", type: "image" },
  { src: "/assets/media/ImageDevelopment.webp", type: "image" },
  { src: "/assets/media/ImageDevelopment.webp", type: "image" },
];

const videos: { src: string; type: "image" | "video" }[] = [
  { src: "/videos/video1.mp4", type: "video" },
  { src: "/videos/video2.mp4", type: "video" },
];

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState<"pictures" | "videos">("pictures");

  return (
    <Layout>
      <div className="py-[100px] mx-auto max-w-[1240px]">
        <GalleryTabs onTabChange={setActiveTab} />
        <MediaGallery media={activeTab === "pictures" ? pictures : videos} />
      </div>
    </Layout>
  );
};

export default MediaPage;
