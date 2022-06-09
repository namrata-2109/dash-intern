import React from 'react'
import Select from 'react-select'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'


const Dashboard = () => {
    var SelCategory = [
        {
            value: 1,
            label: "SSC"
        },
        {
            value: 2,
            label: "UPSC"
        },
        {
            value: 3,
            label: "BANK"
        },
        {
            value: 5,
            label: "XII"
        }
    ];
    return (
        <div className='dash-screen'>
            <div className='container'>
                <form>
                    <label for='courses'>Course:</label><br />
                    <select name='courses'>
                        <option value='none' className='disabled-optn' selected disabled hidden>Select your subject</option>
                        <option value='history'>History </option>
                        <option value='politics'> Politics</option>
                        <option value='aptitude'> Aptitude </option>
                        <option value='mathematics'>Mathematics </option>
                    </select><br />

                    <label for='ques-category'>Question Category:</label><br />
                    <Select className='ques-type' isMulti options={SelCategory}></Select>

                    <label for='question'>Question:</label><br />
                    <textarea type='text' name='type-ques' /><br />
                    <div className='ans-btns'>
                        <div id='div1'><input className='rd' type='radio' name='rd' /><input type='text' className='rd-ans' name='ansr1' placeholder='Answer 1' /></div><br />
                        <div id='div1'><input className='rd' type='radio' name='rd' /><input type='text' className='rd-ans' name='ansr2' placeholder='Answer 2' /></div><br />
                        <div id='div1'><input className='rd' type='radio' name='rd' /><input type='text' className='rd-ans' name='ansr3' placeholder='Answer 3' /></div><br />
                        <div id='div1'><input className='rd' type='radio' name='rd' /><input type='text' className='rd-ans' name='ansr4' placeholder='Answer 4' /></div><br />
                    </div>

                    <label for='short-explain'>Short Explanation:</label><br />
                    <textarea type='text' name='short-explain' /><br />

                    <label for='core-concept'>Core Concept:</label><br />
                    <textarea type='text' for='core-concept' />
                    
                    <div className='submit-btn'>
                        <button className='btn btn-danger'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Dashboard