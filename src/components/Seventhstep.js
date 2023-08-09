import React from 'react'

function Seventhstep({fomData, setFomData}) {
  return (
    <div>
        <h2>What activities can generate income for you?</h2>
     <p>Without this question, all the other questions lead to a hobby, and with only<br/>
      this ques- tion, you may end up as an unfulfilled ruthless money-making machine.<br/>
      This question gives you a vocation and multiplies the impact you can make.</p>

           <div style={{color:"green"}}>
           <p>To help in answering the question, respond to the following questions:</p>
           <li class="list-group-item" style={{border:"none"}}> What are the beneficiaries willing and able to pay for, and how much?</li> 
           <li class="list-group-item" style={{border:"none"}}>Are the payments enough to maintain a going concern?</li> 
          
           </div>

           <div class="mb-3" style={{width:"800px",marginLeft:"500px"}}>
            
             <textarea 
             class="form-control" 
             placeholder='seventhAnswer' 
             rows="6" 
             value={fomData.seventhAnswer}
             onChange={(e) => {setFomData({ ...fomData, seventhAnswer: e.target.value });}}>
                
             </textarea>
            </div>
    </div>
  )
}

export default Seventhstep;
