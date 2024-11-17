const Past = ({ info }: any) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Past Launches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {info &&
          info?.length > 0 &&
          info?.map((launch: any, index: number) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {launch?.name}
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                <strong>Date (UTC):</strong>{" "}
                {new Date(launch?.date_utc).toLocaleString()}
              </p>

              {launch?.links?.patch?.small ? (
                <img
                  src={launch?.links?.patch?.small}
                  alt={`${launch?.name} patch`}
                  className="w-20 h-20 object-cover mb-4"
                />
              ) : (
                <p className="text-gray-400 italic">No patch available</p>
              )}

              <p className="text-sm text-gray-600 mb-4">
                <strong>Details:</strong>{" "}
                {launch?.details || "No details available"}
              </p>

              {launch?.failures?.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-red-600 mb-2">
                    Failures
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {launch?.failures?.map(
                      (failure: any, failureIndex: number) => (
                        <li key={failureIndex}>
                          Time: {failure?.time}s, Reason: {failure?.reason}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {launch?.links?.webcast && (
                  <a
                    href={launch?.links?.webcast}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Watch Webcast
                  </a>
                )}
                {launch?.links?.wikipedia && (
                  <a
                    href={launch?.links?.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Wikipedia
                  </a>
                )}
                {launch?.links?.article && (
                  <a
                    href={launch?.links?.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Read Article
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Past;
