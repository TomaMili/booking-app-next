import { getRoom } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { name } = await getRoom(params.roomId);
  return { title: `Room ${name}` };
}

export default async function Page({ params }) {
  const room = await getRoom(params.roomId);

  const { id, name, capacity, price, discount, image, description } = room;

  return (
    <div className="max-w-4xl px-20 mx-auto mt-8">
      <div className="flex flex-col gap-20 border border-primary-800 mb-24">
        <div className="relative aspect-[3/2]">
          <Image fill src={image} alt={`Cabin ${name}`} />
        </div>

        <div className="px-12">
          <h3 className="text-accent-100 font-black text-7xl mb-2 pb-1">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">{description}</p>

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

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
