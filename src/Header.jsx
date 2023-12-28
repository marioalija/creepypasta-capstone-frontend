import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";
import { Link } from "react-router-dom";
export function Header() {
  // opens the modal
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  //closes modal
  const handleClose = () => {
    setIsSignupVisible(false);
  };

  const [isSignupVisible, setIsSignupVisible] = useState(false);
  return (
    <header>
      <Modal show={isSignupVisible} onClose={handleClose}>
        <Signup />
      </Modal>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/about" className="navbar-brand">
            CreepyPasta
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mypage" className="nav-link active" aria-current="page">
                  My Page
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/stories" className="nav-link">
                  All Stories
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleSignupShow}>
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
