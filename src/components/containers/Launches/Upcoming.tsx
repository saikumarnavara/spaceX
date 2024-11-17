const Upcoming = ({ info }: any) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Launches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {info &&
          info?.length > 0 &&
          info?.map((launch: any, index: number) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-start"
            >
              <div className="text-xl font-semibold text-gray-800 mb-2">
                {launch.name}
              </div>

              <p className="text-sm text-gray-600 mb-4">
                <strong>Date (UTC):</strong>{" "}
                {new Date(launch.date_utc).toLocaleString()}
              </p>

              {/* Patch Image */}
              {launch.links.patch.small ? (
                <img
                  src={launch.links.patch.small}
                  alt={`${launch.name} patch`}
                  className="w-20 h-20 object-cover mb-4"
                />
              ) : (
                <p className="text-gray-400 italic">No patch available</p>
              )}

              {launch.links.webcast && (
                <a
                  href={launch.links.webcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mb-4"
                >
                  Watch Webcast
                </a>
              )}

              <p className="text-sm text-gray-600">
                <strong>Rocket ID:</strong> {launch.rocket}
              </p>

              <p className="text-sm text-gray-600 mb-4">
                <strong>Launchpad:</strong> {launch.launchpad}
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Core Details
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {launch.cores.map((core: any, coreIndex: number) => (
                  <li key={coreIndex}>
                    {core.core ? `Core ID: ${core.core}` : "Core ID: Unknown"},
                    Gridfins: {core.gridfins ? "Yes" : "No"}, Legs:{" "}
                    {core.legs ? "Yes" : "No"}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Upcoming;
