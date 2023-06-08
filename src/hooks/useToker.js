import { useEffect, useState } from "react"

const useToken = user => {
    const [ip, setIp] = useState({});
    const handleip = ip => {
        fetch(`https://ipinfo.io/${ip}?token=8f549658ffeece`)
            .then(res => res.json())
            .then(data => setIp(data))
    }
    const getIPAddress = () => {
        fetch("https://api.ipify.org?format=json")
            .then(res => res.json())
            .then(data => {
                handleip(data.ip)
            })
    }
    getIPAddress()
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const uiip = ip?.ip;
        const city = ip?.city;
        const region = ip?.region;
        const postal = ip?.postal;
        const country = ip?.country;
        const timezone = ip?.timezone;
        const currentUser = {
            email: email,
            name: name,
            uiip: uiip,
            city: city,
            region: region,
            postal: postal,
            country: country,
            timezone: timezone,
        };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                })
        }
    }, [user])
    return token;
}

export default useToken;