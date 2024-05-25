// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Course from "./Course";
// import {
//   PYTHON,
//   WEB_DEVELOPMENT,
//   DATA_SCIENCE,
//   AWS,
//   DESIGN,
// } from "../utils/constant";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState(PYTHON);
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch(
//           "https://test-d00ec-default-rtdb.firebaseio.com/course.json"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         const coursesArray = Object.keys(data).map((key) => ({
//           id: key,
//           ...data[key],
//         }));
//         console.log(coursesArray);
//         setCourses(coursesArray);
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const tabHandler = (category) => {
//     setActiveTab(category);
//   };

//   return (
//     <TabsWrapper>
//       <div className="tabs">
//         <ul className="flex flex-wrap">
//           <li className="tabs-head-item">
//             <button
//               type="button"
//               className={`tab-btn ${activeTab === PYTHON ? "active" : ""}`}
//               onClick={() => tabHandler(PYTHON)}
//             >
//               Python
//             </button>
//           </li>
//           <li className="tabs-head-item">
//             <button
//               type="button"
//               className={`tab-btn ${
//                 activeTab === WEB_DEVELOPMENT ? "active" : ""
//               }`}
//               onClick={() => tabHandler(WEB_DEVELOPMENT)}
//             >
//               Web Development
//             </button>
//           </li>
//           <li className="tabs-head-item">
//             <button
//               type="button"
//               className={`tab-btn ${
//                 activeTab === DATA_SCIENCE ? "active" : ""
//               }`}
//               onClick={() => tabHandler(DATA_SCIENCE)}
//             >
//               Data Science
//             </button>
//           </li>
//           <li className="tabs-head-item">
//             <button
//               type="button"
//               className={`tab-btn ${activeTab === AWS ? "active" : ""}`}
//               onClick={() => tabHandler(AWS)}
//             >
//               AWS Certification
//             </button>
//           </li>
//           <li className="tabs-head-item">
//             <button
//               type="button"
//               className={`tab-btn ${activeTab === DESIGN ? "active" : ""}`}
//               onClick={() => tabHandler(DESIGN)}
//             >
//               Design
//             </button>
//           </li>
//         </ul>
//         <div className="tabs-body">
//           {courses
//             .filter((course) => course.category === activeTab)
//             .map((course) => (
//               <Course key={course.id} {...course} />
//             ))}
//         </div>
//       </div>
//     </TabsWrapper>
//   );
// };

// const TabsWrapper = styled.div`
//   .tabs {
//     margin-top: 16px;
//     .tabs-head-item button {
//       border: 1px solid rgba(0, 0, 0, 0.7);
//       padding: 10px 13px;
//       margin-right: 6px;
//       transition: var(--transition);
//       font-weight: 500;
//       font-size: 15px;
//       margin-bottom: 10px;

//       &:hover {
//         background-color: var(--clr-black);
//         color: var(--clr-white);
//       }

//       &.active {
//         background-color: var(--clr-black);
//         color: var(--clr-white);
//       }
//     }
//     .tabs-body {
//       margin-top: 32px;
//     }
//     @media screen and (min-width: 600px) {
//       .tabs-body {
//         display: grid;
//         gap: 26px;
//         grid-template-columns: repeat(2, 1fr);
//       }
//     }
//     @media screen and (min-width: 992px) {
//       .tabs-body {
//         grid-template-columns: repeat(3, 1fr);
//       }
//     }
//     @media screen and (min-width: 1400px) {
//       .tabs-body {
//         grid-template-columns: repeat(4, 1fr);
//       }
//     }
//   }
// `;

// export default Tabs;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Course from "./Course";
import {
  PYTHON,
  WEB_DEVELOPMENT,
  DATA_SCIENCE,
  AWS,
  DESIGN,
} from "../utils/constant";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(PYTHON);
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://test-d00ec-default-rtdb.firebaseio.com/course.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const coursesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        console.log(coursesArray); // Debugging step
        setCourses(coursesArray);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchCourses();
  }, []);

  const tabHandler = (category) => {
    setActiveTab(category);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = courses
    .filter((course) => course.category === activeTab)
    .filter((course) => course.course_name.includes(searchQuery));

  console.log("Filtered Courses: ", filteredCourses); // Debugging step

  return (
    <TabsWrapper>
      <div className="tabs">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search for courses in this tab..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <ul className="flex flex-wrap">
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === PYTHON ? "active" : ""}`}
              onClick={() => tabHandler(PYTHON)}
            >
              Python
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${
                activeTab === WEB_DEVELOPMENT ? "active" : ""
              }`}
              onClick={() => tabHandler(WEB_DEVELOPMENT)}
            >
              Web Development
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${
                activeTab === DATA_SCIENCE ? "active" : ""
              }`}
              onClick={() => tabHandler(DATA_SCIENCE)}
            >
              Data Science
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === AWS ? "active" : ""}`}
              onClick={() => tabHandler(AWS)}
            >
              AWS Certification
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === DESIGN ? "active" : ""}`}
              onClick={() => tabHandler(DESIGN)}
            >
              Design
            </button>
          </li>
        </ul>
        <div className="tabs-body">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Course key={course.id} {...course} />
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  .tabs {
    margin-top: 16px;

    .search-bar {
      margin-bottom: 16px;
      display: flex;
      justify-content: center;
      input {
        width: 100%;
        max-width: 400px;
        padding: 8px 12px;
        border: 1px solid var(--clr-grey-3);
        border-radius: 4px;
        font-size: 16px;
      }
    }

    .tabs-head-item button {
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }

      &.active {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }

    .tabs-body {
      margin-top: 32px;
    }

    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px) {
      .tabs-body {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px) {
      .tabs-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default Tabs;
