import React from 'react'

const UserStats = ({repos,followers ,following}) => {
  return (
    <div className=" grid grid-cols-3 gap-6  divide-x divide-gray-700 rounded-xl bg-gray-50 py-4">
    <div className="align-items flex flex-col px-4 text-center">
      <h4 className="font-mono text-xs font-semibold text-gray-700 ">
        Repos
      </h4>
      <p className="font-mono text-lg font-extrabold text-gray-700 ">
        {repos ? repos :"Not Available"}
      </p>
    </div>

    <div className="align-items flex flex-col text-center">
      <h4 className="font-mono text-xs font-semibold text-gray-700 ">
        Followers
      </h4>
      <p className="font-mono text-lg font-extrabold text-gray-700 ">
        {followers ? followers :"Not Available"}
      </p>
    </div>

    <div className="align-items flex flex-col text-center">
      <h4 className="font-mono text-xs font-semibold text-gray-700 ">
        Following
      </h4>
      <p className="font-mono text-lg font-extrabold text-gray-700 ">
        {following? following : "Not Available"}
      </p>
    </div>
  </div>
  )
}

export default UserStats