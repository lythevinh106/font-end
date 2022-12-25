import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
Create.propTypes = {

};

function Create(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container>
            <Typography variant='h3' align='center'>
                create a new Customer
            </Typography>

            <form action="" noValidate onSubmit={handleSubmit}>
                <Box>
                    <TextField label="name" variant='standard' fullWidth required></TextField>
                    <TextField label="detail" variant='standard' fullWidth multiline rows={3}
                        error={true}
                    ></TextField>
                </Box>

                <Button type="submit" startIcon={<SendIcon />}  >submit</Button>
            </form>
        </Container>
    );
}

export default Create;