import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
    const slider = useRef();
    let tx =0 ;
    const slideForward = ()=>{
        if(tx>-50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
        if(tx<0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref = {slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'> 
                        <img src={user_1} alt='' />
                            <div>
                            <h3>Shruti Tiwari</h3>
                            <span>Edusity,India</span>
                             </div>
                    </div>
                    <p>
                    Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'> 
                        <img src={user_2} alt='' />
                            <div>
                            <h3>Vaibhav Katiyar</h3>
                            <span>Edusity,India</span>
                             </div>
                    </div>
                    <p>
                    Enrolling at Edusity has been a transformative experience. The sense of belonging within the supportive community has been invaluable, fostering personal and academic growth.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'> 
                        <img src={user_3} alt='' />
                            <div>
                            <h3>Amrita Singh</h3>
                            <span>Edusity,USA</span>
                             </div>
                    </div>
                    <p>
                    My decision to study at Edusity has proven to be exceptionally rewarding. The community here is incredibly supportive, making it easy to form meaningful connections and receive encouragement every step of the way. 
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'> 
                        <img src={user_4} alt='' />
                            <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                             </div>
                    </div>
                    <p>
                    Choosing Edusity for my education has been a decision I celebrate every day. The community is incredibly welcoming and supportive, providing a strong foundation for both personal and academic development. 
                    </p>
                </div>
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Testimonials
