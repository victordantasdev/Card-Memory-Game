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

  bestTimeEasy: number;
  winTimesEasy: number;
  lostTimesEasy: number;

  bestTimeMedium: number;
  winTimesMedium: number;
  lostTimesMedium: number;

  bestTimeHard: number;
  winTimesHard: number;
  lostTimesHard: number;

  isActive: boolean;
  minuteLeft: string;
  secondLeft: string;
  minuteRight: string;
  secondRight: string;
  isModalOpen: boolean;
  hasFinished: boolean;
  level: string | null | undefined;

  startCountdown: (t: number) => void;
  resetCountdown: (n?: number) => void;
  setWin: Dispatch<SetStateAction<boolean>>;
  toggleModal: (level?: string | null | undefined) => void;
  stopCountdown: (level?: string | null | undefined) => void;

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

  const [win, setWin] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(fullTime * 60);
  const [isModalOpen, setModalState] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [level, setLevel] = useState<string | null | undefined>('');

  const [bestTimeEasy, setBestTimeEasy] = useState(Number(cookies.BEST_TIME_EASY) || 0);
  const [lostTimesEasy, setLostTimesEasy] = useState(Number(cookies.LOST_TIMES_EASY) || 0);
  const [winTimesEasy, setWinTimesEasy] = useState(Number(cookies.WIN_TIMES_EASY) || 0);

  const [bestTimeMedium, setBestTimeMedium] = useState(Number(cookies.BEST_TIME_MEDIUM) || 0);
  const [lostTimesMedium, setLostTimesMedium] = useState(Number(cookies.LOST_TIMES) || 0);
  const [winTimesMedium, setWinTimesMedium] = useState(Number(cookies.WIN_TIMES) || 0);

  const [bestTimeHard, setBestTimeHard] = useState(Number(cookies.BEST_TIME_HARD) || 0);
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

  function resetCountdown(n: number = fullTime) {
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

  function stopCountdown($level: string | null | undefined) {
    clearTimeout(countdownTimeout);
    setIsActive(true);
    setTime(time);
    setHasFinished(false);
    if ($level === 'Easy') {
      if (time >= Number(cookies.BEST_TIME_EASY) || bestTimeEasy === 0) {
        setBestTimeEasy(time);

        setCookie(null, 'BEST_TIME_EASY', time.toString(), {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      }
    } else if ($level === 'Medium') {
      if (time >= Number(cookies.BEST_TIME_MEDIUM) || bestTimeMedium === 0) {
        setBestTimeMedium(time);

        setCookie(null, 'BEST_TIME_MEDIUM', time.toString(), {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      }
    } else if ($level === 'Hard') {
      if (time >= Number(cookies.BEST_TIME_HARD) || bestTimeHard === 0) {
        setBestTimeHard(time);

        setCookie(null, 'BEST_TIME_HARD', time.toString(), {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      }
    }
  }

  function toggleModal($level: string | null | undefined) {
    setLevel($level);
    setModalState(!isModalOpen);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        new Audio('/sounds/tik.mp3').play();
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      new Audio('/sounds/lose.mp3').play();

      setTime(time);
      setWin(false);
      setIsActive(false);
      setHasFinished(true);
      clearTimeout(countdownTimeout);

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
      level,
      minutes,
      seconds,
      isActive,
      isModalOpen,

      bestTimeEasy,
      lostTimesEasy,
      winTimesEasy,

      bestTimeMedium,
      lostTimesMedium,
      winTimesMedium,

      bestTimeHard,
      lostTimesHard,
      winTimesHard,

      minuteLeft,
      secondLeft,
      hasFinished,
      minuteRight,
      secondRight,

      setWin,
      toggleModal,
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
