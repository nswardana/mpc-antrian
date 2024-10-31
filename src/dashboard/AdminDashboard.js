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


const AdminDashboard = () => {
  const [socket, setSocket] = useState(io.connect(configData.apiUrl));
  const [textAntrian, setText] = useState("Selamat datang di Sistem Antrian Klinik");
  const { speak,voices } = useSpeechSynthesis();

  /*
  const {
    Text, // Component that returns the modified text property
  
    speechStatus, // String that stores current speech status
    isInQueue, // Boolean that stores whether a speech utterance is either being spoken or present in queue
    start, // Function to start the speech or put it in queue
    pause, // Function to pause the speech
    stop, // Function to stop the speech or remove it from queue
  } = useSpeech({ text: textAntrian,pitch: 1,rate: 0.8,volume: 1, lang: "id-ID", voiceURI: "urn:moz-tts:osx:com.apple.speech.synthesis.voice.damayanti"});
  */

  useEffect(() => {
    console.log("useEffect AdminDashboard");
    var vo= window.speechSynthesis.getVoices();
    console.log(vo[6]);
    speak({ text: textAntrian ,voice:vo[6], rate:0.8, pitch:1 });

    socket.on("data_next_patient", (data) => {
			console.log("AdminDashboard : data_next_patient");
      console.log(data); // Log the received message data to the console
      if (typeof data.id !== 'undefined') {
        // the variable is defined
        var textAntrian= "Nomor antrian "+data.id+" Silahkan masuk";
        speak({ text: textAntrian,voice:vo[6], rate:0.8, pitch:1 });  
      }

   
    });
    return () => socket.off('data_next_patient');
    
  }, []);



  return (
    <>
      <Grid container style={{  height: '100vh',}}>
        <Grid item xs={3} sm={3} md={3} p={1} sx={{ backgroundColor: '#008f8f' }}  >   
          <CardAntrian />
          <CardAntrianGrooming />
        </Grid>
        <Grid item xs={9} sm={9} md={9} p={0}>
          <Box sx={{ height: "22%", marginTop: 0,backgroundImage: `url(../background.png)`}} >
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
              image="./mpc-icon.png"
              alt="MPC ICON"
              /> 
              </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{height: "1%", marginTop: 0,  backgroundColor: '#008f8f'}}/>
          <Box sx={{height: "77%",marginTop: 0,  backgroundColor: '#FFF'}}>
             <CardMedia
              component="img"
              sx={{  objectFit: "fill",marginLeft: 0, width: "100%", height : "100%", backgroundColor: '#FFF', borderRadius: '0px'}}
              image="./cat-gigi.jpg"
              alt="MPC ICON"/>
         </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminDashboard;
