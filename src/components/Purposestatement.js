import React, { useState } from 'react'

function Purposestatement() {
const [purposeData,setPurposeData]=useState({
  purposestatement:"",
});

  return (
    <div>
       
<p>Turn your responses to the 7 questions above into a purpose statement using the struc-
 ture below. The purpose statement must be a concise, memorable and <br/>inspiring decla- 
 ration. I will use my purpose, "I inspire individuals and organisations to live meaningful
  lives", to provide a structure for the purpose statement.<br/> Purpose has three main dimen-
 sions: directional, transformational and motivational. The directional dimension includes
 two aspects (1) the inspired actions <br/>you take or the path you follow, and (2) for whom you
 do it. For example, based on my purpose, the directional dimension is "I inspire indi- 
 viduals and<br/> organisations". The transformational dimension includes the benefits your 
 beneficiaries accrue from your actions. This dimension captures the intended <br/>impact on 
 the recipients. It focuses on the difference one makes in people's lives and society: 
 the impact. For example, the transformational dimension <br/>of my purpose is "to live meaning-
 ful lives". The motivational dimension is derived from the language and worthiness of the 
 cause as captured through<br/> the directional and transformational dimensions. Both direc- 
 tional and transformational dimensions should be inspiring to awaken motivation.<br/>
 The directional and transformational aspects must be noble, compelling and inspirational.
 It should enlist or awaken the energies and enthusiasm<br/> you need to make your purpose a 
 reality. Purpose comes with its energy. It is self-energising.</p>

 <div class="mb-3" style={{width:"500px",marginLeft:"10px",marginTop:"50px"}}>
           
 <textarea 
             class="form-control" 
             placeholder='purposestatement' 
             rows="6" 
             value={purposeData.purposestatement}
             onChange={(e) => {setPurposeData({ ...purposeData, purposestatement: e.target.value });}}>

             </textarea>
             <button>Submit</button>
             </div>

      
    </div>
  )
}

export default Purposestatement;
