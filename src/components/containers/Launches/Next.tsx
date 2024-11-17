const Next = ({ info }: any) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Next Launch</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {info?.name}
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          <strong>Date (UTC):</strong>{" "}
          {new Date(info?.date_utc).toLocaleString()}
        </p>

        {info?.links?.patch?.small ? (
          <img
            src={info?.links?.patch?.small}
            alt={`${info?.name} patch`}
            className="w-32 h-32 object-cover mb-4"
          />
        ) : (
          <p className="text-gray-400 italic mb-4">No patch available</p>
        )}

        {info?.links?.webcast && (
          <a
            href={info?.links?.webcast}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-4 block"
          >
            Watch Webcast
          </a>
        )}

        <p className="text-sm text-gray-600 mb-4">
          <strong>Rocket ID:</strong> {info?.rocket}
        </p>

        <p className="text-sm text-gray-600 mb-4">
          <strong>Launchpad:</strong> {info?.launchpad}
        </p>

        <h3 className="text-sm font-semibold text-gray-800 mb-2">
          Core Details
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          {info?.cores?.map((core: any, index: number) => (
            <li key={index}>
              Core ID: {core?.core || "Unknown"}, Flight: {core?.flight},
              Gridfins: {core?.gridfins ? "Yes" : "No"}, Legs:{" "}
              {core?.legs ? "Yes" : "No"}
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-600">
          <strong>Details:</strong> {info?.details || "No details available"}
        </p>
      </div>
    </div>
  );
};

export default Next;
