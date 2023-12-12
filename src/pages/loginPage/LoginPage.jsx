import { Link } from "react-router-dom";
import "./LoginPage.scss";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="logInPage">
              <div className="login_header">
                <h1 className="logo">Instagram</h1>
                <p className="logo_text">
                  Sign up to see photos and videos from your friends.
                </p>
                <button className="btn logo_btn">
                  {" "}
                  <FaFacebookF /> Log in with Facebook
                </button>
              </div>
              <div className="or">
                <div className="or_line"></div>
                <p className="p">OR</p>
                <div className="or_line"></div>
              </div>
              <form className="from" action="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number or Email"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
                <p className="form_text">
                  People who use our service may have uploaded your contact
                  information to Instagram. <Link>Learn More</Link>
                </p>
                <p className="form_text">
                  By signing up, you agree to our <Link>Terms</Link>,{" "}
                  <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link>.
                </p>
                <button className="btn sing_up">Sing up</button>
              </form>
            </div>
            <div className="logInPage">
              <h5 className="have_an_account">
                Have an account? <Link>Log in</Link>
              </h5>
            </div>
            <div className="last_">
              <p>Get the app</p>
              <div className="last_images">
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                  alt=""
                />
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="footer_item">
              <p>
                <Link> Meta </Link>
                <Link> About </Link>
                <Link> Blog </Link>
                <Link> Jobs </Link>
                <Link> Help </Link>
                <Link> API </Link>
                <Link> Privacy </Link>
                <Link> Terms </Link>
                <Link> Location </Link>
                <Link> Instagram </Link>
                <Link> Threads </Link>
                <Link> Contrct Uploading & Not-Users </Link>
                <Link> Meta Verificed </Link>
              </p>
              <p>
                <Link>
                  English <IoIosArrowDown />{" "}
                </Link>
                <span>2023 Instagram from Meta</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
