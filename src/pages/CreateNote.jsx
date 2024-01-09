import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  FormLabel,
} from "@mui/material";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CreateNote = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetails, setInputDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [radioCategory, setRadioCategory] = useState("todos");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (inputTitle === "") {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (inputDetails === "") {
      setDetailsError(true);
    } else {
      setDetailsError(false);
    }

    if (inputDetails && inputTitle) {
      console.log("title:", inputTitle);
      console.log("Details:", inputDetails);
      console.log("radioCategory:", radioCategory);
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmitForm}>
        <TextField
          onChange={(e) => setInputTitle(e.target.value)}
          variant="outlined"
          label="Note Title"
          color="secondary"
          fullWidth
          required
          error={titleError}
          sx={{ mt: 0, mb: 2 }}
        />

        <TextField
          onChange={(e) => setInputDetails(e.target.value)}
          variant="outlined"
          label="Details"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
          sx={{ mt: 1, mb: 1 }}
        />

        <FormControl sx={{ display: "block", mt: 1, mb: 1 }}>
          <FormLabel>Note Category</FormLabel>

          <RadioGroup
            value={radioCategory}
            onChange={(e) => setRadioCategory(e.target.value)}
          >
            <FormControlLabel
              label="Money"
              value="money"
              control={<Radio color="secondary" />}
            />
            <FormControlLabel
              label="Todos"
              value="todos"
              control={<Radio color="secondary" />}
            />
            <FormControlLabel
              label="Reminder"
              value="reminder"
              control={<Radio color="secondary" />}
            />
            <FormControlLabel
              label="Work"
              value="work"
              control={<Radio color="secondary" />}
            />
          </RadioGroup>
        </FormControl>

        {/** <RadioGroup sx={{ mb: 2 }}>
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="Money"
            value="money"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="Todos"
            value="todos"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="Reminders"
            value="reminders"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="Work"
            value="work"
          />
        </RadioGroup> */}

        <Button
          color="secondary"
          variant="contained"
          size="large"
          type="submit"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateNote;
