"use client";
import Head from 'next/head';
import '@/app/globals.css';
import { Bodoni_Moda, Beau_Rivage, Roboto, Poppins } from 'next/font/google';
import { useState, useEffect } from 'react';
import moment from 'moment';
import WeddingImage1 from "@/app/img/FOTO WEDDING/_WIL8165.jpg";
import WeddingImage2 from "@/app/img/FOTO WEDDING/_WIL8168.jpg";
import WeddingImage3 from "@/app/img/FOTO WEDDING/_WIL8173.jpg";
import JeffyRuth from "@/app/img/FOTO WEDDING/jeffry-ruth 03.jpg";
import { useSwipeable } from 'react-swipeable';

const LoraFont = Bodoni_Moda({
  weight: '400',
  subsets: ['latin']
});

const BeauFont = Beau_Rivage({
  weight: '400',
  subsets: ['latin']
});

const RobotoFont = Roboto({
  weight: '400',
  subsets: ['latin']
});

const PoppinsFont = Poppins({
  weight: '400',
  subsets: ['latin']
});

const PoppinsBold = Poppins({
  weight: '800',
  subsets: ['latin']
});

const images = [WeddingImage1, WeddingImage2, WeddingImage3];

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetDate = moment("2024-10-20");
    const updateCountdown = () => {
      const now = moment();
      const duration = moment.duration(targetDate.diff(now));
      setTimeLeft({
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const handleSwipeLeft = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex < images.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex; // Do not change if it's the last image
    });
  };

  const handleSwipeRight = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex; // Do not change if it's the first image
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    trackMouse: true
  });

  return (
    <div>
      <Head>
        <title>Sanches Liza</title>
        <meta name="description" content="Floral Designer, Wedding Planner, and Event Enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-screen relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center h-screen transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <header className="bg-transparent relative z-10">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <nav>
              <a href="#left" className="mx-2 text-2xl playWrite text-white">Ryan</a>
            </nav>
            <nav>
              <a href="#right" className="mx-2 text-2xl playWrite text-white">Syifa</a>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h2 className="text-lg text-white">The Wedding of</h2>
            <h4 className={`${LoraFont.className} text-5xl pt-3 font-bold text-white`}>RYAN EKA</h4>
            <h6 className={`text-3xl ${BeauFont.className} font-bold text-white mt-3`}>Triana</h6>
            <h4 className={`text-2xl pt-3 ${LoraFont.className} text-white`}>&</h4>
            <h4 className={`${LoraFont.className} text-5xl pt-3 font-bold text-white`}>SYIFA EKA</h4>
            <h6 className={`text-3xl ${BeauFont.className} font-bold text-white mt-3`}>Hardiansyah</h6>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className={`container mx-auto px-4 text-center ${PoppinsFont.className} text-white`}>
          <h2 className="text-4xl text-white font-bold">Save the Date</h2>
          <p className='text-xs pt-5'>"Seperti matahari terbenam yang indah, cinta kami bersinar. Bergabunglah dengan kami dalam merayakan awal baru ini."</p>
          <div className="flex justify-center mt-4">
            <svg className="pulse-animation" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <div className="countdown mt-6 text-3xl border-t-2 border-y-2">
            <p className='py-4'>{`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}</p>
          </div>
          <p className="text-sm text-white mt-4">Sabtu, 20 Oktober 2024</p>
        </div>
      </section>


      {/* Akad Nikah */}
      <div className='bg-slate-300 w-full h-full flex justify-center items-center py-6'>
          <div className='bg-white shadow-md rounded-md w-80 h-[500px] text-center flex flex-col justify-center items-center rounded-t-full'>
              <div>
                  <h1 className={`text-2xl font-bold ${PoppinsBold.className}`}>Akad Nikah</h1>

                  {/* Description Akad Nikah */}
                  <div className={`${RobotoFont.className} pt-4 text-sm`}>
                    <h1>SABTU</h1>
                    <h1 className='text-4xl font-bold'>03</h1>
                    <h1>AGUSTUS 2024</h1>
                    <h1>Pukul : 09.00 - 11.00 WIB</h1>
                    <h1>Grand Andaliman Hall</h1>
                    <h1>Jl. Abdullah Lubis No.79/101, Merdeka, Kec. Medan Baru, Kota Medan, Sumatera Utara</h1>
                  </div>
                  
              </div>
              <button className='bg-gray-200 w-52 h-10 rounded-full mt-4'>
                  <div className='flex text-center items-center justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      <h1>Lokasi Acara</h1>
                  </div>
              </button>
          </div>
      </div>


      {/* Resepsi */}
      <div className='bg-slate-300 w-full h-full flex justify-center items-center py-6'>
          <div className='bg-white shadow-md rounded-md w-80 h-[500px] text-center flex flex-col justify-center items-center rounded-t-full'>
          
          <h1 className={`text-2xl font-bold ${PoppinsBold.className}`}>Resepsi</h1>

          {/* Description Akad Nikah */}
          <div className={`${RobotoFont.className} pt-4 text-sm`}>
            <h1>SABTU</h1>
            <h1 className='text-4xl font-bold'>03</h1>
            <h1>AGUSTUS 2024</h1>
            <h1>Pukul : 09.00 - 11.00 WIB</h1>
            <h1>Grand Andaliman Hall</h1>
            <h1>Jl. Abdullah Lubis No.79/101, Merdeka, Kec. Medan Baru, Kota Medan, Sumatera Utara</h1>
          </div>

          <button className='bg-gray-200 w-52 h-10 rounded-full mt-4'>
            <div className='flex text-center items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <h1>Lokasi Acara</h1>
            </div>
          </button>
        </div>
      </div>

      {/* Teh Pai */}
      <div className='bg-slate-300 w-full h-full flex justify-center items-center py-6'>
          <div className='bg-white shadow-md rounded-md w-80 h-[500px] text-center flex flex-col justify-center items-center rounded-t-full'>
          <h1 className={`text-2xl font-bold ${PoppinsBold.className}`}>Teh Pai</h1>

          {/* Description Akad Nikah */}
          <div className={`${RobotoFont.className} pt-4 text-sm`}>
            <h1>SABTU</h1>
            <h1 className='text-4xl font-bold'>03</h1>
            <h1>AGUSTUS 2024</h1>
            <h1>Pukul : 09.00 - 11.00 WIB</h1>
            <h1>Grand Andaliman Hall</h1>
            <h1>Jl. Abdullah Lubis No.79/101, Merdeka, Kec. Medan Baru, Kota Medan, Sumatera Utara</h1>
          </div>

          <button className='bg-gray-200 w-52 h-10 rounded-full mt-4'>
            <div className='flex text-center items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <h1>Lokasi Acara</h1>
            </div>
          </button>
        </div>
      </div>

      {/* Our Gallery */}
      <div className={`text-center pt-7 ${PoppinsFont.className}`}>
        <h1 className='text-3xl font-bold'>Our Gallery</h1>
        <p className="text-sm text-gray-600 pt-3">We've got a lot to show you!</p>
        <p className="text-xs text-gray-600 pt-2 mb-3">Swipe Left →</p>
        <div {...handlers} className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-[500px] flex justify-center items-center">
                <img src={image.src} alt={`Gallery Image ${index + 1}`} className="object-cover h-full w-auto rounded-md shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Powered By */}
      <div className='text-center my-16'>
        <h1>Powered By</h1>
        <h1>Darwan</h1>
      </div>
    </div>
  );
}
