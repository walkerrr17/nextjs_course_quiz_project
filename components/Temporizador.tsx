import React from "react";

import { useState, useEffect, useRef } from "react";



import styles from "@/styles/Temporizador.module.css";

import QuestaoModel from "../model/questao";



interface Props {

  duracao: number;

  msg1: string; //mensagem superior do numero

  msg2: string; //mensagem inferior do numero

  onComplete: () => void;

  questao: QuestaoModel;

}



const Temporizador = ({ duracao, onComplete, questao, msg1, msg2 }: Props) => {

  const [seconds, setSeconds] = useState<number>(0);

  const [offset, setOffset] = useState<number>(0);

  const [stroke, setstroke] = useState("#a1e75e");

  const ref = useRef<HTMLDivElement>(null);

  const lengthStroke = 527.78; // circuferencia do timer



  useEffect(() => {

    if (ref.current) {

      setSeconds(duracao);

      setOffset(0);

      const interval = setInterval(() => {

        setSeconds((prev) => prev - 1);

      }, 1000);

      return () => clearInterval(interval);

    }

  }, [questao.id, duracao]);



  const encher = lengthStroke / duracao / 20;

  useEffect(() => {

    const interval = setInterval(() => {

      setOffset((prev) => prev + encher);

      if (seconds >= duracao || seconds > duracao * 0.5) {

        setstroke("#95e04e");

      } else if (seconds >= duracao * 0.3) {

        setstroke("#F7B801");

      } else if (seconds > duracao * 0.15) {

        setstroke("#df4439");

      } else if (seconds === 0) {

        setOffset(0);

        onComplete();

        setSeconds(duracao);

        clearInterval(interval);

      }

    }, 52);

    return () => clearInterval(interval);

  }, [seconds, encher, duracao, onComplete]);



  return (

    <div ref={ref} className={styles.temporizador}>

      <svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">

        <path

          d="m 90,6 a 84,84 0 1,0 0,168 a 84,84 0 1,0 0,-168"

          fill="none"

          stroke="#d9d9d9"

          strokeWidth="12"

        ></path>

        <path

          d="m 90,6 a 84,84 0 1,0 0,168 a 84,84 0 1,0 0,-168"

          fill="none"

          stroke={stroke} // cor da borda

          strokeLinecap="round"

          strokeWidth="12"

          strokeDasharray="527.7875658030853"

          strokeDashoffset={offset} // circunferencia

        ></path>

      </svg>

      <div style={{ color: stroke }} className={styles.temp_container} >

        <span className={styles.msg}>{msg1}</span>

        <span>{seconds}</span>

        <span className={styles.msg}>{msg2}</span>

    </div>

    </div>

  );

};



export default Temporizador;