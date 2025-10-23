import Reservations from "@/app/_components/Reservations";
import Room from "@/app/_components/Room";
import Spinner from "@/app/_components/Spinner";
import { getRoom, getRooms } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { name } = await getRoom(resolvedParams.roomId);
  return { title: `Room ${name}` };
}

export async function generateStaticParams() {
  const rooms = await getRooms();
  const ids = rooms.map((room) => ({ roomId: String(room.id) }));

  return ids;
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const room = await getRoom(resolvedParams.roomId);

  return (
    <div className="max-w-7xl px-20 mx-auto mt-8">
      <Room room={room} />
      <div>
        <h2 className="text-5xl font-semibold text-center text-accent-500">
          Reserve Room {room.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservations room={room} />
        </Suspense>
      </div>
    </div>
  );
}
