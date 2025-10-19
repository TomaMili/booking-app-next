import { getRooms } from "../_lib/data-service";
import RoomCard from "./RoomCard";

export default async function RoomList({ filter }) {
  const rooms = await getRooms();

  if (!rooms.length) return null;

  let displayedRooms;
  if (filter === "all") displayedRooms = rooms;
  if (filter === "small")
    displayedRooms = rooms.filter((room) => room.capacity <= 3);
  if (filter === "medium")
    displayedRooms = rooms.filter(
      (room) => room.capacity > 3 && room.capacity < 8
    );
  if (filter === "large")
    displayedRooms = rooms.filter((room) => room.capacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedRooms.map((room) => (
        <RoomCard room={room} key={room.id} />
      ))}
    </div>
  );
}
