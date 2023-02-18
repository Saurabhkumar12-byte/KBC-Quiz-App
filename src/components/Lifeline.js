import React from 'react'

export default function Lifeline() {

    return (
        <>
            <div id='audiencePoll' className="container life_container flex">
                <div className="poll_container">

                    <div className="per_li_box1">
                        <div className='per_li_div1 border-right'></div>
                        <div className='per_li_div1 border-right '>
                            <ul>
                                <li>100%</li>
                                <li>90%</li>
                                <li>80%</li>
                                <li>70%</li>
                                <li>60%</li>
                                <li>50%</li>
                                <li>40%</li>
                                <li>30%</li>
                                <li>20%</li>
                                <li>10%</li>
                                <li>0%</li>
                            </ul>
                        </div>
                        <div className='per_li_div1 '></div>
                    </div>
                    <div className="per_li_box2">
                        <div id='discPerc'  className='per_li_div2'>
                            <div id="percDis1" className='flex'><span>70%</span></div>
                            <div id="percDis2" className='flex'><span>60%</span></div>
                            <div id="percDis3" className='flex'><span>50%</span></div>
                            <div id="percDis4" className='flex'><span>40%</span></div>
                        </div>
                        <div id='audPerc' className='per_li_div2 border-bottom'>
                            <div id='perBox1'></div>
                            <div id='perBox2'></div>
                            <div id='perBox3'></div>
                            <div id='perBox4'></div>
                        </div>
                        <div id='audResult' className='per_li_div2'>
                            <div className='flex'><span>A</span></div>
                            <div className='flex'><span>B</span></div>
                            <div className='flex'><span>C</span></div>
                            <div className='flex'><span>D</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
