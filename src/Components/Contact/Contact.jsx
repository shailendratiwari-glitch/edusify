import React from 'react'
import'./Contact.css'
import msgicon from '../../assets/msg-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phoneicon from '../../assets/phone-icon.png'
import locationicon from '../../assets/location-icon.png'
import whitearrow from '../../assets/white-arrow.png'

const Contact = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4467b953-fbbf-4314-b5d6-24f9af551e1d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
    <div className='contact' id='contact'>
       <div className="contactcall">
        <h3 >Send us a message <img src={msgicon}/></h3>
        <p> Feel free to reach out through contact form or find our contact information below. Your feedback,suggestion suggestions are
            impoertant to us we strive to povide exceptional service to our university community
        </p>
        <ul>
            <li><img src={mailicon}/>
                contact@greek.dev 
            </li>
         <li><img src={phoneicon}/>
                +849794654654
            </li>
             <li><img src={locationicon}/>
                134 Raegan Circles, Altenwerthborough, South Dakota 66620, United States
            </li>
        </ul>
        </div> 
      <div className="contactcall">
        <form  onSubmit={onsubmit}>
            <label > Your Name</label>
           <input type='text' name='name' placeholder='Enter Your Name' required/>
           <label > Phone No</label>
           <input type='tel' name='Phone' placeholder='Enter Your Phone No' required/>
           <label > Write your Message here</label>
           <textarea name='message' row="6" placeholder='Enter Your Message' required/>
           <button type='submit' className='btn dark-btn'> Submit Now <img src={whitearrow}/> </button>
        </form> 
        <span>
           {result}
        </span>

      </div>
    </div>
  )
}

export default Contact
