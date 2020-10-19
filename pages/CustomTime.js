import adhan from 'adhan';
import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';

export default function CustomTime() {

  const [cusTime, setCusTime] = useState({
    hours: '',
    minutes: '',
    seconds: ''
  });
  
  useEffect(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setCusTime({ hours, minutes, seconds });
  }

  );

  return (
    <div id='second-holder' className={cusTime['seconds']==10 ? 'true' : 'false'}>
      <ul>
        <li>{cusTime['hours']}</li>
        <li>{cusTime['minutes']}</li>
        <li>{cusTime['seconds']}</li>
      </ul>
    </div>
  )
}

