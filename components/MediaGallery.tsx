"use client";

import { useState } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface MediaItem {
  id: number;
  type: "image" | "video" | "youtube";
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
}

const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Sample media items - replace with your actual media
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "youtube",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      title: "Traditional Performance 1",
      description: "Live performance at cultural festival",
    },
    {
      id: 2,
      type: "youtube",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      title: "Traditional Performance 2",
      description: "Concert hall performance",
    },
    {
      id: 3,
      type: "image",
      src: "/placeholder-performance1.jpg",
      title: "Performance Photo 1",
      description: "Outdoor festival performance",
    },
    {
      id: 4,
      type: "image",
      src: "/placeholder-performance2.jpg",
      title: "Performance Photo 2",
      description: "Studio recording session",
    },
    {
      id: 5,
      type: "youtube",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      title: "Traditional Performance 3",
      description: "Collaborative performance",
    },
    {
      id: 6,
      type: "image",
      src: "/placeholder-performance3.jpg",
      title: "Performance Photo 3",
      description: "Traditional instrument showcase",
    },
  ];

  const openMedia = (media: MediaItem, index: number) => {
    setSelectedMedia(media);
    setSelectedIndex(index);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (selectedIndex + 1) % mediaItems.length
        : (selectedIndex - 1 + mediaItems.length) % mediaItems.length;
    setSelectedIndex(newIndex);
    setSelectedMedia(mediaItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my performances, recordings, and moments captured throughout
            my musical journey.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openMedia(item, index)}
              className="group relative aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              {item.type === "youtube" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={item.thumbnail || "/placeholder.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-200 text-sm">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeMedia}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <FiX size={32} />
          </button>

          <button
            onClick={() => navigateMedia("prev")}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous"
          >
            <FiChevronLeft size={40} />
          </button>

          <button
            onClick={() => navigateMedia("next")}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Next"
          >
            <FiChevronRight size={40} />
          </button>

          <div className="max-w-6xl w-full">
            {selectedMedia.type === "youtube" ? (
              <div className="aspect-video">
                <iframe
                  src={selectedMedia.src}
                  title={selectedMedia.title}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="relative aspect-video">
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-semibold mb-2">
                {selectedMedia.title}
              </h3>
              {selectedMedia.description && (
                <p className="text-gray-300">{selectedMedia.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaGallery;
