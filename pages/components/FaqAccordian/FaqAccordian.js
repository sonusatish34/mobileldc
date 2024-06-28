import React, { useState } from 'react';

const FaqAccordion = () => {
  const faqData = [
    {
      question: 'What are the requirements for renting a car?',
      answer: 'To rent a car from Long Drive Cars, you need to be at least 21 years old, have a valid drivers licence, and Aadhar Card'
    },
    {
      question: 'What Incase of any damage to the car?',
      answer: 'In case of damage, the rent amount will not be refunded and there will be no adjustment for another car booking. For damage up to 2 lakhs, no insurance will be applied, and the customer must pay 2 lakh rupees. If the damage exceeds 2 lakhs, the customer still needs to pay 2 lakh rupees. If basic protection is chosen, the customer is liable for 20,000 rupees, while opting for premium protection requires a payment of 10,000 rupees. The customer must provide an FIR copy from the police station and present their driving license for insurance application. Additionally, the customer must visit both the police station and the insurance company for verification multiple times until the insurance process is completed.'
    },
    {
      question: 'What is the cost of Extension ?',
      answer: 'Yes, Next.js apps can be deployed on various platforms including Vercel, Netlify, and others.'
    },
    {
      question: 'How Does Zero Deposit and Unlimited Kilometres Work',
      answer: ' At Long Drive Cars, we offer zero deposit and unlimited kilometres on all our rental cars. This means that you dont have to pay any security deposit upfront when you rent a car from us, and you can drive as much as you want without any additional charges. Its our way of providing our customers with a hassle-free and affordable car rental experience.',
    },
    {
      question: 'What Is The Cancellation Policy ?',
      answer: 'You can start by installing Next.js using npm or yarn, then create pages in the pages directory.'
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion item
  };

  return (
    <div className=" mx-auto">
      {faqData.map((item, index) => (
        <div key={index} className="border-b-[2px] border-gray-300 rounded mb-2">
          <div
            className="flex justify-between items-center px-4 py-3 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold">{item.question}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                activeIndex === index ? 'transform rotate-180' : ''
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
            className={`overflow-hidden transition-max-height ${
              activeIndex === index ? 'max-h-40' : 'max-h-0'
            }`}
          >
            <div className="px-4 py-3">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
