import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

export default function Room({ room }) {
  const { id, name, capacity, price, discount, image, desc } = room;

  return (
    <div className="flex flex-col gap-20 border border-primary-800 mb-24">
      <div className="relative aspect-[3/2]">
        <Image fill src={image} alt={`Cabin ${name}`} />
      </div>

      <div className="px-12">
        <h3 className="text-accent-100 font-black text-7xl mb-2 pb-1">
          Room {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{desc}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{capacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
