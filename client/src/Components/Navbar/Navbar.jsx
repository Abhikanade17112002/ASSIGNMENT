import Logo from "../Logo/Logo";
import "./Navbar.styles.css";
import userprofileavatar from "./userprofileavatar.png";
import Imports from "../../../imports";

const Navbar = ({ navBarSearch, setNavBarSearch }) => {
  const {
    NavbarDropDown,
    ImCross,
    GiHamburgerMenu,
    Link,
    TiShoppingCart,
    FaSearch,
    useState,
  } = Imports;
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [input, setInput] = useState("");
  const handelNavSearch = () => {
    if (input) {
      setNavBarSearch(input);
    }
  };
  if (input == "") {
    setNavBarSearch("");
  }
  const handleHamburgerMenu = () => {
    setIsHamburgerClicked(!isHamburgerClicked);
  };
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="navbar-left">
          <div className="navlogo">
            <Logo></Logo>
          </div>
        </div>
        <div className="navbar-right">
          <div className="searchbar-container">
            <input
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="search-img" onClick={() => handelNavSearch()}>
              <FaSearch />
            </div>
          </div>
          <div className="navlinks-container">
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact </Link>
              </li>

              <li>
                <div className="cart-image">
                  <Link to={"/user/cart"}>
                    <TiShoppingCart />
                  </Link>
                </div>
              </li>
              <NavbarDropDown src={userprofileavatar}></NavbarDropDown>
            </ul>
          </div>
          <div className="hamburger-menu" onClick={() => handleHamburgerMenu()}>
            {isHamburgerClicked ? (
              <div>
                <ImCross />
              </div>
            ) : (
              <div>
                <GiHamburgerMenu />{" "}
              </div>
            )}
            <div
              className={` ${
                isHamburgerClicked ? "sidebar-menu" : "sidebar-menu position"
              }   `}
            >
              <ul>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact </a>
                  </li>
                  <li>
                    <div className="cart-image">
                      <Link to={"/user/cart"}>
                        <TiShoppingCart />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to={"/user/profile"}>
                      <div className="user-image">
                        <img src={userprofileavatar} alt="" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
