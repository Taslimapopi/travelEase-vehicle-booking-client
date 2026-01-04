import React, { useState } from "react";

const faqs = [
  {
    question: "How do I book a vehicle on TravelEase?",
    answer:
      "Simply search for available vehicles, choose one that fits your needs, select your date and time, and confirm the booking securely.",
  },
  {
    question: "Is online payment safe on TravelEase?",
    answer:
      "Yes. TravelEase uses secure authentication and trusted payment gateways to ensure your transactions are completely safe.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel a booking from your dashboard. Cancellation policies may vary depending on the vehicle owner.",
  },
  {
    question: "How can I add my own vehicle?",
    answer:
      "After logging in, go to your dashboard and click on 'Add New Vehicle'. Fill in the details and your vehicle will be listed.",
  },
  {
    question: "Do I need an account to book a vehicle?",
    answer:
      "Yes, you need to create an account to make bookings so we can manage reservations and ensure security.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 ">
      <h2 className="text-3xl font-bold text-center mb-10">
        ❓ Frequently Asked Questions
      </h2>

      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
              {faq.question}
              <span className="text-xl ">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="p-5 pt-0 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
