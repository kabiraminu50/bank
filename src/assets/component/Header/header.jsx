import kabir from './../../img/kabir.jpg'
import { BiMessageRoundedCheck } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { MdSettingsInputAntenna } from "react-icons/md";
import './../Header/header.css'
const Header =() =>{
    return(
        <div>
            <header className="header">
                <div className='lefticons'>
<div className="profilepic"> <img src={kabir} alt="" className='pic'/>
</div>
<div className="kyc-lvl">LVL 5</div>
<div className="agent-category">MARCHANT</div>
                </div>

<div className='righticons'>
<BiMessageRoundedCheck />
<FaRegBell />
<MdSettingsInputAntenna />
</div>

            </header>
        </div>
    )
    
}

export default Header