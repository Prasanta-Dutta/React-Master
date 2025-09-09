import UserClass from "../components/UserClass"

export const About = () => {
    return(
        <>
            <div className="about-container">
                <UserClass name="Prasanta" />
            </div>
            <div className="about-container">
                <h1>This is About Page</h1>
                <h2>Learning React Router 😎🚀</h2>
                <h3>Using react-router-dom</h3>
                <h3>Handling Error also 🛡❌</h3>
                <h4>createBrowserRouter, routerProvider, useRouteError</h4>
            </div>
        </>
    )
}