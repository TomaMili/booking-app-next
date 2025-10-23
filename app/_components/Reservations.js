import { getBookedDatesByRoomId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export default async function Reservations({ room }) {
  const settings = await getSettings();
  const bookedDates = await getBookedDatesByRoomId(room.id);

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 mt-20">
      <DateSelector settings={settings} bookedDates={bookedDates} room={room} />
      <ReservationForm room={room} />
    </div>
  );
}
