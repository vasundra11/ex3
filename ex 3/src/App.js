import  React, { useState , useEffect } from 'react'
import './App.css';
import './Style.css';
import Mobile from './props.js';


export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
      <center>
          <div class='Block'>

<p><center><b><h1>Time : {date.toLocaleTimeString()}</h1></b></center></p>
<p> <center><b><h1>Date : {date.toLocaleDateString()}</h1></b></center></p>
<Mobile />

</div>
      </center>
    )
}

export default DateTime
