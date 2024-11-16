import { SpaceXService } from "../../../services/spacex-services";
import { useEffect } from "react";
import {
  getCompanyDetails,
  getCompanyDetailsSuccess,
  getCompanyDetailsFailure,
} from "../../../redux/slices/company-slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const About = () => {
  const dispatch = useDispatch();
  const { loading, error, companyDetails } = useSelector(
    (state: any) => state.companyDetails
  );

  useEffect(() => {
    async function GetDetails() {
      try {
        dispatch(getCompanyDetails());
        const response = await SpaceXService.getCompanyDetails();
        if (response.status === 200) {
          dispatch(getCompanyDetailsSuccess(response.data));
        }
      } catch (err) {
        console.log(err);
        dispatch(getCompanyDetailsFailure(err));
      }
    }
    GetDetails();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {loading && <Loader />}
      {error && (
        <div className="text-red-600 text-center">
          <p>Error: {error.message || "Failed to load company details."}</p>
        </div>
      )}
      {companyDetails && (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {companyDetails?.name}
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            {companyDetails?.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Headquarters
              </h2>
              <p className="text-gray-600">
                {companyDetails?.headquarters?.address},{" "}
                {companyDetails?.headquarters?.city},{" "}
                {companyDetails?.headquarters?.state}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Key Figures
              </h2>
              <p className="text-gray-600">
                <strong>CEO:</strong> {companyDetails.ceo}
              </p>
              <p className="text-gray-600">
                <strong>COO:</strong> {companyDetails.coo}
              </p>
              <p className="text-gray-600">
                <strong>CTO:</strong> {companyDetails.cto}
              </p>
              <p className="text-gray-600">
                <strong>CTO Propulsion:</strong>{" "}
                {companyDetails?.cto_propulsion}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Stats
              </h2>
              <p className="text-gray-600">
                <strong>Employees:</strong> {companyDetails.employees}
              </p>
              <p className="text-gray-600">
                <strong>Vehicles:</strong> {companyDetails.vehicles}
              </p>
              <p className="text-gray-600">
                <strong>Launch Sites:</strong> {companyDetails.launch_sites}
              </p>
              <p className="text-gray-600">
                <strong>Test Sites:</strong> {companyDetails.test_sites}
              </p>
              <p className="text-gray-600">
                <strong>Valuation:</strong> $
                {companyDetails.valuation?.toLocaleString()}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Links
              </h2>
              <ul className="text-blue-500 space-y-2">
                <li>
                  <a
                    href={companyDetails.links?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href={companyDetails.links?.flickr}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flickr
                  </a>
                </li>
                <li>
                  <a
                    href={companyDetails.links?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href={companyDetails.links?.elon_twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Elon Musk's Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
