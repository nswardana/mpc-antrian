import React from "react";
import { useState, useEffect } from "react";
import {
  useDataProvider, Loading, Error, ReferenceField, TextField, useRefresh
} from 'react-admin';

import dataProvider from "../dataProvider";

import CardWithIcon from "./CardWithIcon";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {Box} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import { useSpeechSynthesis } from 'react-speech-kit';

const CardAntrian = ({ socket }) => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getTicket = async () => {
      console.log("function getTicket");
      try { 
        dataProvider.getAll("queues/getticketswithdoctors").then(data => {
          console.log("getTicket");
          console.log(data.data);
          setData(data.data);
          setLoading(false);
        });
      } catch (error) {
        console.error(error);
       }
  }
  
  useEffect(() => {
    console.log("CardAntrian");
    getTicket();
    socket.on('next_patient_doctor', getTicket);
    return () => socket.off('next_patient_doctor');
    
  },[socket]);

  if (loading) return <LinearProgress />;
  if (error) return <Error />;
  if (!data) return null;
  console.log("data",data);
  return (
    <>
    	{data.length===0 && <Box  maxWidth="100em"   pl={1}  pr={1} style={{ marginTop: 1,   height: "25%"}} > <CardWithIcon
                  to="/keuangan/laporan"
                  icon={LocalMallIcon}
                  title={"RAWAT JALAN"}
                  no_layanan={"0".padStart(4, "0")}
                  layanan={"RAWAT JALAN"}
                  no_antrian={"Tidak ada antrian"}
                  subtitle={1}
                ></CardWithIcon></Box>}

      {data.map((item, index) => (
            <Box key={index} maxWidth="100em"   pl={1}  pr={1} style={{ marginTop: 1,   height: "25%"}} >
             <CardWithIcon
                  to="/keuangan/laporan"
                  icon={LocalMallIcon}
                  title={"RAWAT JALAN"}
                  no_layanan={item.ticketNumber.toString().padStart(4, "0")}
                  layanan={"RAWAT JALAN"}
                  no_antrian={item.ticketNumber.toString().padStart(4, "0")}
                  subtitle={1}
                ></CardWithIcon>
                </Box>
         ))}
              
    </>

  );
};

export default CardAntrian;
