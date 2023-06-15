import GoogleContext from "./GoogleContext";
import React from "react";
import { useState, useEffect, useContext } from "react";

export default function MapChart({ data, id }) {
  const [chart, setChart] = useState(null);
  const { google } = useContext(GoogleContext);

  useEffect(() => {
    if (google && !chart) {
      var options = {
        backgroundColor: "#121212",
        defaultColor: "#636",
      };
      // Instantiate and draw our chart, passing in some options.
      const draw = () => {
        const newChart = new google.visualization.GeoChart(
          document.getElementById("mapChart-" + id)
        );
        newChart.draw(google.visualization.arrayToDataTable(data), options);

        setChart(newChart);
      };
      google.charts.load("current", { packages: ["geochart"] }).then(draw);

      google.setOnLoadCallback(draw);
    }
  }, [google, data, chart, id]);

  return (
    <>
      {!chart && <div>...</div>}
      <div id={"mapChart-" + id} className={!google ? "d-none w-100" : ""} />
    </>
  );
}
