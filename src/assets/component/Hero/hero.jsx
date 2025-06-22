import { CgCopy } from "react-icons/cg";
import { IoMdPhonePortrait } from "react-icons/io";
import { SlCallOut } from "react-icons/sl";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiSolidCopy } from "react-icons/bi";
import { TbSquareRoundedLetterMFilled } from "react-icons/tb";
import './../Hero/hero.css'
import { Link } from "react-router-dom";
const Hero=()=>{
    return(
        <div>
<div className='herocon'>

<main className='maincon'>

<div className='accountcon'>

    <div className='balancecon'>
<section style={{border:'1px solid gray',
    width:'75%', height:'30px',display:'flex',
    alignItems:'center',justifyContent:'space-between'
   , margin:'0px', borderRadius:'14px'
}}>

<div style={{display:'flex', alignItems:'center'}}>< TbSquareRoundedLetterMFilled style={{color:'blue', fontSize:'28px'}} />
<span style={{color:'rgb(155, 155, 159)'}}>Kabir Aminu</span></div>

<span style={{ color:'gray'}}> 8232324470 <span style={{height:'16px',
width:'16px', 
border:'1px none black',
borderRadius:'20px',
 backgroundColor:'rgb(76, 76, 155)', margin:'10px' }}>
    &#x2304;
</span></span>

</section>
<section style={{
border:'1px solid gray',
 width:'40px', height:'40px', 
 borderRadius:'20px',
 display:'flex', 
 alignItems:'center',
 justifyContent:'center'}}>
    <BiSolidCopy color="rgb(208, 192, 102)" />

 </section>


    </div>
    <div className='balancecon2'>
<div className='balancepart'>
    <span>Available Balance
        <p style={ {fontSize:'18px'}}>&#8358; 23,3003.33</p>
    </span>
    
    
<div className='historypart'>History <span>&gt;</span> </div>

</div>


</div>
</div>


<p className="slogan">Make Payment</p>

<section className="transactionicons">

<div className="icon1">

<div>
<RiSendPlaneFill color="blue"style={{ 
    backgroundColor:' rgb(19, 19, 88)',
    width:'25px',
    height:'23px',
    borderRadius:'4px'}}/>
</div>

<div>
<p>Transfer</p>
</div>

<link to="/Transfer">



</link>
</div>

<div className="icon1">
<div>
<SlCallOut  color="blue"style={{ 
    backgroundColor:' rgb(19, 19, 88)',
    width:'25px',
    height:'23px',
    borderRadius:'4px'}}/>
</div>


<div>
<p>Top-Up</p>
</div>

</div>


<div className="icon1">

<div><IoMdPhonePortrait 

color="blue"style={{ 
    backgroundColor:' rgb(19, 19, 88)',
    width:'25px',
    height:'23px',
    borderRadius:'4px'}}

/>
</div>


<div>
<p>Data</p>
</div>
</div>


<div className="icon1"> 
    <div>
    < CgCopy color="blue"style={{ 
    backgroundColor:' rgb(19, 19, 88)',
    width:'25px',
    height:'23px',
    borderRadius:'4px'
}}/>


</div>
<div><p>PayBills</p></div></div>


</section>
<p className="receivepayment">Receive Payment</p>


<div className="icon1">


<div><IoMdPhonePortrait 

color="blue"style={{ 
    backgroundColor:' rgb(19, 19, 88)',
    width:'25px',
    height:'23px',
    borderRadius:'4px'}}

/>
</div>
<div>
<p>POS</p>
</div>
</div>

<br />
<br />

<div className="cardsalecon">
    
<section className="cardsalesubcon"></section>



</div>


</main>
</div>
        </div>
    )
}
export default Hero