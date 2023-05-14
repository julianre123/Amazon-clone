import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../assets/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";
import LogoutIcon from "@mui/icons-material/Logout";
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from "../../Redux/amazonSlice";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazonReducer.products);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);

  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(userSignOut());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* Image start here */}
        <Link to="/">
          <div className="headerHover">
            <img className="w-24 mt-2" src={logo} alt="" />
          </div>
        </Link>
        {/* Image end here */}
        {/* Deliver Start here */}
        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p
            className="text-sm text-lightText font-light 
          flex flex-col"
          >
            Deliver to{" "}
            <span
              className="text-sm font-semibold -mt-1 
            text-whiteText"
            >
              Julian
            </span>
          </p>
        </div>
        {/* Deliver end Here */}
        {/* Search start here */}
        <div className="h-10 rounded-md hidden lgl:flex  flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 
          hover:bg-gray-300 border-2 cursor-pointer duration-300 
          text-sm text-amazon_blue font-titleFont flex items-center
           justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <ArrowDropDownIcon />
          </span>
          {showAll && (
            <div>
              <ul
                className="absolute w-56 h-80 top-10 left-0 
              overflow-y-scroll overflow-x-hidden 
              bg-white border-[1px] border-amazon_blue 
              text-black p-2 flex-col gap-1 z-50"
                ref={ref}
              >
                {allItems.map((item) => (
                  <li
                    key={item._id}
                    className="text-sm tracking-wide font-titleFont 
                  border-b-[1px] border-b-transparent 
                  hover:border-b-amazon_blue cursor-pointer 
                  duration-200"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue 
            flex-grow outline-none border-none px-2"
            type="text"
          />
          <span
            className="w-12 h-full flex items-center 
          justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"
          >
            <SearchIcon />
          </span>
        </div>
        {/* Search end here */}
        {/* signin start here */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            {userInfo ? (
              <p className="text-sm text-gray-100 font-medium">
                Hello, {userInfo.userName}
              </p>
            ) : (
              <p className="text-xs text-lightText font-light">
                Hello, sign in
              </p>
            )}

            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>
        </Link>
        {/* signin end here */}
        {/* Orders Start here */}
        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* Orders end here */}
        {/* Cart Start Here */}
        <Link to="/cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText ">Cart </p>
            <span
              className="absolute text-xs top-0 left-6 font-semibold 
            p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex 
            justify-center items-center"
            >
              {products.length > 0 ? products.length : 0}
            </span>
          </div>
        </Link>
        {/* Cart Ends Here */}
        {userInfo && (
          <div
            onClick={handleLogout}
            className="flex flex-col justify-center items-center headerHover relative"
          >
            <LogoutIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
