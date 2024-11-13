import React from "react";
import { useState, useEffect } from "react";
import {Box,Grid} from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import CardClock from "./CardClock";
import CardAntrian from "./CardAntrian";
import CardAntrianGrooming from "./CardAntrianGrooming";
import io from "socket.io-client";
import configData from "../config.json";
import { useSpeechSynthesis } from 'react-speech-kit';
import ReactPlayer from 'react-player/youtube'

const AdminDashboard = () => {
  const [socket, setSocket] = useState(io.connect(configData.apiUrl));
  const [textAntrian, setText] = useState("Selamat datang di Sistem Antrian Klinik");
  const { speak,voices } = useSpeechSynthesis();

  useEffect(() => {
   
    console.log("useEffect AdminDashboard");
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
    if(isChrome)
      console.log("Pakai chrome");

    var vo= window.speechSynthesis.getVoices();
    console.log(vo[6]);
    speak({ text: "Selamat datang di Sistem Antrian Klinik" ,voice:vo[6], rate:0.8, pitch:1 });
    socket.on("data_next_patient", (data) => {
			console.log("AdminDashboard : data_next_patient");
      console.log(data); // Log the received message data to the console
      if (data!== null && Object.keys(data).length > 0) {
        // the variable is defined
        var textAntrian= "Nomor antrian "+data.ticketNumber.toString().padStart(4, "0")+" Silahkan masuk";
        console.log(textAntrian);
        speak({ text: "Nomor antrian "+data.ticketNumber.toString().padStart(4, "0")+" Silahkan masuk",voice:vo[6], rate:0.8, pitch:1 });  
      }

    });

    socket.on("data_recall", (data) => {
      console.log("AdminDashboard : data_recall");
      console.log(data); // Log the received message data to the console
      var textAntrian= "Panggilan ulang, Nomor antrian "+data.toString().padStart(4, "0")+" Silahkan masuk";
      console.log(textAntrian);
      speak({ text: "Panggilan ulang, Nomor antrian "+data.toString().padStart(4, "0")+" Silahkan masuk",voice:vo[6], rate:0.8, pitch:1 });  
    

    });

    return () => socket.off('data_next_patient');
    
  }, [socket]);



  return (
    <>
      <Grid container style={{  height: '100vh',}}>
        <Grid item xs={3} sm={3} md={3} p={1} sx={{ backgroundColor: '#9AB447' }}  >   
          <CardAntrian socket={socket}/>
          <CardAntrianGrooming socket={socket}/>
        </Grid>
        <Grid item xs={9} sm={9} md={9} p={0}>
          <Box sx={{ height: "22%", marginTop: 0, backgroundColor: '#008f8f'}} >
            <Grid container sx={{ pt:1, marginLeft:0}}>
              <Grid item xs={4} sm={4} md={4}></Grid>
              <Grid item xs={8} sm={4} md={4} p={0} >
                 <Box textAlign="center"  pt={3}>
                 <CardClock />
                </Box>
              </Grid>
              <Grid item xs={8} sm={4} md={4} p={0} textAlign="right" >
              <Box textAlign="right">
              <CardMedia component="img" sx={{ width: "70%", height : "80%" ,pb:1,pt:1, pl:1,pr:1, backgroundColor: '#FFF', opacity:"90%", borderRadius: '16px', marginTop:0, marginLeft:0}}
              image="./Logo-Armonia.png"
              alt="MPC ICON"
              /> 
              </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{height: "1%", marginTop: 0,  backgroundColor: '#9AB447'}}/>
          <Box sx={{height: "100%",marginTop: 0,  backgroundColor: '#FFF'}}>
          <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ob166FOAhb0'
          width='100%'
          height='77%'
        />

            {/*}
             <CardMedia
              component="img"
              sx={{  objectFit: "fill",marginLeft: 0, width: "100%", height : "100%", backgroundColor: '#FFF', borderRadius: '0px'}}
              image="./cat-gigi.jpg"
              alt="MPC ICON"/>
            {*/}

         </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminDashboard;
