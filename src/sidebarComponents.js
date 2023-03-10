import { React } from "react";
import './SideBar.css';

export default function ContainerBox () {
    return (
        <div>
    <SideBar/>
    <Button/>
    <PlanDetails/>
    </div>
    )
}

function SideBar() {
    return (
       
        <svg xmlns="http://www.w3.org/2000/svg" width="274" height="568" fill="none" viewBox="0 0 274 568"className="side-bar">
        <rect width="274" height="568" fill="#483EFF" rx="10"/>
        <mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse" >
          <rect width="274" height="568" fill="#fff" rx="10"/></mask><g mask="url(#a)"><path fill="#6259FF" fill-rule="evenodd" d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z" clip-rule="evenodd"/><path fill="#F9818E" fill-rule="evenodd" d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5" d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"/><path fill="#FFAF7E" d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"/></g> 
       </svg>
    
    
    );
}



function Button({step}){
 return (
    
    <div style={{ position: 'absolute', top: '33.5%', left: '4%', transform: 'translate(-50%, -50%)' }}>
        <ul className="buttons" >
            <div className="b1"><button className="button"><p className="buttonText"><li className={step === 1 ? 'active': ''}>1</li></p></button></div>
            <div className="b2"><button className="button"><p className="buttonText"><li className={step === 2 ? 'active': ''}>2</li></p></button></div>
            <div className="b3"><button className="button"><p className="buttonText"><li className={step === 3 ? 'active' : ''}>3</li></p></button></div>
            <div className="b4"><button className="button"><p className="buttonText"><li className={step === 4 ? 'active' : ''}>4</li></p></button></div>
        </ul>
    </div>

 )   
}

function PlanDetails () {
    return (
        <ul  style={{ position: 'absolute', top: '32.5%', transform: 'translate(-50%, -50%)' }}>
            <li className="step" >STEP 1<br/><span className="subText">YOUR INFO</span></li>
            <li className="step">STEP 2<br/><span className="subText">SELECT PLAN</span></li>
            <li className="step">STEP 3<br/><span className="subText">ADD-ONS</span></li>
            <li className="step">STEP 4<br/><span className="subText">SUMMARY</span></li>
        </ul>
    )
}
