import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await getProfile();
                console.log("PROFILE RESPONSE =>", response);
                setProfile(response.userDetails);
            } catch (error) {
                console.log("PROFILE ERROR =>", error);
            }
        };
        fetchProfile();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            {profile && (
                <><p>{profile.email}</p>
                 <p>{profile.mobNumber}</p>
                  <p>{profile.name}</p></>
            )}
        </div>
    );
};

export default Profile;