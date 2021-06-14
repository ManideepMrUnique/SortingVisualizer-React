import { useRef,useEffect, useState } from 'react';
import BarChart from './BarChart';
import ButtonCom from './ButtonCom';
import SliderCom from './SliderCom';
import Header from './Header';
const Temp=()=>{
    const ar=useRef([]);
    let lab=[];
    const backAr=useRef([]);
    const name=useRef("BubbleSort");
    let boardAr=[];
    for(let i=0;i<10;i++)
    {
        ar.current.push(Math.floor(1+(Math.random()*10)));
        lab.push('bar');
        backAr.current.push('rgba(255, 206, 86, 0.2)');
        boardAr.push('rgba(255, 206, 86, 1)');
    }
    const [arVal,setarVal]=useState([...ar.current]);
    const [back,setBack]=useState([...backAr.current]);
    const [board,setBoard]=useState([...boardAr]);
    const [labe,setLabe]=useState([...lab]);
    const [tim,setTim]=useState(false);
    const [intervalTime,setIntervalTime]=useState(200);
    const  generateNewSize=(size)=>{
         ar.current=[];
         lab=[];
         backAr.current=[];
         boardAr=[];
         for(let i=0;i<size;i++)
        {
        ar.current.push(Math.floor(1+(Math.random()*size)));
        lab.push('bar');
        backAr.current.push('rgba(255, 206, 86, 0.2)');
        boardAr.push('rgba(255, 206, 86, 1)');
        }
        setarVal([...ar.current]);
        setLabe([...lab]);
        setBack([...backAr.current]);
        setBoard([...boardAr]);
        setTim(false);
        i.current=0;
        j.current=1;
        f.current=size-2;
    }
    const interval=useRef(null);
    const i=useRef(0);
    const j=useRef(1);
    const f=useRef(arVal.length-2);
    useEffect(()=>{
        if(tim)
        {
            interval.current=setInterval(()=>{
                console.log('Interval running');
                setarVal((pre)=>{
                    if(pre[i.current]>pre[j.current])
                        [pre[i.current],pre[j.current]]=[pre[j.current],pre[i.current]];
                    setBack((preB)=>{
                        if(i.current===0&&j.current===1)
                        {
                            preB[arVal.length-1]='rgba(255, 206, 86, 0.2)';
                            preB[arVal.length-2]='rgba(255, 206, 86, 0.2)';
                        }
                        if(i.current!==0) preB[i.current-1]='rgba(255, 206, 86, 0.2)';
                        preB[i.current]='black';
                        preB[j.current]='black';
                        return [...preB];
                    });
                    return [...pre];
                });
                if(i.current===arVal.length-2) {
                    i.current=0;
                    j.current=1;
                    f.current--;
                }
                else if(f.current===0)
                {
                    setBack([...backAr.current]);
                    clearInterval(interval.current);
                }
                else
                {
                    i.current++;
                    j.current++; 
                }
                
            },intervalTime)
        }
        return ()=>{clearInterval(interval.current)}

    },[tim,intervalTime,arVal]);
    const markAr=[
        {
            value:0,
            label:"0"
        },
        {
            value:15,
            label:"15"
        },
        {
            value:30,
            label:"30"
        }
    ];
    const markSp=[
        {
            value:0,
            label:"0"
        },
        {
            value:500,
            label:"500"
        },
        {
            value:1000,
            label:"1000"
        }
    ];
    return (
        <>
            <Header/>
            <SliderCom
                markAr={markAr}
                markSp={markSp}
                generatingArr={(val)=>{
                    generateNewSize(val);
                }}
                settingTimer={(val)=>{
                    setTim(val);
                }}
                settingInterval={(val)=>{
                    setIntervalTime(val);
                }}
            />
            <BarChart
                ar={arVal}
                bG={back}
                bB={board}
                lb={labe}
                AlgoName={name.current}
            />
            <br/>
            <ButtonCom
                arr={arVal}
                settingTimer={(val)=>{
                    setTim(val);
                }}
                generatingArr={(val)=>{
                    generateNewSize(val);
                }}
            />
        </>
    );
}
export default Temp;