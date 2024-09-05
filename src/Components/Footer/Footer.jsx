import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () =>
{
    const onSubmit = async (event) =>
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a161a5b4-1a07-4343-b93c-08f43cb7a361");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success)
        {
            alert(res.message);
        }

    };

    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a frontend developer from, India with 2 years of experience in Karmsoft.</p>
                    {/* <p>I am a frontend developer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p> */}
                </div>
                <form onSubmit={onSubmit} className="">
                    <div className="footer-top-right">

                        <div className="footer-email-input">
                            <img src={user_icon} alt="" />
                            <input type="email" placeholder='Enter your email' name='email' />
                        </div>
                        <button type='submit' className="footer-subscribe">Subscribe</button>
                    </div>
                </form>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    © 2023 Alex Bennett. All rights reserved.
                </div>
                <div className="footer-bottom-right">
                    <p> Term of Services </p>
                    <p> Connect with me  </p>
                    <p> Privacy Policy </p>
                </div>
            </div>
        </div>
    )
}

export default Footer