import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:h-screen md:justify-center">
      <Image
        src="/pattern.jpg"
        width={1920}
        height={1080}
        alt=""
        className="absolute inset-0 h-screen -z-50 opacity-75"
      ></Image>
      <main className="flex flex-col gap-4 w-full max-w-5xl p-4 sm:p-6 mx-auto">
        <div className="flex flex-col justify-start sm:flex-row sm:items-center gap-4 p-4 rounded-l-full rounded-r-3xl md:bg-gray-50">
          <Image
            alt="shamimbinzahid"
            src="/shameme.png"
            id="shameme"
            height={512}
            width={512}
            className="w-32 aspect-1 rounded-full border border-gray-200"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Hi I{"'"}m Shamim Bin Zahid 👋
            </h1>
            <span className="text-base font-normal text-gray-700">
              UI/UX & Product Designer, Software Engineer, Product Manager
            </span>
            <span className="flex gap-1">
              <MapPinIcon className="w-4 text-gray-500" />
              <span className="text-sm font-light text-gray-500">
                Based in Dhaka, Bangladesh
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <div className="flex flex-col justify-start gap-2 p-4 rounded-xl">
            <h2 className="text-base font-semibold text-gray-600">About Me</h2>
            <p className="text-sm text-gray-700 text text-left sm:text-justify">
              A Data-Driven UI/UX Designer with 3+ years of experience,
              leveraging user research and human-centered design principles to
              create intuitive and user-friendly interfaces through strong
              teamwork, collaboration and clear communication. Passionate about
              empathizing and translating user needs into engaging and effective
              UIs that drive user engagement and business growth. With a strong
              foundation in computer science engineering and a love for design
              that aims to make a positive impact. I am always open to feedback
              and learning.
            </p>
            <br></br>
            <p className="text-sm text-gray-700 text text-left sm:text-justify font-semibold">
              Trying to Make the World slightly Better with Better Designed
              &quot;Things&quot;
            </p>
          </div>
          <div className="flex flex-col justify-start gap-2 p-4 rounded-xl">
            <h2 className="text-base font-semibold text-gray-600">Links</h2>
            <div className="flex gap-2 flex-wrap -mx-4">
              <a
                className="text-sm text-center font-semibold text-sky-600 transition-all px-4 py-2 rounded-full hover:bg-sky-50"
                target="_blank"
                href="mailto:shamimbinzahid@gmail.com"
              >
                Email&nbsp;Me
              </a>
              <a
                className="text-sm text-center font-semibold text-sky-600 transition-all px-4 py-2 rounded-full hover:bg-sky-50"
                target="_blank"
                href="https://www.linkedin.com/in/shamemezahid/"
              >
                LinkedIn
              </a>
              <a
                className="text-sm text-center font-semibold text-sky-600 transition-all px-4 py-2 rounded-full hover:bg-sky-50"
                target="_blank"
                href="https://www.behance.net/shamemezahid"
              >
                Behance
              </a>
              <a
                className="text-sm text-center font-semibold text-sky-600 transition-all px-4 py-2 rounded-full hover:bg-sky-50"
                target="_blank"
                href="https://github.com/shamemezahid"
              >
                Github&nbsp;(Personal)
              </a>
              <a
                className="text-sm text-center font-semibold text-sky-600 transition-all px-4 py-2 rounded-full hover:bg-sky-50"
                target="_blank"
                href="https://github.com/shamimbinzahid-repliq"
              >
                Github&nbsp;(Work)
              </a>
              <a
                className="text-sm text-center font-semibold text-sky-600 transition-all px-4 py-2 rounded-full hover:bg-sky-50"
                target="_blank"
                href="https://leetcode.com/shamemezahid/"
              >
                LeetCode
              </a>
              <a
                className="text-sm text-center font-semibold text-sky-600 transition-all px-4 py-2 rounded-full hover:bg-sky-50"
                target="_blank"
                href="https://www.instagram.com/qwaccmaster69/"
              >
                Instagram
              </a>
            </div>
          </div>{" "}
        </div>

        <h2 className="mx-auto text-sm text-center text-gray-900 mt-8">
          2024 ©️ Shamim Bin Zahid
        </h2>
      </main>
    </div>
  );
}
