import { useState, useRef } from "react";
import envelopeVideo from "@/assets/video-output-F33084AB-889B-43FF-A197-8E335CE20FA0-1.mp4";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [opening, setOpening] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const trigger = () => {
    if (opening) return;

    setOpening(true);

    videoRef.current?.play();

    setTimeout(() => {
      onOpen();
    }, 2100);
  };

  return (
    <div
      className="fixed inset-0 z-40 cursor-pointer overflow-hidden bg-black"
      onClick={trigger}
    >
      <video
        ref={videoRef}
        src={envelopeVideo}
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {!opening && (
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm font-arabic animate-pulse z-10"
          style={{
            color: "white",
            textShadow: "0 2px 8px rgba(0,0,0,.5)",
          }}
        >
          اضغط لفتح الدعوة
        </div>
      )}
    </div>
  );
};

export default Envelope;