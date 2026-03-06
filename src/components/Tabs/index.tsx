import { useCallback, useState } from "react";

interface ITab {
  id: number;
  title: string;
  content: string;
}
const TABS_DATA: ITab[] = [
  {
    id: 1,
    title: "Tab 1",
    content:
      "Content of tab 1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat obcaecati pariatur consectetur reiciendis? Reiciendis delectus ipsam beatae aspernatur exercitationem in? Mollitia laborum eum minima quia!",
  },
  {
    id: 2,
    title: "Tab 2",
    content:
      "Content of tab 2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat obcaecati pariatur consectetur reiciendis? Reiciendis delectus ipsam beatae aspernatur exercitationem in? Mollitia laborum eum minima quia!",
  },
  {
    id: 3,
    title: "Tab 3",
    content:
      "Content of tab 3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat obcaecati pariatur consectetur reiciendis? Reiciendis delectus ipsam beatae aspernatur exercitationem in? Mollitia laborum eum minima quia!",
  },
];

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleToggleActiveTab = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center font-semibold m-4">Tabs component</h1>
      <ul className="flex">
        {TABS_DATA?.map((item, index: number) => {
          return (
            <li
              className={` ${
                index === activeIndex ? "bg-blue-200 " : "bg-gray-100 "
              }  py-2 px-4 cursor-pointer`}
              key={item?.id}
              onClick={() => handleToggleActiveTab(index)}
            >
              {item?.title}
            </li>
          );
        })}
      </ul>
      <p>{TABS_DATA?.[activeIndex]?.content}</p>
    </div>
  );
};

export default Tabs;
