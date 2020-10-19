import Head from 'next/head';
import Iframe from 'react-iframe'
import adhan from 'adhan';
import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';



export default function Home() {

  const [cusTime, setCusTime] = useState(1);
  
  useEffect(() => {
      const date = new Date();
      setCusTime({ Seconds : date.getSeconds() });
  });

  return (
    <div id='wrapper'>
      
      {['Seconds'].map(key => 
        <span abc={cusTime[key]} key={key}>{cusTime[key]}</span>
      )}

    </div>
  )
}




















