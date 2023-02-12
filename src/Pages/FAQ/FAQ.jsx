import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  const questions = [
    {
      question:
        "Mauris congue euismod purus at semper. Morbi et vulputate massa?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      question: "Donec mattis finibus elit ut tristique?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      question: "Donec mattis finibus elit ut tristique?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      question: "Pellentesque habitant morbi tristique senectus et netus?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      question: "Nam pellentesque aliquam metus?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      question: "Morbi gravida, nisi id fringilla ultricies, elit lorem?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div>
        <h1 className="uppercase text-5xl font-bold text-center my-10 text-[#333333]">
          Frequently questions
        </h1>
        <div>
          <h4 className="text-[#333333] text-base font-normal pb-[10px]">
            Below are frequently asked questions, you may find the answer for
            yourself
          </h4>
          <p className="text-[#6a6a6a] text-[13px] font-normal pb-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris
            semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor
            augue. In eget enim diam. Donec gravida tortor sem, ac fermentum
            nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat.
            Donec interdum nunc purus, vitae vulputate arcu fringilla quis.
            Vivamus iaculis euismod dui.
          </p>
        </div>
      </div>
      <div className="">
        <div className="text-[#6a6a6a]">
          {questions.map((question, index) => (
            <div key={index} className="mt-2 border bg-[#F7F7F7]">
              <button
                className="w-full text-left py-3 px-4 flex justify-between items-center"
                onClick={() => handleQuestionClick(index)}
              >
                <p className="text-lg font-medium mb-0">{question.question}</p>
                <p>
                  {selectedQuestion === index ? (
                    <AiOutlineMinusCircle className="text-sm" />
                  ) : (
                    <BsPlusCircle className="text-sm" />
                  )}
                </p>
              </button>
              {selectedQuestion === index && (
                <div className="p-4 bg-white rounded-b">
                  <p className="text-gray-700">{question.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
