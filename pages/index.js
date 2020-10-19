import Head from 'next/head';
import Iframe from 'react-iframe'
import adhan from 'adhan';
import moment from 'moment-timezone';
import useSound from 'use-sound';

import Logo from '../images/logo.svg';
import SoundUrl from '../sound/audio2.mp3';
import React, { useState, useEffect } from 'react';

import CustomTime from './CustomTime';


const PlayButton = () => {
  const [play] = useSound(
    SoundUrl,
    {
      onend: () => {
        console.info('Sound ended!');
      },
      volume: 0.9,
      loop: true,
    }
  );
  return <button onClick={play}>Play</button>;
};

export default function Home() {
  const [prayerTimings, setPrayerTimings] = useState({
    fajrTime: '',
    dhuhrTime: '',
    asrTime: '',
    maghribTime: '',
    ishaTime: '',
    sunriseTime: ''
  });

  useEffect(() => {
    if (!((navigator || {}).geolocation || {}).getCurrentPosition) {
      return;
    }

    const getPrayerTime = prayerTime => moment(prayerTime).tz('Asia/Dubai').format('h:mm A');

    navigator.geolocation.getCurrentPosition(async ({ coords = {} }) => {
      const { latitude, longitude } = coords;
      const date = new Date();
      const coordinates = new adhan.Coordinates(latitude, longitude);
      const params = adhan.CalculationMethod.MuslimWorldLeague();
//      params.madhab = adhan.Madhab.Hanafi;
      params.madhab = adhan.Madhab.Shafi;

      const {
        asr, fajr, isha, dhuhr, maghrib, sunrise,
      } = new adhan.PrayerTimes(coordinates, date, params);

      const asrTime = getPrayerTime(asr);
      const fajrTime = getPrayerTime(fajr);
      const ishaTime = getPrayerTime(isha);
      const dhuhrTime = getPrayerTime(dhuhr);
      const maghribTime = getPrayerTime(maghrib);
      const sunriseTime = getPrayerTime(sunrise);
      setPrayerTimings({fajrTime,dhuhrTime ,asrTime, maghribTime, ishaTime, sunriseTime});
    });
  });

  return (
    <div id='wrapper'>
      <Head>
        <title>Khilafat</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

{/*      <header className='header'>
        <div className='logo-holder'>
          <a href="/">
            <Logo className='logo' />
          </a>
        </div>
      </header>
    */}

      <PlayButton />

      <main>
        <ul>
          {['fajrTime', 'sunriseTime', 'dhuhrTime', 'asrTime', 'maghribTime', 'ishaTime'].map(key => 
            <li key={key}>
              <strong>{key}:</strong>
              <span>{prayerTimings[key]}</span>
            </li>
          )}
        </ul>
  
        <CustomTime />


        <Iframe url="https://timesprayer.com/widgets.php?frame=2&amp;lang=en&amp;name=dubai&amp;sound=true&amp;fcolor=1B646A&amp;tcolor=26A2B5&amp;frcolor=113030"
          width="100%"
          height="240px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
      
      </main>
    </div>
  )
}
