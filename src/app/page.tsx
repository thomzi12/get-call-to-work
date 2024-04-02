'use client';
import React, { useState, useEffect } from 'react';

const [inputText, setInputText] = useState('');
const [isClicked, setIsClicked] = useState(false);

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputText(event.target.value);
  setIsClicked(false);
};

const handleClick = () => {
  setIsClicked(true);
};


export default function Home() {
  return (
    <main>
     <p>User gives a youtube link (let's assume it's valid)</p><br/>
     <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="my-input-box"
        /><br/>
    <p>When user clicks this button, it should fetch a Youtube URL and display it below:</p><br/>
    <button onClick={handleClick}>Get transcript</button>
    </main>
  );
}
