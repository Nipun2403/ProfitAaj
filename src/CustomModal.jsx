import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const CustomModal = ({ show, onClose }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (show) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  }, [show]);

  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 z-40"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className=" bg-white p-8 rounded-lg shadow-lg relative w-3/4 h-3/4 md:w-1/2 md:h-1/2 flex flex-col items-center justify-center">
          <button
            className="absolute font-bold top-2 text-lg right-2 bg-gray-200 rounded-full p-3"
            onClick={onClose}
          >
            X
          </button>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-5xl font-bold mb-4 text-black">Coming Soon!</h2>
            <p className="text-xl text-black">You have successfully</p>
            <p className="text-xl text-green-500">Unlocked Free Trial</p>
          </div>
        </div>
        {showConfetti && <Confetti />}
      </div>
    </>
  );
};

export default CustomModal;
