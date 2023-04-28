import { Checkbox, FormControlLabel, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Save } from 'react-bootstrap-icons';



export default function Form() {

    const app = [
        {
            value: 'FireQube',
            label: 'FireQube',
        },
        {
            value: 'Teravista',
            label: 'Teravista',
        }
    ];

    const [accessLevel, setAccessLevel] = useState({});

    const handleAccessLevelChange = (event) => {
        setAccessLevel({...accessLevel,[event.target.id]: event.target.value});
    }

    const handleActiveChange = (event) => {
        setAccessLevel({...accessLevel, active: event.target.checked});
    }

    const handleSaveButtonClick = () => {
        console.log(accessLevel);
    }

    return (
        // <Container sx={{ marginY: 10 }}>
            <Paper elevation={3} sx={{ padding: 4 ,marginY: 10  }}>
                <Typography variant='h5'>Access Level List</Typography>
                <Typography variant='subtitle2'>Define & update application access levels</Typography>
                <Stack direction={{sm:'column',md:'row'}} gap={2} marginY={2}>
                    <TextField fullWidth id="accessLevelMode" label="AccessLevelMode" variant="standard" onChange={handleAccessLevelChange} />
                    <TextField fullWidth id="accessLevelName" label="AccessLevelName" variant="standard" onChange={handleAccessLevelChange} />
                    <TextField fullWidth id="accessLevelDescription" label="AccessLevelDescription" multiline rows={2} variant="standard" onChange={handleAccessLevelChange} />
                    <TextField id="selectApp" select label="App" defaultValue="FireQube" variant="standard" fullWidth onChange={handleAccessLevelChange}>
                        {app.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <FormControlLabel  control={<Checkbox size="small" />} label="Active" onChange={handleActiveChange} />
                </Stack>
                {/* <DataGridBox /> */}
                    <Button id = "save-button" variant="primary" size='sm' onClick={handleSaveButtonClick}><Typography variant='body1' sx={{marginRight:1}} component='span' ><Save size='15' /></Typography> Save</Button>
            </Paper>
        // </Container>
    )

                        }