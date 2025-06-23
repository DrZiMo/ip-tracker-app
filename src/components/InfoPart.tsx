import { useIpInfo } from "../store/ipAddressInfoStore";
import InfoSegment from "./infoSegment";

const InfoPart = () => {
  const { location, ip, isp } = useIpInfo((state) => state.ipInfoData);
  return (
    <div className="bg-white w-full md:px-5 rounded-lg md:py-15 flex flex-col md:flex-row md:justify-around shadow-md h-fit ">
      <InfoSegment title="Ip address" info={ip || "..."} border={false} />
      <InfoSegment
        title="locations"
        info={`${location?.city || "..."}, ${location?.region || "..."}`}
        border={true}
      />
      <InfoSegment
        title="Timezone"
        info={location?.timezone || "..."}
        border={true}
      />
      <InfoSegment title="ISP" info={isp} border={true} />
    </div>
  );
};

export default InfoPart;
