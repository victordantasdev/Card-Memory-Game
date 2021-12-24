/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {
  createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState,
} from 'react';
import { parseCookies, setCookie } from 'nookies';

interface CountdownContextData {
  win: boolean;
  minutes: number;
  seconds: number;

  bestTimeEasy: string;
  lostTimesEasy: number;
  winTimesEasy: number;

  bestTimeMedium: string;
  lostTimesMedium: number;
  winTimesMedium: number;

  bestTimeHard: string;
  lostTimesHard: number;
  winTimesHard: number;

  isActive: boolean;
  hasFinished: boolean;
  minuteLeft: string;
  minuteRight: string;
  secondLeft: string;
  secondRight: string;
  resetCountdown: (n?: number, l?: string) => void;
  stopCountdown: (level?: string | null | undefined) => void;
  startCountdown: (t: number) => void;
  setWin: Dispatch<SetStateAction<boolean>>;

  setWinTimesEasy: Dispatch<SetStateAction<number>>;
  setWinTimesMedium: Dispatch<SetStateAction<number>>;
  setWinTimesHard: Dispatch<SetStateAction<number>>;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownConext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [fullTime, setFullTime] = useState(5);
  const cookies = parseCookies();

  const [time, setTime] = useState(fullTime * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [win, setWin] = useState(false);

  const [bestTimeEasy, setBestTimeEasy] = useState(cookies.BEST_TIME_EASY || '00:00');
  const [lostTimesEasy, setLostTimesEasy] = useState(Number(cookies.LOST_TIMES_EASY) || 0);
  const [winTimesEasy, setWinTimesEasy] = useState(Number(cookies.WIN_TIMES_EASY) || 0);

  const [bestTimeMedium, setBestTimeMedium] = useState(cookies.BEST_TIME || '00:00');
  const [lostTimesMedium, setLostTimesMedium] = useState(Number(cookies.LOST_TIMES) || 0);
  const [winTimesMedium, setWinTimesMedium] = useState(Number(cookies.WIN_TIMES) || 0);

  const [bestTimeHard, setBestTimeHard] = useState(cookies.BEST_TIME_HARD || '00:00');
  const [lostTimesHard, setLostTimesHard] = useState(Number(cookies.LOST_TIMES_HARD) || 0);
  const [winTimesHard, setWinTimesHard] = useState(Number(cookies.WIN_TIMES_HARD) || 0);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const cards = () => document.querySelectorAll('.card');

  function startCountdown(t: number) {
    setFullTime(t);

    new Audio('/sounds/click.mp3').play();
    setIsActive(true);
    setWin(false);

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

  function resetCountdown(n: number = fullTime, l: string = 'Easy') {
    new Audio('/sounds/click.mp3').play();
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(n * 60);
    setHasFinished(false);
    setWin(false);

    cards().forEach((card) => {
      card.classList.add('-locked');
      card.classList.remove('-match');
    });
  }

  function stopCountdown(level: string | null | undefined) {
    clearTimeout(countdownTimeout);
    setIsActive(true);
    setTime(time);
    setHasFinished(false);

    const bestTimeStr = `${minuteLeft}${minuteRight}:${secondLeft}${secondRight}`;

    if (level === 'Easy') {
      if (bestTimeStr <= cookies.BEST_TIME_EASY || bestTimeStr !== '00:00') {
        setBestTimeEasy(bestTimeStr);

        setCookie(null, 'BEST_TIME_EASY', bestTimeStr, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      }
    } else if (level === 'Medium') {
      if (bestTimeStr <= cookies.BEST_TIME_MEDIUM || bestTimeStr !== '00:00') {
        setBestTimeMedium(bestTimeStr);

        setCookie(null, 'BEST_TIME_MEDIUM', bestTimeStr, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      }
    } else if (level === 'Hard') {
      if (bestTimeStr <= cookies.BEST_TIME_HARD || bestTimeStr !== '00:00') {
        setBestTimeHard(bestTimeStr);

        setCookie(null, 'BEST_TIME_HARD', bestTimeStr, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      }
    }
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        new Audio('/sounds/tik.mp3').play();
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      new Audio('/sounds/lose.mp3').play();

      clearTimeout(countdownTimeout);
      setIsActive(false);
      setTime(time);
      setHasFinished(true);
      setWin(false);

      setTimeout(() => {
        setTime(fullTime * 60);
        setHasFinished(false);
      }, 1500);

      cards().forEach((card) => {
        card.classList.add('-locked');
        card.classList.remove('-match');
      });

      const $level = document.querySelector('.-selected')?.textContent;
      if ($level === 'Easy') {
        setLostTimesEasy(Number(lostTimesEasy) + 1);
        setCookie(null, 'LOST_TIMES_EASY', String(lostTimesEasy + 1), {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      } else if ($level === 'Medium') {
        setLostTimesMedium(Number(lostTimesMedium) + 1);
        setCookie(null, 'LOST_TIMES_MEDIUM', String(lostTimesMedium + 1), {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      } else if ($level === 'Hard') {
        setLostTimesHard(Number(lostTimesHard) + 1);
        setCookie(null, 'LOST_TIMES_HARD', String(lostTimesHard + 1), {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      }
    }
  }, [isActive, time]);

  return (
    <CountdownConext.Provider value={{
      win,
      minutes,
      seconds,
      isActive,

      bestTimeEasy,
      lostTimesEasy,
      winTimesEasy,

      bestTimeMedium,
      lostTimesMedium,
      winTimesMedium,

      bestTimeHard,
      lostTimesHard,
      winTimesHard,

      hasFinished,
      minuteLeft,
      minuteRight,
      secondLeft,
      secondRight,
      setWin,

      setWinTimesEasy,
      setWinTimesMedium,
      setWinTimesHard,

      startCountdown,
      resetCountdown,
      stopCountdown,
    }}
    >
      {children}
    </CountdownConext.Provider>
  );
}
