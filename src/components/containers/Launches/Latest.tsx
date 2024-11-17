const Latest = ({ info }: any) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Launch Details: {info?.name}
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={info?.links?.patch?.small}
          alt="Patch"
          className="w-32 h-32 object-cover rounded-md"
        />

        <a
          href={info?.links?.webcast}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Watch Webcast
        </a>
      </div>

      <div className="mt-6">
        <p className="text-lg">
          <strong>Flight Number:</strong> {info?.flight_number}
        </p>
        <p className="text-lg">
          <strong>Date (UTC):</strong>{" "}
          {new Date(info?.date_utc).toLocaleString()}
        </p>
        <p className="text-lg">
          <strong>Success:</strong> {info?.success ? "Yes" : "No"}
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-6">Rocket Details</h2>
      <p className="text-lg">
        <strong>Rocket ID:</strong> {info?.rocket}
      </p>

      <h2 className="text-xl font-semibold mt-6">Crew Members</h2>
      {info?.crew?.length > 0 ? (
        <ul className="list-disc list-inside space-y-2">
          {info?.crew?.map((member: any, index: number) => (
            <li key={index} className="text-lg">
              <strong>Role:</strong> {member.role} | <strong>ID:</strong>{" "}
              {member.crew}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">No crew information available.</p>
      )}

      <h2 className="text-xl font-semibold mt-6">Links</h2>
      <ul className="list-disc list-inside space-y-2">
        {info?.links?.patch?.small && (
          <li>
            <a
              href={info.links?.patch?.small}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Small Patch
            </a>
          </li>
        )}
        {info?.links?.patch?.large && (
          <li>
            <a
              href={info?.links?.patch?.large}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Large Patch
            </a>
          </li>
        )}
        {info?.links?.webcast && (
          <li>
            <a
              href={info?.links?.webcast}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Webcast
            </a>
          </li>
        )}
        {info?.links?.wikipedia && (
          <li>
            <a
              href={info?.links?.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Wikipedia
            </a>
          </li>
        )}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Core Details</h2>
      {info?.cores?.map((core: any, index: number) => (
        <div key={index} className="mt-2 space-y-1">
          <p className="text-lg">
            <strong>Core ID:</strong> {core.core}
          </p>
          <p className="text-lg">
            <strong>Landing Attempt:</strong>{" "}
            {core.landing_attempt ? "Yes" : "No"}
          </p>
          <p className="text-lg">
            <strong>Landing Success:</strong>{" "}
            {core.landing_success ? "Yes" : "No"}
          </p>
          <p className="text-lg">
            <strong>Landing Type:</strong> {core.landing_type}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Latest;
