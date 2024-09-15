import React,{useState} from 'react';
import './contact.css';
import compImg1 from '../../allImgs/compImg1.png';
import compImg2 from '../../allImgs/compImg2.png';
import compImg3 from '../../allImgs/compImg3.webp';
import compImg4 from '../../allImgs/compImg4.png';
import {FaInstagram} from 'react-icons/fa6';
import {FaFacebookF} from 'react-icons/fa6';
import {SiSnapchat} from 'react-icons/si';
import {PiWhatsappLogoBold} from 'react-icons/pi';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDtPERDYhyoQgy_tslQKrclhtHn5yC7XeM",
  authDomain: "learn1-firebase.firebaseapp.com",
  databaseURL: "https://learn1-firebase-default-rtdb.firebaseio.com",
  projectId: "learn1-firebase",
  storageBucket: "learn1-firebase.appspot.com",
  messagingSenderId: "1057729897103",
  appId: "1:1057729897103:web:9b409bd92a58632b6c06fa",
  measurementId: "G-3XC4P2HLBX"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);




const Contact = () =>{
  const initialValues = { name:'', email:'', message:''};
  const[formValues, setFormValues] = useState(initialValues);
  const[formError, setFormError] = useState({});
  // const[isSubmit, setIsSubmit]= useState(false);

  const handleChange= (e)=>{
    const{name,value} =e.target;
    setFormValues({...formValues, [name]:value});
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const validationErrors = validate(formValues);
    setFormError(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      const { name, email, message } = formValues;
      
      try {
        // Use Firebase Realtime Database to store data
        const dbRef = ref(database, 'userDb');
        await push(dbRef, {
          name,
          email,
          message
        });
        alert('Data stored successfully');
        setFormValues({
          name: '',
          email: '',
          message: ''
        });
      } catch (error) {
        alert('Failed to store data');
        console.error(error);
      }
    }
  
    
  }

  const validate= (values)=>{
    const errors= {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name){
      errors.name = 'Name is required!';
    }
    if(!values.email){
      errors.email = 'Email is required!';
    }else if(!regex.test(values.email)){
      errors.email='This is not a valid email!';
    }
    
    if(!values.message){
      errors.message= 'Message is required!';
    }else if(values.message.length<10){
      errors.message='Message must be more than 10 words';
    }else if(values.message.length>100){
      errors.message='Message cannot exceed more than 100 words';
    }
    
    return errors;    
  }

  return (
    <>
     <section id="contactPage">
        <div className="clients">
            <h1 className="contactTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className="clientImg">
                <img src={compImg1} alt="1" className="Imgs1" />
                <img src={compImg2} alt="2" className="Imgs2" />
                <img src={compImg3} alt="3" className="Imgs3" />
                <img src={compImg4} alt="4" className="Imgs4" />
            </div>
        </div>
        <div id="contact">
           <h1 className="contactTitle">Contact Me</h1>
           <span className="contactDesc">Please fill out the form below to discuss any work.</span>
           <form action="" className="contactForm" onSubmit={handleSubmit} >
             <input type="text" name='name' className='name' placeholder='Your Name' value={formValues.name} onChange={handleChange} autoComplete='off' />
             <p style={{color:'brown',fontSize:'13px'}}>{formError.name}</p>
             <input type="text" name='email' className="email" placeholder='Your Email'value={formValues.email} onChange={handleChange} autoComplete='off'/>
             <p style={{color:'brown',fontSize:'13px'}}>{formError.email}</p>
             <textarea name="message" cols="30" rows="5" className="msg" value={formValues.message} onChange={handleChange} placeholder='Your Message' autoComplete='off'></textarea>
             <p style={{color:'brown',fontSize:'13px'}}>{formError.message}</p>
             <button type='submit'  className="btn" >Submit</button>
             <div className="links">
              <div className="icon"><a href='https://www.instagram.com/pri_yanshimaurya817/'><FaInstagram className='linkImg1'/></a></div>
              <div className="icon"><a href="https://www.facebook.com/"><FaFacebookF className='linkImg1'/></a></div>
              <div className="icon"><a href="https://accounts.snapchat.com/pri_yanshi8/"><SiSnapchat className='linkImg1'/></a></div>
              <div className="icon"><a href="https://web.whatsapp.com/"><PiWhatsappLogoBold className='linkImg1'/></a></div>            
             </div>
           </form>
        </div>
     </section>
      
    </>
  )
}

export default Contact
