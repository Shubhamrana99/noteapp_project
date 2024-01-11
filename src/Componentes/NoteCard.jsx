import { DeleteOutline } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const NoteCard = ({ note, handleDeleteditem }) => {
  const { title, details, category, id } = note;

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
              <DeleteOutline />
            </IconButton>
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
