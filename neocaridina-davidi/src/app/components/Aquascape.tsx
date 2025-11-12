import Image from "next/image";
import dynamic from "next/dynamic";

const FboAnimation = dynamic(() => import("../../components/FboAnimation"), {
  ssr: false,
});

export default function Aquascape() {
  return (
    <div className="w-[1200px] h-[412px] relative">
      {/* Aquascape Image behind */}
      <div className="absolute inset-0 z-20 w-full h-full">
        <Image
          src="/aquascape.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* FBO Animation in front */}
      <div
        className="absolute inset-0 z-0 w-[1200px] h-[412px]"
        key="fbo-animation"
      >
        <FboAnimation />
      </div>
    </div>
  );
}
