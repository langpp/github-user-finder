const Repositories = (repo) => {
    return (
        <div className="mt-6 max-w-md min-h-[470px] space-y-4 rounded-lg bg-gray-200 transition duration-300 ease-in md:min-h-fit md:max-w-2xl">
            <div className=" flex w-full md:w-full flex-col">
                {repo.repo.map((index, val) => (
                    <>
                        <a href={index.html_url} target="_blank" className="font-mono text-gray-900 font-bold text-lg mb-2">{index.name} <span className="inline-block bg-gray-300 rounded-full px-3 py-1 pb-2 text-sm font-semibold text-gray-700">{index.visibility}</span></a>
                        <p className="font-mono text-sm font-medium text-gray-800 mt-0">{index.description === null ? "Description Not Available" : index.description}</p>
                        <p className="font-mono text-xs font-medium text-gray-500 mt-0">Language: {index.language === null ? "Language Not Available" : index.language}</p>
                        <p className="font-mono text-xs font-medium text-gray-500 mt-0">Watchers: {index.watchers === null ? "0" : index.watchers} Forks: {index.forks === null ? "0" : index.forks}</p>
                        <hr style={{borderTop: "1px solid #b8b8b8", margin: "15px 0px"}}/>
                    </>
                ))}
            </div> 
        </div>
    )
}

export default Repositories