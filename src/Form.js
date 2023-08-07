import React from "react";
const Form=()=>{
    return (
        <div>
            <form >

    <div class="mb-3 ">
  <label for="q1" class="form-label"><h2>Who are you?</h2></label><br/>
  <div style={{color:"green"}}>
  <p>To help in answering respond to the following</p>
  <li class="list-group-item" style={{color:"green",border:"none"}}>what are your passions?</li>
  <li class="list-group-item" style={{color:"green",border:"none"}}>what do you have great interest and pleasure doing?</li>
  <li class="list-group-item" style={{color:"green",border:"none"}}>what are the things that you have the inner energy to pursue"</li>
  </div>
  
</div>
<div class="mb-3" style={{width:"800px"}}>
  <label for="textarea1" class="form-label">Your answer</label>
  <textarea class="form-control" id="textarea1" rows="4"></textarea>
  </div>

  <div class="mb-3 ">
  <label for="q2" class="form-label"><h2>what do you do well?</h2></label>
  <p>To help in answering respond to the following</p>
  <li class="list-group-item" style={{color:"green",border:"none"}}>is it possible you can do many things,but what are you really good at?</li>
 
</div>
<div class="mb-3" style={{width:"800px"}}>
  <label for="textarea2" class="form-label">Your answer</label>
  <textarea class="form-control" id="textarea2" rows="4"></textarea>
</div>


<div class="mb-3 ">
  <label for="q3" class="form-label"><h2>what do you love to do?</h2></label>

</div>
<div class="mb-3" style={{width:"800px"}}>
  <label for="textarea3" class="form-label">Your answer</label>
  <textarea class="form-control" id="textarea3" rows="4"></textarea>
</div>

<div class="mb-3 ">
  <label for="q4" class="form-label"><h2>whom do you intend to serve?</h2></label>
 
</div>
<div class="mb-3" style={{width:"800px"}}>
  <label for="textarea4" class="form-label">Your answer</label>
  <textarea class="form-control" id="textarea4" rows="4"></textarea>
</div>

<div class="mb-3 ">
  <label for="q5" class="form-label"><h2>what do your beneficiaries need?</h2></label>
  
</div>
<div class="mb-3" style={{width:"800px"}}>
  <label for="textarea5" class="form-label">Your answer</label>
  <textarea class="form-control" id="textarea5" rows="4"></textarea>
</div>

<div class="mb-3 ">
  <label for="q6" class="form-label"><h2>How do your offerings transform your beneficiaries?</h2></label>
  
</div>
<div class="mb-3" style={{width:"800px"}}>
  <label for="textarea6" class="form-label">Your answer</label>
  <textarea class="form-control" id="textarea6" rows="4"></textarea>
</div>

<div class="mb-3 p-3" >
  <label for="q7" class="form-label"><h2>What activities can generate income for you?</h2></label>
  
</div>
<div class="mb-3" style={{width:"800px"}}>
  <label for="textarea7" class="form-label">Your answer</label>
  <textarea class="form-control" id="textarea7" rows="6"></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>

        </div>
    )

}

export default Form;