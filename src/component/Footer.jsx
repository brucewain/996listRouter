import "/css/Footer.css";

const shop = (props) => {
  return (
    <div className="footer-parent">
      <h4>Shop</h4>
      {props.chassis.map((site, i) => (
        <a href={site.url} className="footer-child" key={i}>
          {site.model}
        </a>
      ))}
    </div>
  );
};

const nineelevenlist = (props) => {
  return (
    <div className="footer-parent">
      <h4>996LIST</h4>
      {props.pages && props.pages.map((site, i) => (
        <a href={site.url} className="footer-child" key={i}>
          {site.title}
        </a>
      ))}
    </div>
  );
};

const emaillist = () => {
  
  const form = ["Newsletter", "Events", "Inventory"];
  return (
    <div className="footer-email-form">
      <h4>Join our list</h4>
      <form action="">
        <div className="footer-checkbox-form">
          {form && form.map((site, i) => (
            <div className="footer-checkbox-items" key={i}>
              <input type="checkbox" placeholder={site} />
              <label type="submit">
                <p>{site}</p>
              </label>
            </div>
          ))}
          <div className="footer-useragreement-form footer-checkbox-items">
            <input type="checkbox" placeholder="User Agreement" required />
            <p>
              I agree to the terms and conditions, privacy policy and cookie
              policy.
            </p>
          </div>
          <div className="footer-form-submit">
            <input
              type="email"
              className="email"
              placeholder="Email Address"
              required
            ></input>
            <input type="submit" className="submit" value="Submit"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default function Footer(props) {
  return (
    <nav className="footer">
      {shop(props)}
      {nineelevenlist(props)}
      {emaillist()}
    </nav>
  );
}
