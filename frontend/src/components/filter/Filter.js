import React from 'react';
import Textfield from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

function Filter() {
    return (
        <FormControl>
            <FormControlLabel
                label="My events"
                control={<Checkbox color="primary" />}
            />
            <Textfield label='Before' variant='outlined' required type="datetime-local"
                defaultValue="2017-05-24T10:30" />
            <Textfield label='After' variant='outlined' required type="datetime-local"
                defaultValue="2017-05-24T10:30" />
        </FormControl>
    )
}

export default Filter;