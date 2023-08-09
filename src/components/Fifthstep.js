import React from 'react'

function Fifthstep({fomData, setFomData}) {
  return (
    <div>
       <h2>What do your beneficiaries need?</h2>
     <p>Identify the needs of your beneficiaries that you are uniquely qualified to meet.<br/>
      Also, find out how you will deliver your contribution to the beneficiaries; this<br/>
       includes finding your voice, how to express yourself, and your positioning.Given <br/>
       that beneficiaries may have different and changing preferences, you should also <br/>
       constantly polish yourself. Search and experiment widely. It is why musicians experiment,<br/>
       sports people attempt several techniques or even sports, and writers search for new styles,<br/>
       even literary genres or categories. The following sub-questions will guide you through:</p>

           <div style={{color:"green"}}>
           <p>To help in answering the question, respond to the following questions:</p>
           <li class="list-group-item" style={{border:"none"}}>What problems or challenges are affecting your potential beneficiaries?</li> 
           <li class="list-group-item" style={{border:"none"}}>How do your community want to be served?</li> 
 
           </div>

           <div class="mb-3" style={{width:"800px",marginLeft:"500px"}}>
            
             <textarea class="form-control"
              placeholder='fifthAnswer' 
              rows="6" 
              value={fomData.fifthAnswer}
              onChange={(e) => {setFomData({ ...fomData, fifthAnswer: e.target.value });}}>
              </textarea>
            </div> 
    </div>
  )
}

export default Fifthstep;
