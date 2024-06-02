import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import { backdropClasses, colors } from '@mui/material';
// import { alignProperty } from '@mui/material/styles/cssUtils';


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1516977103673-45be7d2850d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D"
    let HOT_URL = "https://images.unsplash.com/photo-1582490841511-81e1363fb48c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwc3ByaW5nfGVufDB8fDB8fHww"
    let RAIN_URL = "https://images.unsplash.com/photo-1641048350693-4710a172e3cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D"
   
    return (
    <div className="InfoBox">
        <div className="cardcontanier">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {
          info.humidity > 80 
          ? RAIN_URL 
          : info.temp > 15 
          ? HOT_URL 
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80
           ? <ThunderstormIcon/>
           : info.temp > 15
          ?  <WbSunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" align='left' component={"span"}>
          <b><p style={{color: "black"}}>Temperature = {info.temp}&deg;C</p></b>
          <b><p style={{color: "black"}}>Humidity = {info.humidity}</p></b>
          <b><p style={{color: "black"}}>TempMin = {info.tempMin}&deg;C</p></b>
          <b><p style={{color: "black"}}>TempMax = {info.tempMax}&deg;C</p></b>
          <h3 style={{color:" green"}}>
            The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
          </h3>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>)
}