import React,{useState} from "react";

const Tabs=({tabs})=>{
    let [tabContent,setTabContent]=useState("");

    const handle=(index)=>{
       setTabContent(index);

    }


    return(
        <div>
        <ul>
           {tabs.map((tab,index)=>{

            return <li
            key={index} onClick={()=>handle(index)}
            className={tabContent===index? "active":""}
            >{tab.title}<p>
                {tab.content}
                </p></li>
           })}
        </ul>
        <div className="content">
            {tabs[tabContent]?.content}
        </div>
        </div>


    )

}

export default Tabs;