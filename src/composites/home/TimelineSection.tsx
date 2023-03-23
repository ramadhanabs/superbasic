import { LightBulbIcon, CursorArrowRippleIcon, CodeBracketIcon, Cog6ToothIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import React from "react";

const TimelineSection = () => {
  return (
    <section className="my-[100px]">
      <p className="text-xs text-white font-thin tracking-[.15em]">
        OUR TIMELINE - LANDING PAGE
      </p>
      <p className="text-[48px] text-white font-bold leading-none my-8">
        We'll let you know,
        <br />
        so you can celebrate every{" "}
        <strong className="gradient-text">milestone</strong>.
      </p>

      <div className="md:h-[500px] rounded-xl p-4 flex flex-col gap-4 md:overflow-scroll bg-striped no-scrollbar">
        <div>
          <div className="outline outline-[#202020] bg-[#1a1a1a] text-white p-4 rounded-md w-full md:w-[400px] hover:bg-cyan-700/50 hover:outline-cyan-500/70 ease-in-out duration-200 cursor-default">
            <div className="flex items-center mb-3 gap-3">
              <LightBulbIcon className="w-6 h-6" />
              <div>
                <p className="font-bold">Planning Phase</p>
                <p className="text-xs opacity-70">1-2 Days</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed opacity-70">
              To develop a website, we first define the client's goals, gather
              requirements, and conduct research. Then, we create a sitemap and
              wireframes for the website.
            </p>
          </div>
        </div>
        <div className="md:pl-[200px]">
          <div className="outline outline-[#202020] bg-[#1a1a1a] text-white p-4 rounded-md w-full md:w-[400px] hover:bg-cyan-700/50 hover:outline-cyan-500/70 ease-in-out duration-200 cursor-default">
            <div className="flex items-center mb-3 gap-3">
              <CursorArrowRippleIcon className="w-6 h-6" />
              <div>
                <p className="font-bold">Design Phase</p>
                <p className="text-xs opacity-70">5-7 Days</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed opacity-70">
              We create a visual design, develop the website layout and user
              interface, and obtain feedback from the client to make necessary
              adjustments.
            </p>
          </div>
        </div>
        <div className="md:pl-[400px]">
          <div className="outline outline-[#202020] bg-[#1a1a1a] text-white p-4 rounded-md w-full md:w-[400px] hover:bg-cyan-700/50 hover:outline-cyan-500/70 ease-in-out duration-200 cursor-default">
            <div className="flex items-center mb-3 gap-3">
              <CodeBracketIcon className="w-6 h-6" />
              <div>
                <p className="font-bold">Development Phase</p>
                <p className="text-xs opacity-70">10-15 Days</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed opacity-70">
              We install and configure necessary software and tools, develop the
              website structure and functionality, and write and integrate
              content into the design.
            </p>
          </div>
        </div>

        <div className="md:pl-[600px]">
          <div className="outline outline-[#202020] bg-[#1a1a1a] text-white p-4 rounded-md w-full md:w-[400px] hover:bg-cyan-700/50 hover:outline-cyan-500/70 ease-in-out duration-200 cursor-default">
            <div className="flex items-center mb-3 gap-3">
              <Cog6ToothIcon className="w-6 h-6" />
              <div>
                <p className="font-bold">Testing & Review Phase</p>
                <p className="text-xs opacity-70">2-4 Days</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed opacity-70">
              We test website functionality and user experience, make necessary
              adjustments and bug fixes, and review the website with the client
              to obtain final approval.
            </p>
          </div>
        </div>

        <div className="md:pl-[800px]">
          <div className="outline outline-[#202020] bg-[#1a1a1a] text-white p-4 rounded-md w-full md:w-[400px] hover:bg-cyan-700/50 hover:outline-cyan-500/70 ease-in-out duration-200 cursor-default">
            <div className="flex items-center mb-3 gap-3">
              <RocketLaunchIcon className="w-6 h-6" />
              <div>
                <p className="font-bold">Launching Phase</p>
                <p className="text-xs opacity-70">1-2 Days</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed opacity-70">
              We launch the website and ensure it's properly indexed by search
              engines, provide the client with technical support and training,
              and conduct a post-launch review to make necessary adjustments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
