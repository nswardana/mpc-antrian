import React ,{useState,useEffect}from 'react';

import { Card, Box, Typography, Divider } from "@mui/material";

const CardClock = props => {
    const [hours,setHours]=useState("00");
    const [minutes,setMinutes]=useState("00");
    const [seconds,setSeconds]=useState("00");
    const [date,setDate]=useState("date");
    useEffect(
        ()=>{
            const intervalId= setInterval(()=>{
            let d=new Date();
            var h=d.getHours();
            var m=d.getMinutes().toString();
            var s=d.getSeconds().toString();
            h=(h%12)||12;
            h=h.toString();
            var z=d.getDate().toString().padStart(2,'0')+" / "
            +(d.getMonth()+1).toString().padStart(2,'0')+" / "+d.getFullYear();
            setDate(z);
            setHours(h.padStart(2,'0'));
            setMinutes(m.padStart(2,'0'));
            setSeconds(s.padStart(2,'0'));
        
        
            return () => clearInterval(intervalId); 
            },1000);
        },[seconds,minutes,hours,date]);

  return (
        <Box textAlign="center" pl={5} pr={5}>
            <Typography color="#000" sx={{fontWeight: 'bold', backgroundColor: '#FFF', borderRadius: '16px'}} variant="h5"> {date}</Typography>
            <Typography variant="h3" component="h3" color="#dc2440" sx={{fontWeight: 'bold'}} >
            {hours}:{minutes}:{seconds}
            </Typography>
          </Box>

  );
};

export default CardClock;
