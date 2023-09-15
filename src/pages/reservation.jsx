import React from 'react';
import Logo from '../components/logo' // Assuming the file name is 'Header' with an uppercase 'H'
import '../components/reservation.css';

const Reservation = () => {
  return (
    <div className='m-8'>
    <Logo/>

      <section className="reservation scroll-auto bg-body_color font-font text-text_color ">
        <div className="container pt-[300px] flex justify-center w-full mx-auto">
          <div className="form reservation-form  ">
        <form action="" className="form-left  w-[85%]  lg:w-[100%] lg:mx-64 lg:mt-20 mt-12 mx-8 sm:mx-12  ">
              <h2 className="headline-1 text-center text-4xl font-semibold text-text_color mb-2">Online Reservation</h2>
              <p className="form-text text-center text-title_color">
                Booking request <a href="tel:+88123123456" className="link text-text_color ">+88-123-123456</a> or fill out the order form
              </p>
              <div className="input-wrapper ">
                <input type="text" name="name" placeholder="Your Name" autoComplete="off" className="input-field" />
                <input type="tel" name="phone" placeholder="Phone Number" autoComplete="off" className="input-field" />
              </div>
              <div className="input-wrapper">
                <div className="icon-wrapper">
                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                  <select name="person" className="input-field">
                    <option value="1-person">1 Person</option>
                    <option value="2-person">2 Person</option>
                    <option value="3-person">3 Person</option>
                    <option value="4-person">4 Person</option>
                    <option value="5-person">5 Person</option>
                    <option value="6-person">6 Person</option>
                    <option value="7-person">7 Person</option>
                  </select>
                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>
                <div className="icon-wrapper">
                  <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>
                  <input type="date" name="reservation-date" className="input-field"/>
                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>
                <div className="icon-wrapper">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                  <select name="time" className="input-field">
                    <option value="08:00am">08 : 00 am</option>
                    <option value="09:00am">09 : 00 am</option>
                    <option value="10:00am">10 : 00 am</option>
                    <option value="11:00am">11 : 00 am</option>
                    <option value="12:00pm">12 : 00 pm</option>
                    <option value="01:00pm">01 : 00 pm</option>
                    <option value="02:00pm">02 : 00 pm</option>
                    <option value="03:00pm">03 : 00 pm</option>
                    <option value="04:00pm">04 : 00 pm</option>
                    <option value="05:00pm">05 : 00 pm</option>
                    <option value="06:00pm">06 : 00 pm</option>
                    <option value="07:00pm">07 : 00 pm</option>
                    <option value="08:00pm">08 : 00 pm</option>
                    <option value="09:00pm">09 : 00 pm</option>
                    <option value="10:00pm">10 : 00 pm</option>
                  </select>
                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>
              </div>
              <textarea name="message" placeholder="Message" autoComplete="off" className="input-field h-auto "></textarea>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1 text-redd font-semibold ">Book A Table</span>
              </button>
            </form>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reservation;
