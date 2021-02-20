import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  "Participants",
  "Id",
  "Hour",
  "Noise",
  "Light",
  "Deep/Light sleep",
];
const data = [
  ["Asi Meir", "123412345", "18:00", 5, 6, 85],
  ["Liran Meir", "123412345", "18:00", 10, 5, 88],
  ["Joe James", "123412345", "19:00", 12, 7, 77],
  ["jessie James", "123412345", "20:00", 13, 6, 76],
];

const options = {
  filterType: "checkbox",
};

const Dashboard = () => {
  return (
    <div>
      <MUIDataTable
        title={"Dashboard"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default Dashboard;
