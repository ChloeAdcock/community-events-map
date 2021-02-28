import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import EventForm from "../eventForm/EventForm";

function UpdateEvent(props) {
  const dispatch = useDispatch();
  const [selectedEvent, setSelectedEvent] = useState(
    props.history.location.state.event
  );
  const [name, setName] = useState(selectedEvent.name);
  const [description, setDescription] = useState(selectedEvent.description);
  const [dateTime, setDateTime] = useState(selectedEvent.date_time);
  const [formattedAddress, setFormattedAddress] = useState(
    props.history.location.state.address
  );
  const [addLine1, setAddLine1] = useState(formattedAddress.split(", ")[0]);
  const [city, setCity] = useState(
    formattedAddress.split(", ")[1].split(" ")[0]
  );
  const [region, setRegion] = useState(formattedAddress.split(", ")[2]);
  const [postcode, setPostcode] = useState(
    `${formattedAddress.split(", ")[1].split(" ")[1]} ${
      formattedAddress.split(", ")[1].split(" ")[2]
    }`
  );

  return (
    <div>
      <Typography variant="h2">Update Event</Typography>
      <EventForm
        handleNameChange={(e) => setName(e.target.value)}
        handleDescriptionChange={(e) => setDescription(e.target.value)}
        handleDateTimeChange={(e) => setDateTime(e.target.value)}
        handleAddLine1Change={(e) => setAddLine1(e.target.value)}
        handleCityChange={(e) => setCity(e.target.value)}
        handleRegionChange={(e) => setRegion(e.target.value)}
        handlePostcodeChange={(e) => setPostcode(e.target.value)}
        name={name}
        description={description}
        dateTime={dateTime}
        addLine1={addLine1}
        city={city}
        region={region}
        postcode={postcode}
      />
    </div>
  );
}

export default UpdateEvent;
