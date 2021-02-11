import "./contactpage.scss";

const ContactPage = () => {
  return (
    <div className="card-contact">
      <span className="avatar">
        <img
          src="https://sv1.picz.in.th/images/2021/02/10/ot42sE.jpg"
          alt="avatar"
        />
      </span>
      <h1>TAE</h1>
      <p>COMPUTER ENGINEERING STUDENT</p>
      <div className="btn-link">
        <a href="https://www.facebook.com/taetae2323" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://github.com/swaggytt" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://instagram.com/t_g9h" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
