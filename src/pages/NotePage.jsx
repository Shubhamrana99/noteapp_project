import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../Componentes/NoteCard";
import Masonry from "react-masonry-css";
import axios from "axios";

const NotePage = () => {
  const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   fetch("https://noteapp-data.onrender.com/notes")
  //     .then((res) => res.json())
  //     .then((data) => setNotes(data))
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
    axios
      .get("https://noteapp-data.onrender.com/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => console.error(err));
  }, []);

  // const handleDeleteditem = async (deletedNoteId) => {
  //   await fetch("https://noteapp-data.onrender.com/notes/" + deletedNoteId, {
  //     method: "DELETE",
  //   });
  //   const newNotes = notes.filter(({ id }) => id !== deletedNoteId);
  //   setNotes([...newNotes]);
  // };

  const handleDeleteditem = (deletedId) => {
    const newNotes = notes.filter(({ id }) => id !== deletedId);
    setNotes([...newNotes]);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
    // 500: 1,
  };

  return (
    <Container>
      {/**<Grid container spacing={3}> */}
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <Box key={note.id}>
            <NoteCard note={note} handleDeleteditem={handleDeleteditem} />
          </Box>
        ))}
      </Masonry>
      {/** </Grid> */}
    </Container>
  );
};

export default NotePage;
