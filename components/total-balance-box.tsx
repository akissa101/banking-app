import AnimatedCounter from "./animated-counter";
import DoughnutChart from "./doughnut-chart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-slate-700  p-4 shadow-chart sm:gap-6 sm:p-6">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-18 font-semibold text-gray-200 ">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-14 font-medium text-slate-400">
            Total Current Balance
          </p>

          <div className="text-2xl lg:text-3xl flex-1 font-semibold flex-center gap-2  ">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
