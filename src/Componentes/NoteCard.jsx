import { DeleteOutline } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const NoteCard = ({ note, handleDeleteditem }) => {
  const { title, details, category, id } = note;

  const getAvatarBackgroundColor = () => {
    switch (note.category) {
      case "work":
        return "red";
      case "todos":
        return "green";
      case "money":
        return "blueviolet";

      default:
        return "blue";
    }
  };

  return (
    <div>
      <Card sx={{}}>
        <CardHeader
          action={
            <IconButton
              aria-label="settings "
              onClick={() => {
                console.log(`deleted ited : ${title}`);
                handleDeleteditem(id);
              }}
            >
              <DeleteOutline color="secondary" />
            </IconButton>
          }
          avatar={
            <Avatar sx={{ backgroundColor: getAvatarBackgroundColor() }}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          title={title}
          subheader={category}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
