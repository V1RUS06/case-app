import React, {useCallback, useState} from 'react';
import './App.css';
import {CustomInput} from "./components/CustomInput";
import {DropDown} from "./components/Dropdown";
import {Cases} from "./types";

function App() {
  const [currentWord, setCurrentWord] = useState<string>('');
  const [word, setWord] = useState<string>('')
  const cases: Cases[] = [
    {id: 1 , case: 'И.п ', description: '(именительный)', ending: 'a(-я)'},
    {id: 2, case: 'Р.п', description: ' (родительный)', ending: 'и(-ы)'},
    {id: 3, case: 'Д.п', description: ' (дательный)', ending: 'е'},
    {id: 4, case: 'В.п', description: '(винительный)', ending: 'у(-ю)'},
    {id: 5, case: 'Т.п', description: '(творительный)', ending: 'ой(-ей)'},
    {id: 6 , case: 'П.п', description: '(предложный)', ending: 'е'},
  ]

  const onChangeHandle = useCallback((e) => {
    setCurrentWord(e.target.value)
  }, [])

  return (
    <div className="root">
      <div className="form_title">Склонение существительных по падежам</div>
      <div className="form_container">
        <div className="sub_container">
          <CustomInput onChange={onChangeHandle} />
          <div className="btn_container">
            <DropDown cases={cases} setWord={setWord} currentWord={currentWord}/>
          </div>
        </div>
        <div className="result_container">
          <div className="result_title">Результат: </div>
          <div className="result_text">{word ? word : 'Введите слово' }</div>
        </div>
      </div>
    </div>
  );
}

export default App;
