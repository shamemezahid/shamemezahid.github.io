"use client";
import Image from "next/image";
import { CogIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Drawer } from "vaul";

function Navigation() {
  return (
    <Drawer.Root>
      <Drawer.Trigger><CogIcon></CogIcon></Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Unstyled drawer for React.
              </Drawer.Title>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&apos;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p>
            </div>
          </div>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col justify-between gap-4">
      <main className="flex flex-col gap-4 sm:gap-6 w-full max-w-5xl p-4 sm:p-6 mx-auto">
        {/* Header Component with Name, Designation & Image */}
        <div className="border border-gray-100 flex flex-col justify-start sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-slate-50">
          <Image
            alt="shamim bin zahid"
            src="/shameme.png"
            id="shameme"
            aria-label="picture of shamim bin zahid"
            height={512}
            width={512}
            className="w-32 aspect-1 rounded-full border border-gray-100"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-800 bg-slate-50 py-1">
              Hi I{"'"}m Shamim Bin Zahid 👋
            </h1>
            <h2 className="text-base font-normal text-gray-700">
              UI/UX & Product Designer, Software Engineer & Product Manager
            </h2>
            <span className="flex gap-1">
              <MapPinIcon className="w-4 text-sky-800" />
              <p className="text-sm font-normal text-gray-700">
                Based in Dhaka, Bangladesh
              </p>
            </span>
          </div>
        </div>
        {/* The Quote / Tagline */}
        <div className="flex flex-col justify-center px-4 sm:flex-row sm:items-center gap-4">
          <h2 className="text-base font-medium text-center text-gray-900">
            Trying to Make the World slightly Better with Better Designed {'"'}
            Things{'"'}{" "}
          </h2>
        </div>
        <Navigation></Navigation>
        {/* The About Me Section */}
        <div className="border border-gray-100 flex flex-col justify-start p-4 pt-0 rounded-xl bg-slate-50">
          <h2 className="text-base font-semibold text-sky-800 bg-slate-50 pt-4 pb-3">
            About
          </h2>
          <p className="leading-6 text-sm text-gray-700 text">
            A CS Engineering Graduate from Dhaka, An Experience Designer,
            Problem Solver, HCI Enthusiast, Math Geek, Design Freak, Always up
            for Criticism & Learning. I Enjoy to Analyze the Goods & Bads in any
            System Design. I Love Music, Taking Pictures, Making Dishes,
            Savoring Meals, Exploring Ideas, Building Connections, Making
            Friends, Title Cased Sentences and More!
          </p>
        </div>
        {/* The Skills Section */}
        <div className="border border-gray-100 flex flex-col justify-start p-4 pt-0 rounded-xl bg-slate-50">
          <h2 className="text-base font-semibold text-sky-800 bg-slate-50 pt-4 pb-3">
            Skills
          </h2>
          <div className="flex flex-col gap-2">
            <p className="leading-6 text-sm text-gray-700 ">
              <span className="font-semibold block sm:inline text-gray-950">
                Software Design Process:
              </span>{" "}
              Design team management, User interface design in Figma, Design
              systems and Brand identities, Low / high fidelity wire-framing,
              Prototyping, Responsive web / native app design, User experience
              design, Human-centered design, Information architecture design,
              Accessibility, Usability testing, Heuristic evaluation.
            </p>
            <p className="leading-6 text-sm text-gray-700 ">
              <span className="font-semibold block sm:inline text-gray-950">
                Software Development:
              </span>{" "}
              System Architecture Design, Database Designing, HTTP, REST, MVC,
              Frontend Development, Project Management, Scrum Sprint Management
            </p>
            <p className="leading-6 text-sm text-gray-700 ">
              <span className="font-semibold block sm:inline text-gray-950">
                Programming / Languages:
              </span>{" "}
              C++, Python, Java, JavaScript, MongoDB, SQL, HTML, CSS
            </p>
            <p className="leading-6 text-sm text-gray-700 ">
              <span className="font-semibold block sm:inline text-gray-950">
                Frameworks / Tools:
              </span>{" "}
              Android in Java, ReactJs, NextJs, TailwindCSS, Firebase, Chrome
              Dev-Tools, Git
            </p>
            <p className="leading-6 text-sm text-gray-700 ">
              <span className="font-semibold block sm:inline text-gray-950">
                Operating Systems:
              </span>{" "}
              Linux, Windows, MacOS, The Bash Shell.
            </p>
            <p className="leading-6 text-sm text-gray-700 ">
              <span className="font-semibold block sm:inline text-gray-950">
                Other Skills:
              </span>{" "}
              Office Suites (Word, Excel etc), Image / Vector Manipulation
              (Lightroom, Illustrator, Photoshop etc), Task Management (Notion,
              ClickUp etc), Photography.
            </p>
          </div>
        </div>
        {/* The Experiences Section */}
        <div className="border border-gray-100 flex flex-col justify-start p-4 pt-0 rounded-xl bg-slate-50">
          <h2 className="text-base font-semibold text-sky-800 bg-slate-50 pt-4 pb-3">
            Experiences
          </h2>
          <div className="flex flex-col gap-2">
            <p className="leading-6 text-sm text-gray-700 ">
              <span className="font-semibold block sm:inline text-gray-950">
                REPLIQ Limited
              </span>{" "}
              Project Lead
            </p>
            <p className="leading-6 text-sm text-gray-700 ">
              <span className="font-semibold block sm:inline text-gray-950">
                REPLIQ Limited
              </span>{" "}
              UI/UX Designer
            </p>
            <p className="leading-6 text-sm text-gray-700 ">
              <span className="font-semibold block sm:inline text-gray-950">
                Crantech LLC
              </span>{" "}
              Product Manager
            </p>
          </div>
        </div>
        {/* The Education Section */}
        <div className="border border-gray-100 flex flex-col justify-start p-4 pt-0 rounded-xl bg-slate-50">
          <h2 className="text-base font-semibold text-sky-800 bg-slate-50 pt-4 pb-3">
            Education
          </h2>
          <p className="text-sm text-gray-700 text text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt accumsan diam quis eleifend. Quisque id nulla sed urna
            ultricies rutrum. Phasellus et dignissim risus, consectetur feugiat
            dui. Nunc eget tellus lacinia, imperdiet metus ut, faucibus sem.
            Cras facilisis dui pulvinar neque facilisis, at lobortis neque
            elementum. Fusce fermentum vel libero ac aliquet. Aliquam quis
            mauris in ante ornare porttitor. Proin volutpat magna ut mauris
            suscipit dignissim. Ut vel pulvinar metus. Aliquam rutrum felis vel
            erat hendrerit gravida. Curabitur in nisl sed tellus porta placerat.
          </p>
        </div>
        {/* The Works Section */}
        <div className="border border-gray-100 flex flex-col justify-start p-4 rounded-xl bg-slate-50">
          <h2 className="text-base font-semibold text-sky-800 bg-slate-50 pt-4 pb-3">
            Works
          </h2>
          <p className="leading-6 text-sm text-gray-700 text text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt accumsan diam quis eleifend. Quisque id nulla sed urna
            ultricies rutrum. Phasellus et dignissim risus, consectetur feugiat
            dui. Nunc eget tellus lacinia, imperdiet metus ut, faucibus sem.
            Cras facilisis dui pulvinar neque facilisis, at lobortis neque
            elementum. Fusce fermentum vel libero ac aliquet. Aliquam quis
            mauris in ante ornare porttitor. Proin volutpat magna ut mauris
            suscipit dignissim. Ut vel pulvinar metus. Aliquam rutrum felis vel
            erat hendrerit gravida. Curabitur in nisl sed tellus porta placerat.
          </p>
        </div>
      </main>
      {/* The Footer */}
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <div className="flex gap-4 flex-wrap">
          <a
            className="text-sm text-center text-gray-900"
            target="_blank"
            href="#"
          >
            Linkedin
          </a>
          <a
            className="text-sm text-center text-gray-900"
            target="_blank"
            href="#"
          >
            Github
          </a>
          <a
            className="text-sm text-center  xtext-gray-900"
            target="_blank"
            href="#"
          >
            Dribbble
          </a>
          <a
            className="text-sm text-center text-gray-900"
            target="_blank"
            href="#"
          >
            Behance
          </a>
          <a
            className="text-sm text-center text-gray-900"
            target="_blank"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-sm text-center text-gray-900"
            target="_blank"
            href="#"
          >
            Email
          </a>
        </div>
        <h2 className="text-sm text-center text-gray-900">
          2023 ©️ Shamim Bin Zahid
        </h2>
      </div>
    </div>
  );
}
