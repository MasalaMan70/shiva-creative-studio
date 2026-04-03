"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Photo } from "@/lib/photos";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef(0);
  const [direction, setDirection] = useState(0);

  const photo = photos[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < photos.length - 1) {
      setDirection(1);
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, photos.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goNext, goPrev]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-[100] m-0 h-full max-h-full w-full max-w-full border-none bg-transparent p-0 backdrop:bg-transparent"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div
        className="flex h-full w-full items-center justify-center bg-[#2D2A26]/95"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Prev */}
        {currentIndex > 0 && (
          <button
            onClick={goPrev}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Next */}
        {currentIndex < photos.length - 1 && (
          <button
            onClick={goNext}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
        )}

        {/* Image */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={photo.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.2 }}
            className="relative h-[85vh] w-[90vw] max-w-5xl"
          >
            <Image
              src={photo.fullPath}
              alt={`Photo ${currentIndex + 1} of ${photos.length}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Counter */}
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60">
          {currentIndex + 1} / {photos.length}
        </p>
      </div>
    </dialog>
  );
}
