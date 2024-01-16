import useThemeOptions from "utilities/hooks/useThemeOptions";

const DataChartJS = () => {
  const { colors } = useThemeOptions();

  const visitors = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [6.25, 7.5, 10, 7.5, 10, 12.5, 10, 12.5, 10, 12.5, 15, 16.25],
        fill: true,
        backgroundColor: "rgb(" + colors.primary + "/ .1)",
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
        pointBackgroundColor: "white",
        pointBorderColor: "rgb(" + colors.primary + ")",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverBackgroundColor: "rgb(" + colors.primary + ")",
        pointHoverBorderColor: "white",
        pointHoverRadius: 6,
        pointHoverBorderWidth: 2,
        tension: 0.5,
      },
    ],
  };

  const area = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [5, 10, 15, 10, 15, 10],
        fill: true,
        backgroundColor: "rgb(" + colors.primary + "/ .1)",
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
        pointBackgroundColor: "white",
        pointBorderColor: "rgb(" + colors.primary + ")",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverBackgroundColor: "rgb(" + colors.primary + ")",
        pointHoverBorderColor: "white",
        pointHoverRadius: 6,
        pointHoverBorderWidth: 2,
        tension: 0.5,
      },
    ],
  };

  const bar = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Potatoes",
        data: [5, 10, 15, 10, 15, 10],
        backgroundColor: "rgb(" + colors.primary + "/ .1)",
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
      },
      {
        label: "Tomatoes",
        data: [7.5, 10, 17.5, 15, 12.5, 5],
        backgroundColor: "rgb(" + colors.primary + "/ .5)",
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
      },
    ],
  };

  const line = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [5, 10, 15, 10, 15, 10],
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
        pointBackgroundColor: "white",
        pointBorderColor: "rgb(" + colors.primary + ")",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverBackgroundColor: "rgb(" + colors.primary + ")",
        pointHoverBorderColor: "white",
        pointHoverRadius: 8,
        pointHoverBorderWidth: 2,
        tension: 0.5,
      },
    ],
  };

  const pie = {
    labels: ["Potatoes", "Tomatoes", "Onions"],
    datasets: [
      {
        data: [25, 10, 15],
        backgroundColor: [
          "rgb(" + colors.primary + "/ .1)",
          "rgb(" + colors.primary + "/ .5)",
          "rgb(" + colors.primary + "/ .25)",
        ],
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
      },
    ],
  };

  const doughnut = {
    labels: ["Potatoes", "Tomatoes", "Onions"],
    datasets: [
      {
        data: [25, 10, 15],
        backgroundColor: [
          "rgb(" + colors.primary + "/ .1)",
          "rgb(" + colors.primary + "/ .5)",
          "rgb(" + colors.primary + "/ .25)",
        ],
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
      },
    ],
  };

  const radar = {
    labels: ["Drinks", "Snacks", "Lunch", "Dinner"],
    datasets: [
      {
        label: "Potatoes",
        data: [25, 25, 25, 25],
        backgroundColor: "rgb(" + colors.primary + "/ .1)",
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: "white",
        pointBorderColor: "rgb(" + colors.primary + ")",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverBackgroundColor: "rgb(" + colors.primary + ")",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
        pointHoverRadius: 6,
      },
      {
        label: "Tomatoes",
        data: [15, 15, 0, 15],
        backgroundColor: "rgb(" + colors.primary + "/ .25",
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: "white",
        pointBorderColor: "rgb(" + colors.primary + ")",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverBackgroundColor: "rgb(" + colors.primary + ")",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
        pointHoverRadius: 6,
      },
    ],
  };

  const polarArea = {
    labels: ["Potatoes", "Tomatoes", "Onions"],
    datasets: [
      {
        data: [25, 10, 15],
        backgroundColor: [
          "rgb(" + colors.primary + "/ .1)",
          "rgb(" + colors.primary + "/ .5)",
          "rgb(" + colors.primary + "/ .25)",
        ],
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
      },
    ],
  };

  const lineWithAnnotationTO = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Total Orders",
        data: [1250, 1300, 1550, 900, 1800, 1100, 1600],
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
        pointBorderColor: "rgb(" + colors.primary + ")",
        pointBorderWidth: 4,
        pointRadius: 2,
        pointHoverBackgroundColor: "rgb(" + colors.primary + ")",
        pointHoverBorderColor: "white",
        pointHoverRadius: 2,
        tension: 0.5,
      },
    ],
  };

  const lineWithAnnotationAO = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Active Orders",
        data: [100, 125, 75, 125, 100, 75, 75],
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
        pointBorderColor: "rgb(" + colors.primary + ")",
        pointBorderWidth: 4,
        pointRadius: 2,
        pointHoverBackgroundColor: "rgb(" + colors.primary + ")",
        pointHoverBorderColor: "white",
        pointHoverRadius: 2,
        tension: 0.5,
      },
    ],
  };

  const lineWithAnnotationPO = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Pending Orders",
        data: [300, 300, 600, 700, 600, 300, 300],
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
        pointBorderColor: "rgb(" + colors.primary + ")",
        pointBorderWidth: 4,
        pointRadius: 2,
        pointHoverBackgroundColor: "rgb(" + colors.primary + ")",
        pointHoverBorderColor: "white",
        pointHoverRadius: 2,
        tension: 0.5,
      },
    ],
  };

  const lineWithAnnotationSO = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Shipped Orders",
        data: [200, 400, 200, 500, 100, 100, 400],
        borderColor: "rgb(" + colors.primary + ")",
        borderWidth: 2,
        pointBorderColor: "rgb(" + colors.primary + ")",
        pointBorderWidth: 4,
        pointRadius: 2,
        pointHoverBackgroundColor: "rgb(" + colors.primary + ")",
        pointHoverBorderColor: "white",
        pointHoverRadius: 2,
        tension: 0.5,
      },
    ],
  };

  return {
    visitors,
    area,
    bar,
    line,
    pie,
    doughnut,
    radar,
    polarArea,
    lineWithAnnotationTO,
    lineWithAnnotationAO,
    lineWithAnnotationPO,
    lineWithAnnotationSO,
  };
};

export default DataChartJS;
