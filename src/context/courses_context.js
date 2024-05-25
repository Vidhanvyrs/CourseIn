import { useContext, useReducer, useEffect, createContext } from "react";
import { GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE } from "../actions";
import reducer from "../reducers/courses_reducer";

const initialState = {
  courses: [],
  single_course: [],
  categories: [],
};

const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCourse = async () => {
    try {
      const response = await fetch(
        "https://test-d00ec-default-rtdb.firebaseio.com/course.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const courses = await response.json();
      //   console.log(courses);
      dispatch({ type: GET_COURSES, payload: courses });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const fetchSingleCourse = async (id) => {
    try {
      const response = await fetch(
        `https://test-d00ec-default-rtdb.firebaseio.com/course/${id}.json`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const singleCourse = await response.json();
      console.log(singleCourse);
      dispatch({ type: GET_SINGLE_COURSE, payload: singleCourse });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://test-d00ec-default-rtdb.firebaseio.com/course.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const courses = await response.json();
      const categories = Object.keys(courses).map(
        (key) => courses[key].category
      );
      //   console.log(categories);
      //   console.log(courses);
      // Dispatch the data to your reducer if needed
      // dispatch({ type: GET_CATEGORIES, payload: data });
      dispatch({ type: GET_CATEGORIES, payload: categories });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchCourse();
    fetchCategories();
  }, []);

  return (
    <CoursesContext.Provider value={{ ...state, fetchSingleCourse }}>
      {children}
    </CoursesContext.Provider>
  );
};
export const useCoursesContext = () => {
  return useContext(CoursesContext);
};
// import {
//   useContext,
//   useReducer,
//   useEffect,
//   createContext,
//   useState,
// } from "react";
// import { GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE } from "../actions";
// import reducer from "../reducers/courses_reducer";

// const initialState = {
//   courses: [],
//   single_course: [],
//   categories: [],
// };

// const CoursesContext = createContext();

// export const CoursesProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [filteredCourses, setFilteredCourses] = useState([]);

//   const fetchCourse = async () => {
//     try {
//       const response = await fetch(
//         "https://test-d00ec-default-rtdb.firebaseio.com/course.json"
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const courses = await response.json();
//       const coursesArray = Object.keys(courses).map((key) => ({
//         id: key,
//         ...courses[key],
//       }));
//       dispatch({ type: GET_COURSES, payload: coursesArray });
//       setFilteredCourses(coursesArray); // Initialize filtered courses
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   const fetchSingleCourse = async (id) => {
//     try {
//       const response = await fetch(
//         `https://test-d00ec-default-rtdb.firebaseio.com/course/${id}.json`
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const singleCourse = await response.json();
//       console.log(singleCourse);
//       dispatch({ type: GET_SINGLE_COURSE, payload: singleCourse });
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch(
//         "https://test-d00ec-default-rtdb.firebaseio.com/course.json"
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const courses = await response.json();
//       const categories = Object.keys(courses).map(
//         (key) => courses[key].category
//       );
//       dispatch({ type: GET_CATEGORIES, payload: categories });
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCourse();
//     fetchCategories();
//   }, []);

//   return (
//     <CoursesContext.Provider
//       value={{
//         ...state,
//         filteredCourses,
//         setFilteredCourses,
//         fetchSingleCourse,
//       }}
//     >
//       {children}
//     </CoursesContext.Provider>
//   );
// };

// export const useCoursesContext = () => {
//   return useContext(CoursesContext);
// };
