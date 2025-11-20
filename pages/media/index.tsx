import React, { useState } from "react";
import Layout from "../layout";
import GalleryTabs from "@/components/media/GalleryTabs";
import MediaGallery from "@/components/media/MediaGallery";
import Container from "@/components/common/container";

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
  { src: "/assets/videos/vidd.mp4", type: "video" },
  { src: "/assets/videos/vidd.mp4", type: "video" },
  { src: "/assets/videos/vidd.mp4", type: "video" },
  { src: "/assets/videos/vidd.mp4", type: "video" },
  { src: "/assets/media/ImageDevelopment.webp", type: "video" },
];

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState<"pictures" | "videos">("pictures");

  return (
    <Layout>
      <Container>
        <div>
          <GalleryTabs onTabChange={setActiveTab} />
          <MediaGallery media={activeTab === "pictures" ? pictures : videos} />
        </div>
      </Container>
    </Layout>
  );
};

export default MediaPage;
