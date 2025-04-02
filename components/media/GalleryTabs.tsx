import { useState } from "react";

interface GalleryTabsProps {
  onTabChange: (tab: "pictures" | "videos") => void;
}

const GalleryTabs: React.FC<GalleryTabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<"pictures" | "videos">("pictures");

  return (
    <div className="flex font-medium text-lg ">
      <button
        className={`py-3 px-8 ${
          activeTab === "pictures"
            ? "bg-[#3BA361] text-white"
            : "bg-[#F5F5F5] text-[#262626]"
        }`}
        onClick={() => {
          setActiveTab("pictures");
          onTabChange("pictures");
        }}
      >
        Picture Gallery
      </button>
      <button
        className={`py-3 px-8 ${
          activeTab === "videos"
            ? "bg-[#3BA361] text-white"
            : "bg-[#F5F5F5] text-[#262626]"
        }`}
        onClick={() => {
          setActiveTab("videos");
          onTabChange("videos");
        }}
      >
        Video Gallery
      </button>
    </div>
  );
};

export default GalleryTabs;
