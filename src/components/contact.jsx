import React, {useState, useEffect} from 'react'
import { send } from 'emailjs-com';

const Contact = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_r7061mo',
      'template_m1fb7cr',
      toSend,
      'T_micWjgHPQcHbS3F'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <>
    <h3>Reach Out!</h3>
    <div className='form-outer-div'>
      <div className='form-div'>
        <form onSubmit={onSubmit}>
          <label className='form-input-label' htmlFor="from_name">Name:</label>
          <br />
          <input
            className='form-input'
            type='text'
            name='from_name'
            value={toSend.from_name}
            onChange={handleChange}
          />
          <br />
          <label className='form-input-label' htmlFor="">Your Email:</label>
          <br />
          <input
            className='form-input'
            type='text'
            name='reply_to'
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <br />
          <label className='form-input-label' htmlFor="message">Message:</label>
          <br />
          <input
            className='form-input'
            type='text'
            name='message'
            value={toSend.message}
            onChange={handleChange}
          />
          <br />
        <button type='submit'>Send me a message!</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact