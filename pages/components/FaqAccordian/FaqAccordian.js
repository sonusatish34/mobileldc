import React, { useState } from 'react';

const FaqAccordion = () => {
  const faqData = [
    {
      question: 'Documents required?',
      answer: "<p><p>Age 18+</p></p><p>After Booking Successful you can Upload your selfie photo & Aadhar card & Driving License in App one time only from next booking documents not required.</p><p>Our team will verify & Approve your documents.</p><p>You must upload your documents before your pickup time otherwise your booking will be Auto cancelled no refund.</p>"
    },
    {
      question: "Damage protection",
      answer: "<div><p>If You Choose</p><p>Zero Deposit Damage Protection</p><p>You Pay Up-to 20000rs Only in case of damage</p><p>If Major Damage Customer should bring fir copy or panchanama from police station Customer should support for Insurance</p><p>Customer should support for Insurance Verification Until Approved</p></div>    <div><p>If You Choose</p><p>Bike + Rc</p><p>No Insurance Will be Applied full Damage Amount Lakhs Of Money Should be Paid by Customer</p><p>In-case of damage Rent Amount No Refund & No Adjustment for Another Car booking.</p><p>Note: In case vehicle damage estimates exceed Rs 2,00,000, a mandatory deductible equivalent to the estimated damage amount is required.</p></div>",
    },
    {
      question: 'Late Or Extention Rules ?',
      answer: "<div><p>200/hr for 5 Seater</p><p>400/hr for 6,7,8 Seater</p><p>If You Extend More than 24hr before Return Time Same Price</p><p>If You Extend After Return Time, Then Double Amount will be charged</p></div>"
    },
    {
      question: 'Pickup Car Location',
      answer: "<p>In My Trips You Will Get Exact Car Location After booking Successfully After Uploading Documents</p>",
    },
    {
      question: 'Refund & Cancellation Policy',
      answer: "<p>50% Refund before 12hrs pick-up time</p><p>25% Refund before pick-up time</p><p>0% Refund after that</p>",
    },

  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" xl:mx-28 lg:mx-16">
      {faqData.map((item, index) => (
        <div key={index} className="border-b-[2px] border-gray-300 rounded mb-2">
          <div
            className="flex justify-between items-center px-4 py-3 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <span className=" lg:w-full lg:text-lg xs:text-xs font-semibold font-sans capitalize text-base w-64">{item.question}</span>
            <svg
              className={`lg:w-6 lg:h-6 w-4 h-4 rounded bg-orange-400 text-white transition-transform ${activeIndex === index ? 'transform rotate-180' : ''
                }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`overflow-y-scroll transition-max-height ${activeIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
          >
            <div className='px-4 text-sm leading-6' dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
