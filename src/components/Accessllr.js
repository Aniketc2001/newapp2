import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputLabel,FormControl } from '@mui/material';
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Save2, XSquareFill, CardChecklist } from 'react-bootstrap-icons';


const Accessllr = () => {
    const [App, setApp] = React.useState('');

    const handleChange = (event) => {
      setApp(event.target.value);
};

  return (
    <>
    <Container >
      <Box >
        <Paper elevation={6}>
        
          <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >  
            <div><h2>Access Level List</h2>
            <h6>define & update application access level</h6> </div>
          </AccordionSummary>
         
        <div >
        <Box
        component="form"
        sx={{
          display:'flex',
          flexDirection: 'row',
        
          p:1,
          m:1,

          borderRadius:1,
          alignItems:'start',
          '& > :not(style)': { m: 1, width: '25ch' }, 
        }}
        noValidate
        autoComplete="off"
        >
          


       
        <TextField id="Name" label="AccessLevelName" variant="standard" />
        <TextField id="Description" label="AccessLevelDescription" variant="standard" />
        <TextField id="outlined-multiline-static" label="AccessLevelModel" multiline rows={2} variant='standard' />   

        
        <FormControl variant='standard'>
          <InputLabel id="demo-standard-simple-select-label">App</InputLabel>
        <Select labelId="demo-standard-simple-select-standard-label" id="demo-s imple-select-standard" value={App} onChange={handleChange} label="App">
          <MenuItem value="">
          <em>Select app</em>
          </MenuItem>
          <MenuItem value={"FireQube"}>FireQube</MenuItem>
          <MenuItem value={"Laravel"}>Laravel</MenuItem>
        </Select>
        </FormControl>

      <FormControlLabel value="Active" control={<Checkbox />} label="Active" labelPlacement="end"/>
    
      
      </Box> 
      
        <Box sx={{p:1, m:1}}>
         <Stack direction='horizontal' gap={2}> 
                  <Button size="sm" variant="primary">
                    <Save2 /> Save
                  </Button>
                  <Button size="sm" variant="primary"><XSquareFill/> Delete
                  </Button>
                  <Button size="sm" variant="primary"><CardChecklist/> Back to list
                  </Button>
                </Stack>
         </Box> 
        
      </div>
    </Accordion>
    <Accordion>
    <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
            <div>
            <h4>Data List</h4>
            <h6>Data of approved data </h6>
            </div>  
            

          </AccordionSummary>
       
         

    </Accordion>
       
   </Paper>
  </Box>
</Container> 
</> 

  )
}

export default Accessllr;