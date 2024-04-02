'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  function getVideoId(link: string): string {
    return link.includes("?v=") ? link.split("?v=")[1] : link.split("?si=")[1];
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    setIsClicked(false);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const videoId = getVideoId(inputText);

  return (
    <main>
      <p>User gives a youtube link (let's assume it's valid)</p><br />
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        className="my-input-box"
      /><br />
      <p>Here's the video Id of the user input: {videoId}</p><br />
      <p>When user clicks this button, it should fetch a Youtube URL and display it below:</p><br />
      <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" onClick={handleClick}>Get transcript button</button>
    </main>
  );
}
