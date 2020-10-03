import Head from 'next/head';
import Logo from '../images/logo.svg';
import Iframe from 'react-iframe'
import adhan from 'adhan';
import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    if (!navigator && !navigator.geolocation && !navigator.geolocation.getCurrentPosition) {
      return;
    }

    const getPrayerTime = prayerTime => moment(prayerTime).tz('Asia/Dubai').format('h:mm A');

    navigator.geolocation.getCurrentPosition(async ({ coords = {} }) => {
      const { latitude, longitude } = coords;

      const date = new Date();
      const coordinates = new adhan.Coordinates(latitude, longitude);
      const params = adhan.CalculationMethod.MuslimWorldLeague();
      params.madhab = adhan.Madhab.Hanafi;

      const {
        asr, fajr, isha, dhuhr, maghrib, sunrise,
      } = new adhan.PrayerTimes(coordinates, date, params);

      const asrTime = getPrayerTime(asr);
      const fajrTime = getPrayerTime(fajr);
      const ishaTime = getPrayerTime(isha);
      const dhuhrTime = getPrayerTime(dhuhr);
      const maghribTime = getPrayerTime(maghrib);
      const sunriseTime = getPrayerTime(sunrise);

      console.log('fajrTime', fajrTime);
      console.log('sunriseTime', sunriseTime);
      console.log('dhuhrTime', dhuhrTime);
      console.log('asrTime', asrTime);
      console.log('maghribTime', maghribTime);
      console.log('ishaTime', ishaTime);
    });
  });


  return (
    <div id='wrapper'>
      <Head>
        <title>Khilafat</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <header className='header'>
        <div className='logo-holder'>
          <a href="/">
            <Logo className='logo' />
          </a>
        </div>
      </header>
      <main>

{/*
    <Iframe url="https://timesprayer.com/widgets.php?frame=2&amp;lang=en&amp;name=dubai&amp;sound=true&amp;fcolor=1B646A&amp;tcolor=26A2B5&amp;frcolor=113030"
        width="100%"
        height="240px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
*/ }
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  )
}
