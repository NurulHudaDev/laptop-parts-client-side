import React from 'react';

const MyProfile = () => {
    return (
        <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                readOnly
                className="input input-bordered  w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                placeholder=" Rating here 1 to 5"
                className="input input-bordered  w-full max-w-xs"
              />
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
        </div>
    );
};

export default MyProfile;