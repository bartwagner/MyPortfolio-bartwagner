import React from "react"
import skills from "../../components/database/skills"
import Paragraph from "../../components/subcomponents/Paragraph"

export default function Skills() {
    const skillsParagraph = skills.map(item => {
        return(
            <Paragraph 
                key={item.id}
                value={item.value}
            />
        )
    })
    return (
        <div className="experience-div">
            <h1 className="comp-subpar">Skills</h1>
            <div className="comp-container">
                <div className="flex">
                    {skillsParagraph}
                </div>
            </div>
        </div>
    )
}