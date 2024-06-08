"use client";

import { Button } from "@/components/ui/button";
import { Circle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const StartGame = () => {
  const [scoreGame, setScoreGame] = useState({ plyer: 0, ai: 1 });

  return (
    <div className="w-full flex flex-col">
      <nav className="flex justify-around items-center gap-6 mt-4">
        <span className="text-white">You</span>
        <span className="rounded-lg bg-white px-4 py-1">
          {scoreGame.plyer} - {scoreGame.ai}
        </span>
        <span className="text-white">AI</span>
      </nav>
      <div className="flex flex-col h-[35vh] mt-[10vh]">
        <div className="flex flex-row h-full">
          <div className="w-full "></div>
          <div className="w-full border-x-8 border-white"></div>
          <div className="w-full "></div>
        </div>
        <div className="flex flex-row border-y-8 border-white h-full">
          <div className="w-full "></div>
          <div className="w-full border-x-8 border-white grid place-content-center">
            <Circle
              strokeWidth={4}
              absoluteStrokeWidth={true}
              className="w-[70px] h-[70px] text-white"
            />
          </div>
          <div className="w-full "></div>
        </div>
        <div className="flex flex-row h-full">
          <div className="w-full "></div>
          <div className="w-full border-x-8 border-white"></div>
          <div className="w-full grid place-content-center">
            <X
              strokeWidth={4}
              absoluteStrokeWidth={true}
              className="w-[85px] h-[85px] text-white"
            />
          </div>
        </div>
      </div>
      <div className="mt-[10vh] flex flex-col mx-auto justify-center items-center gap-4 w-[calc(100%-15vw)] max-w-[320px] [&>button]:!text-xl">
        <Button
          variant={"outline"}
          className="w-full bg-transparent text-border hover:bg-primary/90 py-6 hover:border-primary/90 hover:text-orange-400">
          Restart
        </Button>
        <Button className="w-full mt-3 bg-white text-orange-400 py-6" asChild>
          <Link href={"/"} className="text-xl">
            End Game
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default StartGame;
