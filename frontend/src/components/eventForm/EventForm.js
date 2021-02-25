import React from "react";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function EventForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Textfield
        label="Name"
        variant="outlined"
        required
        onChange={props.handleNameChange}
      />
      <Textfield
        label="Description"
        variant="outlined"
        required
        multiline
        onChange={props.handleDescriptionChange}
      />
      <Textfield
        variant="outlined"
        required
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        onChange={props.handleDateTimeChange}
      />
      <Textfield
        label="Address line 1"
        variant="outlined"
        required
        onChange={props.handleAddLine1Change}
      />
      <Textfield
        label="City"
        variant="outlined"
        required
        onChange={props.handleCityChange}
      />
      <Textfield
        label="Region"
        variant="outlined"
        required
        onChange={props.handleRegionChange}
      />
      <Textfield
        label="Postcode"
        variant="outlined"
        required
        onChange={props.handlePostcodeChange}
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
}

export default EventForm;
