import React from 'react';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './DashboardTwo';
import './DashboardTwo.css'
const Card = (props) => {
    return (
        <>

            <div className='container'>
                <div className='row g-0'>
                    <div className='col'>
                        <div className='mb-3 class-card'>
                            <h5 className='head'>{props.title}</h5>
                            < ol type='1'>
                                <li className='line'>{props.one}</li>
                                <li className='line'>{props.two}</li>
                                <li className='line'>{props.three}</li>
                                <li className='line'>{props.four}</li>
                                <li className='line'>{props.five}</li>
                            </ol>
                            <p className='know-more'>Know More</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card