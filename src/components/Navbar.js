import { BubblyLink } from "react-bubbly-transitions";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export const Nav = (props) => {
  const { darkTheme, setDarkTheme } = props;
  const activeTheme = darkTheme ? { backgroundColor: "#1a1a1a", color: "white" } : { backgroundColor: "white", color: "#1a1a1a" };
  return (
    <header className={"m-0 pb-2 p-3"} style={activeTheme}>
      <nav className={"navbar px-1 px-md-3 pb-2"} style={activeTheme}>
        <div className="container-fluid px-2 px-md-5 d-flex align-items-center">
          <Link
            className={"navbar-brand logo m-0 p-0 fw-semibold"}
            style={{ ...activeTheme, fontFamily: "Cinzel Decorative" }}
            to="/"
          >
              <span className="fs-2">R</span>
              <span className="fs-4"> ona </span>
            <span className="fs-2 reverse d-inline-block">K</span>
          </Link>
          <div class=" ms-auto form-check form-switch b-icons me-md-4 me-2">
            <Fade top duration={2000}>
              <input type="checkbox" onChange={() => setDarkTheme(prev => !prev)} name="switch" id="switch" />
              <label for="switch"></label>
              </Fade>
          </div>
          <button
            class="btn p-0 m-0"
            style={activeTheme}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            <i class="bi bi-list fs-2 p-2"></i>
          </button>

          <div
            class="offcanvas offcanvas-top h-100"
            style={activeTheme}
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div class="offcanvas-header p-4 pb-2">
              <button
                type="button"
                class=" btn ms-auto"
                style={activeTheme}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i class=" fs-4 bi bi-x-lg"></i>
              </button>
            </div>
            <div class="offcanvas-body">
              <ul className="list-group list-group-flush text-center align-items-center">
                <li class="list-group-item border-0 m-2 w-50 mb-3" style={activeTheme}>
                  <Fade left duration={2000} delay={250}><BubblyLink data-bs-dismiss="offcanvas" to="/"><button className="text-reset border-0 bg-transparent" data-bs-dismiss="offcanvas">ABOUT</button></BubblyLink></Fade>
                </li>
                <li class="list-group-item border-0 m-2 w-50 mb-3" style={activeTheme}>
                  <Fade right duration={2000} delay={250}><BubblyLink to="/projects"><button className="text-reset border-0 bg-transparent" data-bs-dismiss="offcanvas"> PROJECTS </button></BubblyLink></Fade>
                </li>
                <li class="list-group-item border-0 m-2 w-50 mb-3" style={activeTheme}>
                  <Fade left duration={2000} delay={250}><BubblyLink to="/skills"><button className="text-reset border-0 bg-transparent" data-bs-dismiss="offcanvas"> SKILLS </button></BubblyLink></Fade>
                </li>
                <li class="list-group-item border-0 m-2 w-50 mb-3" style={activeTheme}>
                  <Fade right duration={2000} delay={250}><BubblyLink to="/experience"><button className="text-reset border-0 bg-transparent" data-bs-dismiss="offcanvas"> EXPERIENCE </button></BubblyLink></Fade>
                </li>
                <li class="list-group-item border-0 m-2 w-50 mb-3" style={activeTheme}>
                  <Fade left duration={2000} delay={250}><BubblyLink to="/contact"><button className="text-reset border-0 bg-transparent" data-bs-dismiss="offcanvas"> CONTACT ME </button></BubblyLink></Fade>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
