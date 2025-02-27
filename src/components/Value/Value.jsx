import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion"
import data from "../../utils/accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'

const Value = () => {
    // const [className, setClassName] = useState(null)
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                {/* right side */}
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>
                        We always ready to help by providing the best for you.
                        <br />We belive a good blace to live can make your life better
                    </span>

                    <Accordion
                        className="accordian"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((item, index) => (
                                <AccordionItem
                                    uuid={index}
                                    key={index}
                                    className="accordianItem"
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordianButton'>
                                            {/* <AccordionItemState>
                                                {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState> */}
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className='primaryText'>{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='secondaryText'>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value