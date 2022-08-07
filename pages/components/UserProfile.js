import Avatar from './Avatar'

const UserProfile = ({ name, date, username}) => {
  return (
    <div className="block space-x-6 px-4 w-full">
      <h2 className="w-full md:w-full font-mono text-lg font-bold text-gray-800 md:text-2xl">
        {name}{' '}<br/>
        <span className="inline-block font-mono text-sm text-blue-400">
          {username && `@${username ? username :'Not Available'}`} - {username && <span className=" md:text-md -mt-2 font-mono text-sm font-[400] text-slate-600">
        Joined{' '}
        <span className="flex font-mono text-xs font-semibold md:inline-block md:text-sm">
          {date ? date :"Not Available"}
        </span>
      </span>}
        </span>
      </h2>
    </div>
  )
}

export default UserProfile