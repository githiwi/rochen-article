import './App.scss'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ArticleDetailPage from "./pages/ArticleDetailPage/ArticleDetailPage.jsx";

function App() {

    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/article/:articleId",
                    element: <ArticleDetailPage />,
                },
                {
                    path: "/about",
                    element: <AboutPage />,
                }
            ],
        },
    ])

    return <RouterProvider router={router}/>

}

function Layout() {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default App
