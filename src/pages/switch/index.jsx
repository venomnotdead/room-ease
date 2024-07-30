import Card from "@/utils/components/Card";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

let roomsData = [
  { name: "room 1", users: [4, 43, 3] },
  { name: "room 2", users: [4, 43, 3] },
  { name: "room 3", users: [4, 43, 3] },
  { name: "room 4", users: [4, 43, 3] },
  { name: "room 5", users: [4, 43, 3] },
  { name: "room 6", users: [4, 43, 3] },
];

const Index = () => {
  const [active, setActive] = useState(-1);
  const [rooms, setRooms] = useState(roomsData);

  useEffect(() => {
    // if (active != -1) {
    const newArray = [
      ...rooms.filter((room) => room.name == active),
      ...rooms.filter((room) => room.name !== active),
    ];
    setRooms(newArray);
    // }
  }, [active]);

  return (
    <div className="flex justify-center items-center flex-col">
      <div></div>
      <div>SWITCH ROOMS</div>
      <div className="flex flex-wrap justify-center">
        {rooms.map((room, i) => (
          <Card
            className={`w-60 h-20 ${
              active == room.name && "border-2 border-primary-lightest"
            }`}
            key={i}
            style={{
              transition: "border-color 5s ease 3s",
            }}
          >
            <div
              onClick={() => {
                setActive(room.name);
              }}
              className="flex justify-between items-center h-full"
            >
              <div>{room.name}</div>
              <div className="flex justify-center items-center h-full">
                <Card
                  className={` h-1/2 flex justify-center items-center ${
                    active == room.name
                      ? "text-primary-default bg-primary-lightest"
                      : "text-primary-lightest bg-primary-default"
                  } `}
                >
                  <Icon icon="clarity:house-line" width="24" height="24" />
                </Card>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
