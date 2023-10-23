import { Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from "recharts";
import { calculateBioSeries } from "../../lib/calculateBiorhythm";

// const data = [
//   { date: "2023-10-01", physical: 0.4, emotional: -0.6, intellectual: 1 },
//   { date: "2023-10-02", physical: 0.7, emotional: -0.2, intellectual: 0.8 },
//   { date: "2023-10-03", physical: 1, emotional: 0, intellectual: 0.6 },
//   { date: "2023-10-04", physical: 0.6, emotional: 0.2, intellectual: 0.4 },
//   { date: "2023-10-05", physical: 0.2, emotional: 0.6, intellectual: 0.2 },
//   { date: "2023-10-07", physical: -0.5, emotional: 1, intellectual: 0 },
//   { date: "2023-10-08", physical: -1, emotional: 0.5, intellectual: -0.2 },
// ];

const Chart = ({birthDate, targetDate}) => {

  const series = calculateBioSeries(birthDate, targetDate, 15);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={series}>
        <XAxis dataKey={"date"} ticks={[series[1].date, series[15].date, series[29].date]}/>
        <ReferenceLine x={series[15].date} />
        <Line dataKey={"physical"} stroke="#00f" dot={false} type={"natural"} />
        <Line dataKey={"emotional"} stroke="#0f0" dot={false} type={"natural"} />
        <Line dataKey={"intellectual"} stroke="#f00" dot={false} type={"natural"} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
