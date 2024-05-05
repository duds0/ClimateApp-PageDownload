"use client"
import Mockup from "@/components/Mockup";
import { Poppins } from "next/font/google";
import DownloadButton from "@/components/DownloadButton";
import androidSvg from "../../public/assets/android.svg";
import iosSvg from "../../public/assets/ios.svg";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row lg:justify-center items-center bg-neutral-900 lg:overflow-hidden overflow-x-hidden">

      <main className="flex flex-col gap-8 text-center lg:text-start lg:gap-8 lg:w-1/2 lg:pl-8 items-center lg:items-start">
        <header className="flex flex-col gap-2">
          <h1 className={`font-medium text-5xl mt-8 lg:mt0 md:text-7xl ${poppins.className}`}>Climate App</h1>
          <h2 className="font-medium text-2xl md:text-3xl text-amber-400">Your weather Forecast App</h2>
        </header>

        <h3 className="md:text-lg lg:font-medium w-2/3 hidden lg:block">
          Your go-to app for instant weather updates! Built with Flutter, it
          effortlessly
          fetches and displays
          accurate weather information from the OpenWeather API for any city you desire.
        </h3>
        <h3 className="md:text-lg lg:font-medium lg:w-2/3 w-3/4 lg:hidden">
          <p>🌦️ Your go-to app for instant weather updates!</p>
          <p>📱Built with Flutter, it effortlessly fetches and displays accurate weather information from the OpenWeather API for any city you desire.</p>
          <p>🌍 Providing not just current weather forecasts but also a comprehensive outlook for the next 5 days, our app ensures you're always prepared for whatever nature throws your way.</p>
          <p>📅 Whether you're planning outdoor activities, scheduling travel, or simply staying informed about the weather, count on our app to keep you ahead of the forecast.</p>
          <p>🌞⛈️ Download now and stay ahead of the weather with ease! 🌪️🌨️</p>
        </h3>

        <footer className="fixed bottom-4 lg:static flex md:gap-10 gap-5 items-center">
          <DownloadButton className="flex items-center justify-center gap-2 py-3 px-5 md:py-4 md:px-8 bg-amber-300 rounded-lg" imageSrc={androidSvg} link="https://drive.google.com/file/d/1o-ZZ1O4Cr6QR_nbQXvKI9vzPTdhG-OPT/view?usp=drive_link" ></DownloadButton>
          <DownloadButton className="flex items-center justify-center gap-2 py-3 px-5 md:py-4 md:px-8 bg-neutral-500 lg:bg-amber-300 rounded-lg cursor-not-allowed hover:bg-neutral-500 transition-colors" imageSrc={iosSvg} ></DownloadButton>
        </footer>
      </main>

      <Mockup />

    </div>
  );
}
