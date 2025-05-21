import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react'

function App() {

  const [emailContent,setEmailContent]=useState('');
  const [tone,setTone]=useState('');
  const [generatedReply,setGeneratedReply]=useState('');
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');

  const handleSubmit = async ()=>{
    setLoading(true)
    setError('')
    try {
      const response=await axios.post("http://localhost:8080/api/email/generate",
        {emailContent,tone});
        setGeneratedReply(response.data);
        setLoading(false)
      
    } catch (error) {
      setError("Failed to generate email reply. Please try again")
      
    } finally{
      setLoading(false)
    }

  }

  return (
    <>
    <Container maxWidth="md" sx={{py:4}}>
      <Typography variant='h3' component="h1" gutterBottom>Email Replay Generator</Typography>
      <Box sx={{mx:3}}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          label="Original Email Content"
          value={emailContent || ''}
          onChange={(e)=>setEmailContent(e.target.value)}
          sx={{mb:2}}
        />
        <FormControl fullWidth sx={{mb:2}} >
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone || ''}
            onChange={(e)=>setTone(e.target.value)}
            label={"Tone (Optional)"}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Casual">Casual</MenuItem>
              <MenuItem value="Friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button 
          onClick={handleSubmit} 
          variant='contained' 
          disabled={!emailContent||loading}
          fullWidth
          sx={{mb:2}}>
          {loading? <CircularProgress size={24}/>:"Generate Reply"}
        </Button>
      </Box>

      {
        error && (
          <Typography color='error' sx={{mb:2}}>
            {error}
          </Typography>
        )
      }

      {
        generatedReply && (
          <Box sx={{mx:3}}>
            <Typography variant='h6' gutterBottom>Generated Reply:</Typography>
            <TextField 
              fullWidth 
              multiline 
              rows={6} 
              variant='outlined'
              value={generatedReply||''} 
              inputProps={{readOnly:true}}/>

            <Button 
              variant='contained' 
              sx={{mt:2}}
              onClick={()=>navigator.clipboard.writeText(generatedReply)}
              >
                Copy to Clipboard
              </Button>
          </Box>
        )
      }
    </Container>
      
    </>
  )
}

export default App
