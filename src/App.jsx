import Header from "./Components/MainPage/Header/Header.jsx";
import Category from "./Components/MainPage/Category/Category.jsx";
import Courses from "./Components/MainPage/Courses/Courses.jsx";
import CoursesCategory from "./Components/MainPage/CoursesCategory/CoursesCategory.jsx";
import PopularCourses from "./Components/MainPage/PopularCourses/PopularCourses.jsx";
import FooterMain from "./Components/MainPage/FooterMain/Footer main.jsx";
import Footer from "./Components/MainPage/FooterMain/Footer.jsx";
function App() {
    return (
        <div className="App">
            <Header/>
            <Category/>
            <Courses/>
            <CoursesCategory/>
            <PopularCourses/>
            <FooterMain/>
            <Footer/>
        </div>
    )
}

export default App
