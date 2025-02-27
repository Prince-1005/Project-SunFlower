"use client"
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import { motion, AnimatePresence } from 'framer-motion';
const items = [
  {
    question: "What is Heart2Heart?",
    answer:
      "Heart2Heart is an AI-powered companion designed to offer emotional support and understanding. It serves as a friendly, non-judgmental partner that listens and responds thoughtfully through both text and voice interactions.",
  },
  {
    question: "How does Heart2Heart engage with users?",
    answer:
      "With a seamless blend of text and voice interaction, Heart2Heart adapts to your communication style. No complicated commands—just natural, flowing conversations designed to make you feel heard and valued.",
  },
  {
    question: "What makes Heart2Heart unique?",
    answer:
      "Unlike traditional chatbots, Heart2Heart isn’t just about giving answers—it’s about making connections. It creates a safe space for self-expression, responding with warmth and thoughtfulness, even without pre-trained emotional intelligence.",
  },
  {
    question: "Can Heart2Heart replace human support?",
    answer:
      "Heart2Heart isn’t a substitute for professional therapy or human connection, but it’s a bridge to emotional support—a tool that offers comfort, companionship, and a listening ear whenever you need it.",
  },
];

const AccordinationItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className=" py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}

      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >{answer}</motion.div>

        )}
      </AnimatePresence>

    </div>


  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordinationItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  )
};
