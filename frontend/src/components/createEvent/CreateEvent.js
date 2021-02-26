import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import EventForm from "../eventForm/EventForm";
import { useSelector, useDispatch } from "react-redux";
import { createEvent } from "../../redux/actions/events/events";

function CreateEvent() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [addLine1, setAddLine1] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createEvent(name, description, dateTime, addLine1, city, region, postcode)
    );
  };
    return (
      <div>
        <Typography variant="h2">Create New Event</Typography>
        <EventForm
          handleNameChange={(e) => setName(e.target.value)}
          handleDescriptionChange={(e) => setDescription(e.target.value)}
          handleDateTimeChange={(e) => setDateTime(e.target.value)}
          handleAddLine1Change={(e) => setAddLine1(e.target.value)}
          handleCityChange={(e) => setCity(e.target.value)}
          handleRegionChange={(e) => setRegion(e.target.value)}
          handlePostcodeChange={(e) => setPostcode(e.target.value)}
          handleSubmit={handleSubmit}
        />
      </div>
    );
}

export default CreateEvent;
