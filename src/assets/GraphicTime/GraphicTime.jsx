import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Legend,
    Bar,
  } from "recharts";
  const data = [
    { name: "1", data: 25 },
    { name: "3", data: 23 },
    { name: "5", data: 24 },
    { name: "7", data: 25 },
    { name: "9", data: 26 },
    { name: "11", data: 23 },
    { name: "13", data: 21 },
    { name: "15", data: 19 },
    { name: "17", data: 17 },
    { name: "19", data: 17 },
    { name: "21", data: 20 },
    { name: "23", data: 21 },
  ];
  import "./GraphicTime.css";
  
  export function GraphicTime({color}) {
    return (
      <div className="resize">
      <BarChart data={data} width={300} height={200}
      margin=
        {{
          top: 20,
          right: 0,
          left: -35,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="4 1 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="data" fill={color} />
      </BarChart>
      </div>
    );
  }
  