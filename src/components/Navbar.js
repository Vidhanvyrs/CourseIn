import React from "react";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/sidebar_context";
import { useCartContext } from "../context/cart_context";
import { BsPersonSquare } from "react-icons/bs";
const Navbar = () => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();
  return (
    <NavbarWrapper className="bg-white flex">
      <div className="container w-100">
        <div className="brand-and-toggler flex flex-between w-100">
          <Link to="/" className="navbar-brand text-uppercase ls-1 fw-8">
            course<span>in</span>📚
          </Link>
          <div className="navbar-btns flex">
            <Link to="/cart" className="cart-btn">
              {/* <MdShoppingCart /> */}
              <BsPersonSquare />
              <span className="item-count-badge">{total_items}</span>
            </Link>
            {/* <button type="button" className="sidebar-open-btn">
              <MdPerson />
            </button> */}
            <button
              type="button"
              className="sidebar-open-btn"
              onClick={() => openSidebar()}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand {
    font-size: 23px;
    span {
      color: var(--clr-orange);
    }
  }
  .cart-btn {
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge {
      background-color: var(--clr-orange);
      position: absolute;
      right: -15px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn {
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
`;
export default Navbar;
// import React, { useState } from "react";
// import styled from "styled-components";
// import { MdMenu, MdPerson, MdShoppingCart } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { useSidebarContext } from "../context/sidebar_context";
// import { useCartContext } from "../context/cart_context";
// import { BsPersonSquare } from "react-icons/bs";
// import { useCoursesContext } from "../context/courses_context";

// const Navbar = () => {
//   const { total_items } = useCartContext();
//   const { openSidebar } = useSidebarContext();
//   const { courses, setFilteredCourses } = useCoursesContext();
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchQuery(value);
//     const filteredCourses = courses.filter((course) =>
//       course.course_name.toLowerCase().includes(value)
//     );
//     setFilteredCourses(filteredCourses);
//   };

//   return (
//     <NavbarWrapper className="bg-white flex">
//       <div className="container w-100">
//         <div className="brand-and-toggler flex flex-between w-100">
//           <Link to="/" className="navbar-brand text-uppercase ls-1 fw-8">
//             course<span>in</span>📚
//           </Link>
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search courses..."
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//           </div>
//           <div className="navbar-btns flex">
//             <Link to="/cart" className="cart-btn">
//               <BsPersonSquare />
//               <span className="item-count-badge">{total_items}</span>
//             </Link>
//             <button
//               type="button"
//               className="sidebar-open-btn"
//               onClick={() => openSidebar()}
//             >
//               <MdMenu />
//             </button>
//           </div>
//         </div>
//       </div>
//     </NavbarWrapper>
//   );
// };

// const NavbarWrapper = styled.nav`
//   height: 80px;
//   box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px,
//     rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

//   .navbar-brand {
//     font-size: 23px;
//     span {
//       color: var(--clr-orange);
//     }
//   }

//   .search-bar {
//     flex-grow: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 0 20px;

//     input {
//       width: 100%;
//       max-width: 400px;
//       padding: 8px 12px;
//       border: 1px solid var(--clr-grey-3);
//       border-radius: 4px;
//       font-size: 16px;
//     }
//   }

//   .cart-btn {
//     margin-right: 18px;
//     font-size: 23px;
//     position: relative;
//     .item-count-badge {
//       background-color: var(--clr-orange);
//       position: absolute;
//       right: -15px;
//       top: -10px;
//       font-size: 12px;
//       font-weight: 700;
//       display: block;
//       width: 23px;
//       height: 23px;
//       color: var(--clr-white);
//       border-radius: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//   }

//   .sidebar-open-btn {
//     transition: all 300ms ease-in-out;
//     &:hover {
//       opacity: 0.7;
//     }
//   }
// `;

// export default Navbar;
