import React, {ChangeEvent, FC} from 'react';
import './CustomInput.css';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<Props> = ({ onChange }) =>  (
  <div className="input_container">
    <input className="input" placeholder="Введите слово" onChange={onChange} />
  </div>
)
