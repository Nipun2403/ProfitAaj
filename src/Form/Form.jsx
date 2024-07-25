import React, { useState } from "react";
import Input from "./Input";
import CustomModal from "../CustomModal";
import lock from "../assets/lock.png";

const Form = () => {
  const [formData, setFormData] = useState({
    "entry.382577379": "", //Name
    "entry.2013897788": "", //Mobile No.
    "entry.1413525538": "", //Orders
    "entry.1829566895": "", //Channels
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowModal(true);

    const data = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        data.append(key, formData[key]);
      }
    }

    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfCAk9APeVQ5KLhLbpz8sGiYRywWFoVWzOuKpHIEWLKin7uyw/formResponse",
        {
          method: "POST",
          body: data,
          mode: "no-cors", // 'no-cors' to prevent CORS issues
        }
      );
      console.log("Successfully submitted");
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setFormData({
      "entry.382577379": "", //Name
      "entry.2013897788": "", //Mobile No.
      "entry.1413525538": "", //Orders
      "entry.1829566895": "", //Channels
    });
  };

  return (
    <div className="form rounded-lg pt-[20px] pl-[50px] pr-[50px] pb-[30px] sm:pb-[50px] mx-auto">
      <CustomModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
      <div>
        <h2 className="text-center sm:text-3xl mb-[20px] font-bold">
          Amazon Profit Calculator
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <Input
              Label="Name"
              Placeholder="Enter your name"
              name="entry.382577379"
              value={formData["entry.382577379"]}
              setValue={handleChange}
            />
            <Input
              Label="Mobile No."
              Placeholder="Enter your mobile no."
              name="entry.2013897788"
              value={formData["entry.2013897788"]}
              setValue={handleChange}
            />
            <Input
              Label="Orders"
              Placeholder="Enter Orders per month"
              name="entry.1413525538"
              value={formData["entry.1413525538"]}
              setValue={handleChange}
            />
            <Input
              Label="Channels"
              Placeholder="Enter No. of Channels"
              name="entry.1829566895"
              value={formData["entry.1829566895"]}
              setValue={handleChange}
            />
            <div className="flex gap-2 justify-center items-center bg-blueButton text-white1 text-center pt-3 pb-3 font-bold rounded-lg mt-[15px]">
              <img
                src={lock}
                className="w-[20px] h-[20px]"
                alt="Lock Icon"
              />
              <button type="submit">UNLOCK FREE TRIAL</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
