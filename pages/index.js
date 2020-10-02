import Head from 'next/head';
import Logo from '../images/logo.svg';
import Iframe from 'react-iframe'
import adhan from 'adhan';
import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';


export default function Home() {
  useEffect(() => {

    // var onSuccess = function(position) {

    //   // console.log(position.coords.latitude);
    //   // console.log(position.coords.longitude);
    //   // console.log(position.coords.accuracy);
    //   // console.log(position.coords.altitude);
    //   // console.log(position.coords.altitudeAccuracy);
    //   // console.log(position.coords.heading);
    //   // console.log(position.coords.speed);
    //   // console.log(position.coords.timestamp);
      
    // };
 
    // function onError(error) {
    //     alert('code: '    + error.code    + '\n' +
    //           'message: ' + error.message + '\n');
    // }
 
    // navigator.geolocation.getCurrentPosition(onSuccess, onError);



var aaaa, b;

if('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(function(position) {
    window.aaaa = position;
    console.log({ lat: position.coords.latitude, lng: position.coords.longitude });
  });
}

console.log(navigator.geolocation);
  console.log('aaaa', aaaa);

    var locationLat = 25.2697;
    var locationLong = 55.3095;


    var date = new Date();
    var coordinates = new adhan.Coordinates(locationLat, locationLong);
    var params = adhan.CalculationMethod.MuslimWorldLeague();
    params.madhab = adhan.Madhab.Hanafi;
    var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
     
    var fajrTime = moment(prayerTimes.fajr).tz('Asia/Dubai').format('h:mm A');
    var sunriseTime = moment(prayerTimes.sunrise).tz('Asia/Dubai').format('h:mm A');
    var dhuhrTime = moment(prayerTimes.dhuhr).tz('Asia/Dubai').format('h:mm A');
    var asrTime = moment(prayerTimes.asr).tz('Asia/Dubai').format('h:mm A');
    var maghribTime = moment(prayerTimes.maghrib).tz('Asia/Dubai').format('h:mm A');
    var ishaTime = moment(prayerTimes.isha).tz('Asia/Dubai').format('h:mm A');


    console.log(fajrTime);
    console.log(sunriseTime);
    console.log(dhuhrTime);
    console.log(asrTime);
    console.log(maghribTime);
    console.log(ishaTime);



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
