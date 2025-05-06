import React from "react";
import DynamicTittle from "../../Utils/DynamicTittle";

const Faq = () => {
  DynamicTittle("FAQs");
  const faqs = [
    {
      question: "What is EventBangla?",
      answer: "EventBangla is a platform where you can discover, explore, and attend local events easily.",
    },
    {
      question: "Is it free to use EventBangla?",
      answer: "Yes! Browsing and discovering events is completely free. Some events may require paid tickets, depending on the organizer.",
    },
    {
      question: "How do I register for an event?",
      answer: "Go to the event page, and if registration is available, you’ll see an option to reserve your spot or get tickets.",
    },
    {
      question: "Can I promote my event on EventBangla?",
      answer: "Absolutely! Event organizers can list and promote their events through our platform to reach more people.",
    },
    {
      question: "Do I need an account to use EventBangla?",
      answer: "You can browse events without an account, but for booking or managing your listings, you need to sign up.",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 py-10 px-4 md:px-20 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
