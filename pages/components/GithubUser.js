import UserProfile from './UserProfile'
import UserBio from './UserBio'
import UserStats from './UserStats'
import UserData from './UserData'
import Repositories from './Repositories'

const GithubUser = (props) => {
  const date = new Date(props.data.created_at)
  const newDate = date.toDateString(4, 10).slice(4, 15)
  return (
    <div className="mx-auto mt-6 max-w-md min-h-[470px] space-y-4 rounded-lg bg-gray-200 py-6 transition duration-300 ease-in md:min-h-fit md:max-w-2xl">
      <UserProfile
        name={props.data.name}
        date={newDate}
        username={props.data.login}
      />

      <div className=" flex w-full md:w-full flex-col space-y-6 px-6 py-3">
        <UserBio bio={props.data.bio} />
        <UserStats
          repos={props.data.public_repos}
          followers={props.data.followers}
          following={props.data.following}
        />

        <UserData
          location={props.data.location}
          twitterUsername={props.data.twitter_username}
          blog={props.data.blog}
          company={props.data.company}
        />

        <Repositories
          repo={props.repo}
        />
      </div> 
    </div>
  )
}

export default GithubUser