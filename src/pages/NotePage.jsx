import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../Componentes/NoteCard";

const NotePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteditem = async (deletedNoteId) => {
    await fetch("http://localhost:8000/notes/" + deletedNoteId, {
      method: "DELETE",
    });
    const newNotes = notes.filter(({ id }) => id !== deletedNoteId);
    setNotes([...newNotes]);
  };

  // const handleDeleteditem = (deletedId) => {
  //   const newNotes = notes.filter(({ id }) => id !== deletedId);
  //   setNotes([...newNotes]);
  // };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDeleteditem={handleDeleteditem} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NotePage;
