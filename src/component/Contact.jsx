import "/css/Contact.css";

export default function Contact() {
  function form() {




    return (
      <div className="contact-form">
        <div className="formbuilder-text form-group field-Name">
          {/* <label htmlFor="Name" className="formbuilder-text-label">
            Name<p className="formbuilder-required">*</p>
          </label> */}
          <input
            type="text"
            className="form-name"
            minLength={3}
            name="Name"
            access="false"
            id="Name"
            required="required"
            aria-required="true"
            placeholder=" Name*"
          />
        </div>
        <div className="formbuilder-text form-group field-email">
          {/* <label htmlFor="email" className="formbuilder-text-label">
            Email<p className="formbuilder-required">*</p>
          </label> */}
          <input
            type="email"
            className="form-email"
            name="email"
            access="false"
            id="email"
            required="required"
            aria-required="true"
            placeholder=" Email*"
          />
        </div>
        <div className="formbuilder-text form-group field-phone">
          {/* <label htmlFor="phone" className="formbuilder-text-label">
            Phone Number
          </label> */}
          <input
            type="tel"
            className="form-phone"
            name="phone"
            access="false"
            minLength={10}
            maxLength={13}
            id="phone"
            placeholder=" Phone Number"
          />
        </div>
        <div className="formbuilder-text form-group field-message">
          {/* <label htmlFor="message" className="formbuilder-text-label">
            Message<pending className="formbuilder-required">*</pending>
          </label> */}
          <textarea
            type="text"
            className="form-message"
            name="message"
            access="false"
            minLength={10}
            maxLength={240}
            id="message"
            required="required"
            aria-required="true"
            placeholder=" Your Message Here*"
          />
        </div>
        <div className="formbuilder-button form-group field-submit">
          <button
            type="button"
            className="form-button"
            name="submit"
            access="false"
            id="submit"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="contact-parent">
        <img
          src="https://w0.peakpx.com/wallpaper/307/610/HD-wallpaper-porsche-911-996-gt3.jpg"
          alt=""
          className="contact-photo contact-child"
        />

        <div className="contact-child contact-form">
            <div className="contact-heading" >
            <span>Have a question?</span>
            <span>Contact us!</span> 
            </div>
          {form()}
        </div>
    
      </div>
    </div>
  );
}
