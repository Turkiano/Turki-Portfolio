// AboutMeSection.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Chart } from "./Chart";

export default function AboutMe() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-start justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ─── LEFT COLUMN: PROFILE ─────────────────────────────────── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <div className="bg-gray-400 rounded-2xl p-1.5">
            <div className="w-40 sm:w-56 md:w-64 lg:w-72 aspect-square rounded-xl overflow-hidden">
              <img
                src="https://i.postimg.cc/k4YnpjBj/Whats-App-Image-2025-04-15-at-6-19-55-PM.jpg"
                alt="Profile photo"
                className="w-full h-full object-cover bg-black"
              />
            </div>
          </div>

          <div className="space-y-2 px-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Turki Saeed
              </h1>
              <a
                href="https://github.com/turkiano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-black hover:text-gray-600"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/turki-saeed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-black hover:text-gray-600"
              >
                <FaLinkedin />
              </a>
            </div>

            <h5 className="text-lg sm:text-xl md:text-2xl font-medium">
              Full-Stack Marketing Technologist
            </h5>

            <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-md mx-auto lg:mx-0">
              I’m a Full-Stack Marketing Technologist with a passion for turning
              ideas into impact. Over the past decade, I’ve bridged the gap
              between creative storytelling and cutting-edge code—designing and
              deploying end-to-end digital experiences that captivate audiences
              and drive measurable growth. From architecting responsive web apps
              to integrating real-time analytics and marketing automation, I
              thrive on crafting seamless journeys that connect brands to their
              customers. Always learning, always iterating, I bring both
              strategic vision and hands-on technical expertise to every
              project, ensuring that your next campaign isn’t just seen—it’s
              felt, shared, and remembered.
            </p>

            <div className="flex justify-center lg:justify-start pt-4">
              <a
                href="/assets/Turki-Saeed-Resume.pdf"
                download
                className="px-6 py-2 text-center font-semibold rounded-lg border border-gray-600 text-black hover:bg-gray-100"
              >
                RESUME
              </a>
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: CHART ─────────────────────────────────── */}
        <div className="w-full h-[300px] md:h-[400px]">
          <Chart />
        </div>
      </div>
    </div>
  );
}
