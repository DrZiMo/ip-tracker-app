import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useIpInfo } from "../store/ipAddressInfoStore";
import toast from "react-hot-toast";

const SearchPart = () => {
  const ipInfo = useIpInfo((state) => state.newLocation);
  const [ipAddress, setIpAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toastId = "ip-fetch-toast";

  const handleClick = async () => {
    if (!ipAddress) return;

    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_5LKvun7ydJPfShDND17uPqG0pzIYa&ipAddress=${ipAddress}`
      );

      console.log(res.data);
      ipInfo(res.data);
      setIpAddress("");
      setIsLoading(false);
      toast.success("IP information fetched successfully", { id: toastId });
    } catch (error) {
      console.log("Error while fetching the location", error);
      setIsLoading(false);
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.messages || "Failed to fetch IP information",
          { id: toastId }
        );
      } else {
        toast.error("An unexpected error occurred", { id: toastId });
      }
    }
  };

  return (
    <div className="text-center space-y-5 z-10000 max-w-[700px] mx-auto w-full shadow-md">
      <div className="text-2xl text-white font-[480]">IP Address Tracker</div>
      <div className="flex bg-white rounded-lg w-full">
        <input
          type="text"
          className="flex-1 py-4 md:py-5 pl-5 outline-0 text-[1rem] md:text-md"
          onChange={(e) => setIpAddress(e.target.value)}
          placeholder="Search for any IP address or domain"
        />
        <button
          className={`bg-very-dark-grey hover:bg-dark-grey transition rounded-tr-lg rounded-br-lg px-4 disabled:opacity-50 disabled:cursor-not-allowed`}
          onClick={handleClick}
          disabled={isLoading || !ipAddress}
        >
          <img src="./images/icon-arrow.svg" />
        </button>
      </div>
    </div>
  );
};

export default SearchPart;
