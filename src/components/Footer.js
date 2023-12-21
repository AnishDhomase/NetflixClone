import './Footer.css';


function Footer() {
  return (
    <section className='fter'>
        <span className="logo"><img src={require("./images/netflix.png")}/></span>
        <span>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
        </span>
    </section>
  );
}

export default Footer;
