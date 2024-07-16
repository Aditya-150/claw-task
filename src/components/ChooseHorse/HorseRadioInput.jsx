import React from "react";
import { Drawer } from "vaul";

const HorseRadioInput = ({ horse, selectedHorse, onSelect }) => {
  return (
    <div
      className={`border p-4 bg-white rounded-lg flex items-center mb-4 ${
        selectedHorse === horse.name ? "border-primary" : "border-gray-200"
      }`}
      onClick={() => onSelect(horse.name)}
    >
      <input
        type="radio"
        name="horse"
        value={horse.name}
        checked={selectedHorse === horse.name}
        onChange={() => onSelect(horse.name)}
        className="hidden"
      />
      <img
        src={horse.image}
        alt={horse.name}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div className="flex-1">
        <h4 className="font-bold">{horse.name}</h4>
      </div>
      <ViewDetails horse={horse} />
    </div>
  );
};

const ViewDetails = ({ horse }) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger className="text-primary underline cursor-pointer">
        View Details
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 border-none bg-black bg-opacity-50 z-50" />
        <Drawer.Content className="fixed inset-0 border-none bg-white p-4 rounded-lg shadow-lg z-50">
          <Drawer.Handle className="w-full h-8 bg-gray-300 rounded-t-lg" />
          <h2 className="font-bold text-lg mb-2">{horse.name}</h2>
          <p>{horse.description}</p>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default HorseRadioInput;
