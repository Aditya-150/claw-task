import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-96 h-[650px] overflow-hidden flex items-center justify-center">
      <AnimatePresence>
        {cards.map((card, index) => (
          <motion.div
            key={card.id || `${card.name}-${card.price}`} // Use unique id if available
            className="absolute mt-[520px] p-6 w-[360px] rounded-lg bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-row items-center justify-between gap-4"
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
              opacity: 1,
              rotateX: 0,
            }}
            exit={{ opacity: 0, rotateX: -90 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <img
              className="inline-block size-14 rounded-lg"
              src={card.image}
              alt={`Image ${index + 1}`}
            />

            <div className="flex flex-col items-start justify-between gap-3 w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <h4 className="text-base font-semibold">{card.name}</h4>
                <p className="text-base font-medium">
                  ₹{card.price}{" "}
                  <span className="text-xs text-gray-500">/ hr</span>
                </p>
              </div>
              <div className="inline-block" data-hs-input-number="">
                <div className="flex items-center gap-x-1.5">
                  <button
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    data-hs-input-number-decrement=""
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <input
                    className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
                    type="text"
                    value="0"
                    data-hs-input-number-input=""
                  />
                  <button
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    data-hs-input-number-increment=""
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CardStack;
