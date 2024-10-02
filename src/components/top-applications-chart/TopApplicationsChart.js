import Image from "next/image";
import PropTypes from "prop-types";
import DoublePieChart from "../double-pie-chart/DoublePieChart";

export default function TopApplicationsChart({ topApplications }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center gap-3">
        <Image
          src={"/icons/top-applications.png"}
          alt="icon"
          height={17.5}
          width={17.5}
        />
        <p className="font-medium uppercase text-sm">top applications</p>
      </div>
      <div className="flex flex-row items-center gap-3">
        <Image
          src={"/icons/bar-icon-black.png"}
          alt="icon"
          height={20}
          width={20}
        />
        <p className="font-medium text-primary">All</p>
      </div>
      <DoublePieChart list={topApplications} />
    </div>
  );
}

TopApplicationsChart.propTypes = {
  topApplications: PropTypes.array.isRequired,
};
