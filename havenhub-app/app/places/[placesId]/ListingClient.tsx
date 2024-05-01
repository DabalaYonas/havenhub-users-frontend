'use client';
import Image from "next/image";
import mImg from "../../../public/images/backgroundImage.png";
import { useEffect, useState } from "react";
import { Range } from "react-date-range";
import Calendar from "@/app/components/inputs/Calendar";
import Button from "@/app/components/Button";
import Map from "@/app/components/Map";
import { useRouter } from "next/navigation";
import { differenceInCalendarDays } from "date-fns";
import Review from "@/app/components/Review";

// const initialDateRange = {
//   startDate: new Date(),
//   endDate: new Date(),
//   key: "selection",
// };

// interface ListingClientProps {
//   reservations?: SafeReservation[];
//   listing: SafeListing & {
//     user: SafeUser;
//   };
// }

interface Place {
  address: string,
  area_size: string,
  auto_confirm: boolean,
  description: string,
  id: number,
  is_available: boolean,
  owner: number,
  price_per_day: number,
  property_ownership: string,
  sale_price: number,
  with_furniture: boolean
}

interface IParams {
  place: Place,
  images: []
}

const ListingClient: React.FC<IParams> = ({place, images}) => {
  const mImages = images.filter(item => item.property === place.id);
  const router = useRouter();
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  
  const [totalPrice, setTotalPrice] = useState(place.price_per_day);
  const [activeTab, setActiveTab] = useState(0);

  
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && place.price_per_day) {
        setTotalPrice(dayCount * place.price_per_day);
      } else {
        setTotalPrice(place.price_per_day);
      }
    }
  }, [dateRange, place.price_per_day]);

  const onSubmit = () =>{
    router.push("/checkout");
  }

  return <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Booking</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{place.address}</h1>
        
        <p className="leading-relaxed mb-4">{place.description}</p>
        <div className="flex mb-4">
          <p onClick={() => {setActiveTab(0)}} className={`${activeTab === 0 ? "text-indigo-500 border-indigo-500" : "text-black border-gray-300"} flex-grow cursor-pointer border-b-2  py-2 text-lg px-1`}>Description</p>
          <p onClick={() => {setActiveTab(1)}} className={`${activeTab === 1 ? "text-indigo-500 border-indigo-500" : "text-black border-gray-300"} flex-grow cursor-pointer border-b-2 border-gray-300 py-2 text-lg px-1`}>Reviews</p>
          {/* <p onClick={() => {setActiveTab(2)}} className={`${activeTab === 2 ? "text-indigo-500 border-indigo-500" : "text-black border-gray-300"} flex-grow cursor-pointer border-b-2 border-gray-300 py-2 text-lg px-1`}>Details</p> */}
        </div>
        
        
      {activeTab === 0 && <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
        <div className="flex flex-row items-center gap-1 p-4">
          <div className="text-2xl font-semibold">ETB {place.price_per_day}</div>
          <div className="font-light text-neutral-600">night</div>
        </div>
        <hr />
        <Calendar
          value={dateRange}
          // disabledDates={disabledDates}
          onChange={(value) => setDateRange(value.selection)}
        />
        <hr />
        <div className="p-4">
          <Button
          // disabled={disabled}
          label="Reserve" 
          onClick={onSubmit} 
          />
        </div>
        <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
          <div>Total</div>
          <div>ETB {totalPrice}</div>
        </div>

      </div>}

      {activeTab === 1 && <Review />}
                                            
      </div>
      <div className="lg:w-1/2 w-full">
        <img alt="ecommerce" className="w-full h-80 object-cover object-center rounded" src={mImages[0].image} />
        <div className="flex gap-2 py-2 overflow-auto">
          {mImages.map(image => (
            <img alt="ecommerce" className="w-20 h-20 object-cover object-center rounded-lg cursor-pointer" src={image.image} />
          ))}
        </div>
        <div className="col-span-4 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className=" text-xl font-semibold flex flex-row items-center gap-2">
            <div>Hosted By Dabala</div>
            {/* <Avatar src={user?.image} /> */}
          </div>
          <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
            <div>{2} guests</div>
            <div>{3} rooms</div>
            <div>{4} bathrooms</div>
          </div>
        </div>
        <hr />
        <Map center={[9.011008094207435, 38.75872228271875]} />
      </div>

      </div>
      
    </div>
  </div>
</section>
};

export default ListingClient;
