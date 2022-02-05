import React, {FC, useState, useRef} from 'react';
import './Dropdown.css';
import {useClickOutside} from "../../hooks/useClickOutside";
import {Cases} from "../../types";

interface ButtonProps {
  cases: Cases[]
  setWord: React.Dispatch<React.SetStateAction<string>>
  currentWord: string
}

export const DropDown: FC<ButtonProps> = ({cases, setWord, currentWord}) => {
  const [listVisible, setListVisible] = useState<boolean>(false);
  const vowels = ['а','о','у','э','ы','я','ё','е','ю','и']

  const onToggle = () => {
    setListVisible(!listVisible);
  }

  const onClickCard = (id:number) => {
    const wordEnding = cases.filter(item => id === item.id)

    setListVisible(!listVisible);

    const lastChar = [...currentWord.split('')].pop();

    if (lastChar) {
      if (vowels.includes(lastChar)) {
        setWord(`${currentWord.slice(0, -1) + wordEnding[0].ending}`);
      } else {
        setWord(`${currentWord + wordEnding[0].ending}`);
      }
    }
  }

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, setListVisible);

  return (
    <div ref={wrapperRef}>
      <button className="button_container" onClick={onToggle} >
        <div className="text">Выберете падеж</div>
      </button>
      {
        listVisible &&(
          <div className="hidden_container">
            {cases.map((item) => {
                return(
                  <div className="card" onClick={() => onClickCard(item.id)} key={item.id}>{item.case + item.description}</div>
                )
              }
            )}
          </div>
        )
      }
    </div>
  );
};

