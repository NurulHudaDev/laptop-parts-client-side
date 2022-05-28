import React from 'react';
import './Brand.css'
import apple from '../../../Images/laptop logo/apple.png'
import dell from '../../../Images/laptop logo/dell.png'
import hp from '../../../Images/laptop logo/hp.png'
import acer from '../../../Images/laptop logo/acer.png'
import lenovo from '../../../Images/laptop logo/lenovo.png'
import samsung from '../../../Images/laptop logo/samsung.png'
import sony from '../../../Images/laptop logo/sony.png'
import benq from '../../../Images/laptop logo/benq.png'
import compaq from '../../../Images/laptop logo/compaq.png'
import hcl from '../../../Images/laptop logo/hcl.png'
import ibm from '../../../Images/laptop logo/ibm.png'
import asus from '../../../Images/laptop logo/asus.png'
import laptop1 from '../../../Images/laptop images/laptop1.jpg'
import laptop2 from '../../../Images/laptop images/laptop2.jpg'
import laptop3 from '../../../Images/laptop images/laptop3.jpg'


const Brand = () => {
    return (
       <div>
            <h1 className='text-center auto-title'>Your Best laptop Parts & Auto News</h1>
            <div className='brand-container'>
                <div className='brand-logo'>
                    <div className='logo'>
                        <img src={apple} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={dell} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={hp} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={acer} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={lenovo} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={samsung} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={sony} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={benq} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={compaq} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={hcl} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={ibm} alt="" srcset="" />
                    </div>
                    <div className='logo'>
                        <img src={asus} alt="" srcset="" />
                    </div>
                </div>
                <div className='laptop-container'>
                    <div className='laptop-info'>
                        <div>
                            <img src={laptop1} alt="" srcset="" />
                        </div>
                        <div className='laptop-detail'>
                            <h1 className='text-xl font-bold'>Mini Cooper s 5 door 2019 long-term review</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className='laptop-info'>
                        <div>
                            <img src={laptop2} alt="" srcset="" />
                        </div>
                        <div className='laptop-detail'>
                            <h1 className='text-xl font-bold'>Mini Cooper s 5 door 2019 long-term review</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className='laptop-info'>
                        <div>
                            <img src={laptop3} alt="" srcset="" />
                        </div>
                        <div className='laptop-detail'>
                            <h1 className='text-xl font-bold'>Mini Cooper s 5 door 2019 long-term review</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Brand;