import { useRef } from "react";
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';



const Mailer = () => {
    const form = useRef()


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rp3cqbi', 'template_wz4xdg5', form.current, 'GsXZRU7z0Kay4vafb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }); 
            e.target.reset()
    };


    return (
        <section>
            
            <div className="container">
         
                <form ref={form} onSubmit={sendEmail} className="form-group flex-center">
                    <div className="form-group">
                    <input type="text" placeholder="Full Name" name="user_name" required />
                    </div>
                    <div className="form-group">
                    <input type="email" placeholder="Email" name="user_email" required />
                    </div>
                    <div className="form-group">
                    <input type="text" placeholder="Subject" name="subject" required />
                    </div>
                    <div className="form-group">
                    <textarea name="message" cols="30" rows="8"></textarea>
                    </div>
                    <div className="form-group">
                    <button className="btn btn-success" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Mailer;