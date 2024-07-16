// components/CheckKV.js
import { kv } from '@vercel/kv';
import { useState, useEffect } from'react';

const CheckKV = () => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    async function listKeys() {
      try {
        const keys = await kv.list();
        setKeys(keys);
      } catch (error) {
        console.error('Error listing keys:', error);
      }
    }
    listKeys();
  }, []);

  return (
    <div>
      <h2>Keys in KV store:</h2>
      <ul>
        {keys.map((key, index) => (
          <li key={index}>{key}</li>
        ))}
      </ul>
    </div>
  );
};

export default CheckKV;