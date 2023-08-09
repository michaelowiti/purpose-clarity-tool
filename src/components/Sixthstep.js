import React from 'react'

function Sixthstep({fomData, setFomData}) {
  return (
    <div>
        <h2>How do your offerings transform your beneficiaries?</h2>
     <p>State not just the output but the outcome, which is the impact of your action.<br/>
      The answer to why you do what you do should be inbuilt into the impact you want to<br/>
      create. Personally, I inspire individuals and organisations to live meaningful lives.<br/>
      inspire my beneficiaries through training and advisory, and as a result, they live<br/>
      meaningful lives. The beneficiaries transform from pursuing anything they can to pursuing<br/>
      what impacts society and fulfils them.</p>

           <div style={{color:"green"}}>
           <p>To help in answering the question, respond to the following questions:</p>
           <li class="list-group-item" style={{border:"none"}}>What is the output of your interventions?</li> 
           <li class="list-group-item" style={{border:"none"}}>Which group do you uniquely understand its struggles?</li> 
          
           </div>

           <div class="mb-3" style={{width:"800px",marginLeft:"500px"}}>
           
             <textarea 
             class="form-control" 
             placeholder='sixthAnswer'
              rows="6" 
              value={fomData.sixthAnswer}
              onChange={(e) => {setFomData({ ...fomData, sixthAnswer: e.target.value });}}>
                
              </textarea>
            </div>
    </div>
  )
}

export default Sixthstep;
