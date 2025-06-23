const InfoSegment = ({
  title,
  info,
  border,
}: {
  title: string;
  info: string;
  border: boolean;
}) => {
  return (
    <div
      className={`text-center py-4 ${
        border ? "md:border-l md:pl-15 border-dark-grey" : ""
      } md:pr-5`}
    >
      <div className="text-dark-grey uppercase font-bold text-xs">{title}</div>
      <div className="text-xl font-semibold">{info}</div>
    </div>
  );
};

export default InfoSegment;
