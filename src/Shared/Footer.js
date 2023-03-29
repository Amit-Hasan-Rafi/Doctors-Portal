import React from 'react'

function Footer() {
  return (
    <footer className="pt-44 p-10 text-blck"
      style={{
        backgroundImage: `url("https://i.ibb.co/y5V8g17/footer.png")`,
        backgroundSize: 'cover',
      }}>
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className='text-center mt-20'>
        <p>Copyright © 2023 - All right reserved by Doctors Portal Ltd</p>
      </div>
    </footer>
  )
}

export default Footer