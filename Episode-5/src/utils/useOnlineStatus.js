import { useEffect, useState } from "react"

export const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        addEventListener("online", () => {
            setOnlineStatus(true);
        });

        addEventListener("offline", () => {
            setOnlineStatus(false);
        });
    }, []);

    return [onlineStatus, setOnlineStatus];
};