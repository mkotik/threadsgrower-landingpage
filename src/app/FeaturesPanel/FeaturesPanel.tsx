import Panel from "./Panel";
import metrics from "./metrics.svg";
import unfollower from "./unfollower.svg";
import analyze from "./analyze.svg";

const FeaturesPanel = () => {
  return (
    <div className="min-h-screen bg-[#E7E6E3] pb-[70px]">
      <div className="flex flex-wrap justify-center mt-20 gap-7">
        <Panel text="Track Key Metrics" logo={metrics} />
        <Panel text="Reveal Unfollowers" logo={unfollower} />
        <Panel text="Analyze Raw Data" logo={analyze} />
      </div>
    </div>
  );
};

export default FeaturesPanel;
