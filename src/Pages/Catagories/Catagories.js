import React from 'react';
import './Catagories.css'
import keyboard from '../../Images/Services icon/keyboard.png'
import battery_new from '../../Images/Services icon/battery_new.png'
import cpu from '../../Images/Services icon/cpu.png'
import fan from '../../Images/Services icon/fan.png'
import Hard_Drive_new from '../../Images/Services icon/Hard_Drive_new.png'
import ram from '../../Images/Services icon/ram.png'

const Catagories = () => {
    return (
        <div className=''>
            <h1 className='catagories-title text-center'>All Catagories</h1>
            <div className='catagories-container'>
                <div className='catagories'>
                    <img src={keyboard} alt="" srcset="" />
                    <h3 className=''>Keyboard</h3>
                </div>
                <div className='catagories'>
                    <img src={battery_new} alt="" srcset="" />
                    <h3 className=''>Battery</h3>
                </div>
                <div className='catagories'>
                    <img src={cpu} alt="" srcset="" />
                    <h3 className=''>CPUs (Processors)</h3>
                </div>
                <div className='catagories'>
                    <img src={fan} alt="" srcset="" />
                    <h3 className=''>Fan</h3>
                </div>
                <div className='catagories'>
                    <img src={Hard_Drive_new} alt="" srcset="" />
                    <h3 className=''>Hard Drive</h3>
                </div>
                <div className='catagories'>
                    <img src={ram} alt="" srcset="" />
                    <h3 className=''>ram</h3>
                </div>
            </div>
        </div>
    );
};

export default Catagories;