

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CardWithIcon from "./CardWithIcon";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LinearProgress from "@mui/material/LinearProgress";
import { useSpeechSynthesis } from "react-speech-kit";
import dataProvider from "../dataProvider";

const CardAntrian = ({ socket }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { speak, voices } = useSpeechSynthesis();
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isVoiceReady, setIsVoiceReady] = useState(false);

  // Fetch the tickets from the data provider
  const getTicket = async () => {
    try {
      const response = await dataProvider.getAll("queues/getticketswithdoctors");
      if (response?.data) {
        setTickets(response.data);
        setLoading(false);
      } else {
        throw new Error("No data found.");
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
      setError(error.message || "An error occurred while fetching data.");
      setLoading(false);
    }
  };

  // Function to remove ticket by ticketId
  const removeTicket = (ticketId) => {
    setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.ticketId !== ticketId));
  };

  // Function to update ticket by groomer name
  const updateTicket = (newTicket) => {
    console.log(prevTickets);
    console.log(newTicket);


    setTickets((prevTickets) => {
      const updatedTickets = [...prevTickets];
      const existingTicketIndex = updatedTickets.findIndex(
        (ticket) => ticket.doctorId===newTicket.doctorId
      );

      if (existingTicketIndex !== -1) {
        // If the ticket with this groomer exists, update ticketNumber
        updatedTickets[existingTicketIndex] = {
          ...updatedTickets[existingTicketIndex],
          ticketNumber: newTicket.ticketNumber, // Update ticketNumber
        };
      } else {
        // If no ticket for this groomer, add a new one
        updatedTickets.push(newTicket);
      }

      return updatedTickets;
    });
  };

  // Function to announce ticket with selected voice
  const announceTicket = (ticketNumber) => {
    if (isVoiceReady && selectedVoice) {
      speak({
        text: `Nomor antrian ${ticketNumber.toString().padStart(4, "0")} Silahkan masuk`,
        voice: selectedVoice,
        rate: 0.8,
        pitch: 1,
      });
    } else {
      console.log("Voice not ready or selected voice is unavailable.");
    }
  };

  // Function to check and set selected voice
  const handleVoiceChange = () => {
    const availableVoices = window.speechSynthesis.getVoices();
    
    // Check if Indonesian voice is available
    const indonesianVoice = availableVoices.find(
      (voice) => voice.lang === "id-ID" || voice.name.includes("Indonesia")
    );

    if (indonesianVoice) {
      setSelectedVoice(indonesianVoice);
      setIsVoiceReady(true);
      console.log("Selected Indonesian voice:", indonesianVoice.name);
    } else {
      // Fallback to English voice if Indonesian voice is not available
      const englishVoice = availableVoices.find(
        (voice) => voice.lang === "en-GB" || voice.name.includes("English")
      );
      if (englishVoice) {
        setSelectedVoice(englishVoice);
        setIsVoiceReady(true);
        console.log("Selected fallback English voice:", englishVoice.name);
      } else {
        console.log("No suitable voice found.");
        setIsVoiceReady(false);
      }
    }
  };

  // Retry voice loading if voices are not available
  const loadVoicesWithRetry = () => {
    const voicesLoaded = window.speechSynthesis.getVoices();
    if (voicesLoaded.length > 0) {
      handleVoiceChange();
    } else {
      setTimeout(loadVoicesWithRetry, 1000); // Retry after 1 second
    }
  };

  // Ensure voices are loaded and handle voice selection
  useEffect(() => {
    getTicket();
    
    // Check if voices are already loaded
    if (voices.length === 0) {
      window.speechSynthesis.onvoiceschanged = loadVoicesWithRetry; // Retry loading voices
    } else {
      handleVoiceChange(); // If voices are already loaded, set immediately
    }

    // Listen for socket events
    socket.on("next_patient_doctor", (data) => {
      console.log("next_patient_doctor", data);

      if (data?.data) {
        updateTicket(data.data); // Update ticket if data exists
        announceTicket(data.data.ticketNumber); // Announce ticket number
      } else {
        console.log("Received invalid data for next_patient_doctor.");
      }
    });

    socket.on("close_patient_doctor", (ticketId) => {
      getTicket(); // Refresh tickets on close
      removeTicket(ticketId); // Remove ticket when patient is closed
    });

    // Cleanup listeners on unmount
    return () => {
      socket.off("next_patient_doctor");
      socket.off("close_patient_doctor");
      window.speechSynthesis.onvoiceschanged = null; // Clean up event listener
    };
  }, [socket, voices]);

  // Loading, error, or empty state handling
  if (loading) return <LinearProgress />;
  if (error) return <div>Error: {error}</div>;
  if (tickets.length === 0) {
    return (
      <Box maxWidth="100em" pl={1} pr={1} style={{ marginTop: 1, height: "25%" }}>
        <CardWithIcon
          to="/keuangan/laporan"
          icon={LocalMallIcon}
          title={"RAWAT JALAN"}
          no_layanan={"0".padStart(4, "0")}
          layanan={"RAWAT JALAN"}
          no_antrian={"Tidak ada antrian"}
          subtitle={1}
        />
      </Box>
    );
  }

  return (
    <>
      {tickets.map((item, index) => (
        <Box key={index} maxWidth="100em" pl={1} pr={1} style={{ marginTop: 1, height: "25%" }}>
          <CardWithIcon
            to="/keuangan/laporan"
            icon={LocalMallIcon}
            title={"RAWAT JALAN"}
            no_layanan={item.ticketNumber.toString().padStart(4, "0")}
            layanan={"RAWAT JALAN"}
            no_antrian={item.ticketNumber.toString().padStart(4, "0")}
            subtitle={1}
          />
        </Box>
      ))}
    </>
  );
};

export default CardAntrian;
