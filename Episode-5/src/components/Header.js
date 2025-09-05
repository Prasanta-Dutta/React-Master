import { Logo, NavItems, CompanyName } from "./index";

export const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="logo-name">
                    <Logo />
                    <CompanyName />
                </div>
                <NavItems />
            </div>
        </>
    )
};