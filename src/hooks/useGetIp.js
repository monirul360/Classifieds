import { useEffect, useState } from "react";

const useGetip = user => {
    const [userip, setip] = useState('');
    useEffect(() => {
        const ipcheck = (ip) => {
            fetch(`https://ipinfo.io/${ip}?token=8f549658ffeece`)
                .then(res => res.json())
                .then(data => setip(data))
        }
        const getIPAddress = () => {
            fetch("https://api.ipify.org?format=json")
                .then(res => res.json())
                .then(data => {
                    ipcheck(data.ip)
                })
        }
        getIPAddress();
    }, [])
    return userip;
}

export default useGetip;