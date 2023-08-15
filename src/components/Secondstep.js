import React from 'react'

function Secondstep({fomData, setFomData}) {
  return (
    <div style={{marginTop:"0px",display:"flex"}}>
       <div>
     <p style={{marginLeft:'10px'}}>The challenge here is that you may have unutilised potential;<br/> 
     hence, you must search deeper than what you are currently good at.
      You may not even have the right words to explain what you are good at
      For example, a person <br></br>who is faster on their hands than their legs may not
      even consider including this in the list of things they are good at. <br></br>It does 
      not have to be fancy or cool to others. It does not have to attract top dollars;
      you must be good at it. Two questions will guide you in answering question 2.</p>
      <div class="mb-3" style={{width:"500px",marginLeft:"10px",marginTop:"50px"}}>
           
             <textarea 
             class="form-control" 
             placeholder='secondAnswer' 
             rows="6" 
             value={fomData.secondAnswer}
             onChange={(e) => {setFomData({ ...fomData, secondAnswer: e.target.value });}}>

             </textarea>
            </div>
            </div>

           <div style={{backgroundColor:"maroon",color:"black",marginLeft:"750px",height:"700px",marginTop:'-80px',width:"80%", marginRight:'5px'}}>
           <p>To help in answering the question, respond to the following questions:</p>
           <li  style={{border:"none",listStyle:"none"}}>It is possible that you can do many things, but what are you really good at?</li> 
           <li  style={{border:"none",listStyle:"none"}}>What do you feel uniquely qualified to teach or offer others?</li> 
           
           </div>

           
    </div>
  )
}

export default Secondstep;
