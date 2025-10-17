import { getRooms } from "../_lib/data-service";
import RoomCard from "./RoomCard";

export default async function RoomList() {
  const rooms = await getRooms();

  if (!rooms.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {rooms.map((room) => (
        <RoomCard room={room} key={room.id} />
      ))}
    </div>
  );
}
