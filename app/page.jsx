import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col justify-between gap-4">
      <main className="flex flex-col gap-4 sm:gap-6 w-full max-w-5xl p-4 sm:p-6 mx-auto">
        <div className="flex flex-col justify-start sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-slate-50">
          <Image
            alt="shamimbinzahid"
            src="/shameme.png"
            id="shameme"
            height={512}
            width={512}
            className="w-32 aspect-1 rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Hi I{"'"}m Shamim Bin Zahid 👋
            </h1>
            <span className="text-base font-normal text-gray-700">
                UI/UX & Product Designer, Software Engineer & Product Manager
              </span>
              <span className="flex gap-1">
                <MapPinIcon className="w-4 text-gray-400" />
                <span className="text-sm font-normal text-gray-700">
                  Based in Dhaka, Bangladesh
                </span>
              </span>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 sm:flex-row sm:items-center gap-4">
          <h2 className="text-base font-semibold text-center text-gray-900">
            Trying to Make the World slightly Better with Better Designed {'"'}
            Things{'"'}{" "}
          </h2>
        </div>
        <div className="flex flex-col justify-start gap-2 p-4 rounded-xl bg-slate-50">
          <h2 className="text-base font-semibold text-gray-700">About Me</h2>
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
        <div className="flex flex-col justify-start gap-2 p-4 rounded-xl bg-slate-50">
          <h2 className="text-base font-semibold text-gray-700">Experiences</h2>
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
        <div className="flex flex-col justify-start gap-2 p-4 rounded-xl bg-slate-50">
          <h2 className="text-base font-semibold text-gray-700">Education</h2>
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
        <div className="flex flex-col justify-start gap-2 p-4 rounded-xl bg-slate-50">
          <h2 className="text-base font-semibold text-gray-700">Works</h2>
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
        <div className="flex flex-col justify-start gap-2 p-4 rounded-xl bg-slate-50">
          <h2 className="text-base font-semibold text-gray-700">Links</h2>
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
      </main>
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
            className="text-sm text-center text-gray-900"
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
