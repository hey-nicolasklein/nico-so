import { DateTime } from "luxon";

interface RefreshedTimeProps {
    refreshed: number;
}

const RefreshedTime: React.FC<RefreshedTimeProps> = ({ refreshed }) => {
    const refreshedDateTime = DateTime.fromMillis(refreshed);

    return (
        <p className="m-0 hidden p-0 pr-4 font-thin leading-none md:block">
            last refreshed{" "}
            {refreshedDateTime.toLocaleString({
                hour: "numeric",
                minute: "2-digit",
            })}
        </p>
    );
};

export default RefreshedTime;
