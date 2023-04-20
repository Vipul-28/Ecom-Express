import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return( <Wrapper>
    <h2 className="common-heading">Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.3949349847619!2d75.82730782920407!3d22.669452599070816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc148e698459%3A0xc45ec6e4d4abf539!2sIndira%20Memorial%20Hospital!5e0!3m2!1sen!2sin!4v1679759030602!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form className="contact-inputs" action="https://formspree.io/f/xvonblaw" method="post">
          <input type="text" placeholder="username" 
            name="username"
            required
            autoComplete="off"
          />
          <input type="email" name="Email" placeholder="Email" autoComplete="off"
          required />
          <textarea name="message" placeholder="Enter your message" id="" cols="30" rows="10" 
          autoComplete="off"
          required></textarea>
          <input type="submit" value="Submit"  />
        </form>
      </div>
    </div>
  </Wrapper>);
};

export default Contact;
