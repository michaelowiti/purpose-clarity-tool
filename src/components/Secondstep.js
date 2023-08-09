import React from 'react'

function Secondstep({fomData, setFomData}) {
  return (
    <div>
        <h2>What do you do well?</h2>
     <p>The challenge here is that you may have unutilised potential;<br/> 
     hence, you must search deeper than what you are currently good at.<br/>
      You may not even have the right words to explain what you are good at.<br/>
      For example, a person who is faster on their hands than their legs may not<br/>
      even consider including this in the list of things they are good at. It does<br/> 
      not have to be fancy or cool to others. It does not have to attract top dollars;<br/>
      you must be good at it. Two questions will guide you in answering question 2.</p>

           <div style={{color:"green"}}>
           <p>To help in answering the question, respond to the following questions:</p>
           <li class="list-group-item" style={{border:"none"}}>It is possible that you can do many things, but what are you really good at?</li> 
           <li class="list-group-item" style={{border:"none"}}>What do you feel uniquely qualified to teach or offer others?</li> 
           
           </div>

           <div class="mb-3" style={{width:"800px",marginLeft:"500px"}}>
           
             <textarea 
             class="form-control" 
             placeholder='secondAnswer' 
             rows="6" 
             value={fomData.secondAnswer}
             onChange={(e) => {setFomData({ ...fomData, secondAnswer: e.target.value });}}>

             </textarea>
            </div>
    </div>
  )
}

export default Secondstep;
