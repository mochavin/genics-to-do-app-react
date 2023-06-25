import { useEffect, useState } from "react";

export default function InputTask({ addTask, ...props }) {
  const [inputValue, setInputValue] = useState('');


  // ini masih error
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  })

  function handleClick() {
    if (inputValue.trim() === '') return;
    addTask(inputValue);
    setInputValue('');
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }


  return (
    <div className="bg-purple-600 p-3 rounded-xl">
      <input className="bg-purple-50 text-black rounded-xl pl-10 w-full h-12 " placeholder="Add a task" value={inputValue} onChange={handleChange} />
      <button className=" text-white w-12 h-12 rounded-full bg-purple-500 absolute hover:bg-purple-600 -ml-14 -mb-5" onClick={handleClick}>+</button>
    </div>
  );
}
