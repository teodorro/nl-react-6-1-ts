import React, { useState } from 'react';
import '../styles/toolbar.css';

export default function Toolbar({
  addPlace,
}: {
  addPlace: (name: string, timezoneOffset: number | '') => void;
}) {
  const [name, setName] = useState('');
  const [timezoneOffset, setTimezoneOffset] = useState<number | ''>('');
  return (
    <form className="nl-toolbar" action="submit">
      <input
        className="nl-input"
        value={name}
        type="text"
        placeholder="Название..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="nl-input"
        value={timezoneOffset}
        type="number"
        placeholder="Временная зона..."
        min={-12}
        max={12}
        onChange={(e) => setTimezoneOffset(parseInt(e.target.value))}
      />
      <button
        className="nl-button"
        disabled={name === '' || timezoneOffset === ''}
        onClick={(e) => {
          e.preventDefault();
          addPlace(name, timezoneOffset);
          setName('');
          setTimezoneOffset('');
        }}
      >
        Добавить
      </button>
    </form>
  );
}
