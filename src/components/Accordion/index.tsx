import { useState } from "react";

interface IAccordion {
  id: number;
  ques: string;
  answer: string;
}

const ACCORDION_DATA: IAccordion[] = [
  {
    id: 1,
    ques: "What is React?",
    answer:
      "React is a JavaScript library used for building user interfaces, especially single-page applications using reusable components.",
  },
  {
    id: 2,
    ques: "What is useState?",
    answer:
      "useState is a React hook that allows functional components to manage and update state.",
  },
  {
    id: 3,
    ques: "What is useEffect?",
    answer:
      "useEffect is a React hook used to handle side effects like API calls, subscriptions, or DOM updates.",
  },
  {
    id: 4,
    ques: "What is a controlled component?",
    answer:
      "A controlled component is a form element whose value is controlled by React state.",
  },
  {
    id: 5,
    ques: "What is a custom hook?",
    answer:
      "A custom hook is a reusable JavaScript function that uses React hooks to share logic across components.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleToggle = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center font-semibold">Accordion</h1>
      <ul className="border">
        {ACCORDION_DATA?.map((item, index) => {
          return (
            <li
              key={item?.id}
              className={`flex flex-col gap-2 border-b last:border-b-0 p-2`}
            >
              <div className="flex items-start justify-between gap-2 ">
                <p>{item?.ques}</p>
                <button
                  className="cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  {index === activeIndex ? "-" : "+"}
                </button>
              </div>
              <p
                className={`${
                  index === activeIndex ? "h-20 opacity-100" : "h-0 opacity-0"
                } text-gray-400  text-sm transition-all duration-500 ease-in-out`}
              >
                {item?.answer}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
