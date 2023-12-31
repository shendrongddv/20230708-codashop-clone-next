import Image from "next/image";

const GameCard = () => {
  return (
    <div className="overflow-hidden rounded sm:rounded-lg">
      <div className="flex aspect-square items-center justify-center">
        <Image
          src="/games/mobile-legends.jpg"
          alt="Mobile Legends"
          width={178}
          height={178}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center bg-[#36213D] p-2 text-center text-sm md:p-4 md:text-base">
        <span className="line-clamp-2 text-xs font-semibold text-white sm:text-sm md:text-base">
          Mobile Legends
        </span>
      </div>
    </div>
  );
};

export default GameCard;
