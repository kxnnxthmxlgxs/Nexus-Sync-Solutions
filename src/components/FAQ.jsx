// src/components/FAQ.jsx
import React, { useState } from 'react';

const faqData = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a wide range of services including web development, UI/UX design, graphic design, social media management, marketing, and data analysis.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'The timeline for a project depends on the scope and complexity. Typically, projects take between 2-6 weeks to complete.',
  },
  {
    question: 'Do you offer support after the project is completed?',
    answer:
      'Yes, we offer post-launch support to ensure everything runs smoothly and to handle any additional requests or fixes.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work with a wide variety of industries, from tech startups to retail businesses, ensuring that our solutions are tailored to each client’s unique needs.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-900 text-white py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left bg-zinc-800 p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 bg-zinc-700 rounded-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
