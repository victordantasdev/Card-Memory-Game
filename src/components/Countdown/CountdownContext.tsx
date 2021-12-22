/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {
  createContext, ReactNode, useEffect, useState,
} from 'react';
import { parseCookies, setCookie } from 'nookies';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  bestTime: string;
  startCountdown: () => void;
  resetCountdown: () => void;
  stopCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownConext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const fullTime = 0.5;
  const cookies = parseCookies();

  const [time, setTime] = useState(fullTime * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [bestTime, setBestTime] = useState(cookies.BEST_TIME || '00:00');

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const cards = () => document.querySelectorAll('.card');

  function startCountdown() {
    setIsActive(true);

    cards().forEach((card) => {
      card.classList.add('-active');
    });

    setTimeout(() => {
      cards().forEach((card) => {
        card.classList.remove('-active');
        card.classList.remove('-locked');
      });
    }, 1000);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(fullTime * 60);
    setHasFinished(false);

    cards().forEach((card) => {
      card.classList.add('-locked');
      card.classList.remove('-match');
    });
  }

  function stopCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(true);
    setTime(time);
    setHasFinished(false);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    const bestTimeStr = `${minuteLeft}${minuteRight}:${secondLeft}${secondRight}`;
    if (bestTimeStr <= cookies.BEST_TIME || bestTimeStr !== '00:00') {
      setBestTime(bestTimeStr);

      setCookie(null, 'BEST_TIME', bestTimeStr, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);

      cards().forEach((card) => {
        card.classList.add('-locked');
      });
    }
  }, [isActive, time]);

  return (
    <CountdownConext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      bestTime,
      startCountdown,
      resetCountdown,
      stopCountdown,
    }}
    >
      {children}
    </CountdownConext.Provider>
  );
}
