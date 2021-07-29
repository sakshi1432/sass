import React from 'react'
import './l.scss';
import { FiTwitter} from "react-icons/fi";
import { MdPanTool} from "react-icons/md";
import { IoAccessibilitySharp, IoRocket} from "react-icons/io5";

const Fjob = () => {
    return (
        <>
            <div className="main">
                 <div><FiTwitter/><span>twitter</span> </div>
                 <div><MdPanTool/><span>hand'sup</span></div>
                 <div><IoRocket/><span>Shineme</span></div>
                 <div><IoAccessibilitySharp/><span>network</span></div>
            </div>
        </>
    )
}

export default Fjob
