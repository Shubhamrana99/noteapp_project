import { Radio, TextField, Typography } from "@mui/material";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const CreateNote = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetails, setInputDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

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
          sx={{ mt: 2, mb: 3 }}
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
          sx={{ mt: 2, mb: 3 }}
        />

        <RadioGroup>
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="money"
            value="money"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="todos"
            value="todos"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="reminders"
            value="reminders"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="work"
            value="work"
          />
        </RadioGroup>

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
