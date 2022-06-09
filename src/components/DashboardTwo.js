import React from 'react'
import './DashboardTwo.css';
import CardArray from './CardData';
import Card from './Card';
import { Row, Container, Col } from 'react-bootstrap'

const DashboardTwo = () => {
    return (
        <div className='display'>
            <div className='left-margin' />

            <div className='right-margin'>
                <div className='top'>
                    <div className='middle-cards'>
                        <div className='top-head'>
                            <h1 className='dash'>Dashboard</h1>
                            <span className='search'/>
                        </div>
                        <div className='top-body'>
                            {CardArray.map((value, index) => {
                                return (
                                    <Card
                                        key={value.id}
                                        title={value.head}
                                        one={value.lineOne}
                                        two={value.lineTwo}
                                        three={value.lineThree}
                                        four={value.lineFour}
                                        five={value.lineFive}
                                    />
                                )
                            })}
                        </div>
                    </div>

                    <div className='right-cards'>
                        <div className='top-card'>
                            <h5 className='count'>Question Count Trends</h5>
                            <div className='flexing'>
                                <div className='left-col'>
                                    <span className='one-rect' />
                                    <span className='square' />
                                </div>
                                <div className='right-col'>
                                    <span className='circle' />
                                    <span className='two-rect' />
                                </div>
                            </div>
                            <span className='bottom-rect' />
                        </div>
                        <span className='bottom-card' />

                    </div>
                </div>

                <div className='four-cards'>
                    <span className='plain-card' />
                    <span className='plain-card' />
                    <span className='plain-card' />
                    <span className='plain-card' />
                </div>
            </div>



        </div>
    )
}

export default DashboardTwo