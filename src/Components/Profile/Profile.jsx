

const Profile = ({ profile }) => {
    return (
        <div className="text-center">
            <img className="mx-auto rounded-lg" src={profile.image} alt="" />

            <h2 className="font-semibold text-2xl">{profile.name}</h2>
            <p className="font-medium">{profile.role}</p>
            <p>{profile.title}</p>
        </div>
    );
};

export default Profile;