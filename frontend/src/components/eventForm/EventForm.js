import React from 'react';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function EventForm() {
    return (
        <div>
            <Textfield label='Name' variant='outlined' required />
            <Textfield label='Description' variant='outlined' required multiline />
            <Textfield variant='outlined' required type="datetime-local"
                defaultValue="2017-05-24T10:30" />
            <Textfield label='Address line 1' variant='outlined' required />
            <Textfield label='Address line 2' variant='outlined' required />
            <Textfield label='City' variant='outlined' required />
            <Textfield label='Region' variant='outlined' required />
            <Textfield label='Postcode' variant='outlined' required />
            <Button>Submit</Button>
        </div>
    )
}

export default EventForm;