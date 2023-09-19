// import React from 'react';

import Profile from "../Profile/Profile";

const Info = ({info}) => {
    return (
        <div className="w-1/2 mx-auto bg-fuchsia-200 px-7 ml-8">
            <h1 className='text-center text-3xl font-black'>Information</h1> <hr className="border-black mb-8" />
            
            {
                info.map(profile => <Profile key={profile.id} profile={profile} ></Profile>)
            }
        </div>
    );
};

export default Info;