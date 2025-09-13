import { Logo, NavItems, CompanyName } from "./index";

export const Header = () => {
    return (
        <>
            <div className="flex justify-between bg-gray-100 shadow-md mb-3">
                <div className="flex">
                    <Logo />
                    <CompanyName />
                </div>
                <NavItems />
            </div>
        </>
    )
};