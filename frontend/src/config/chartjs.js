import useThemeOptions from "utilities/hooks/useThemeOptions";

const ConfigChartJS = () => {
  const { colors, fonts } = useThemeOptions();

  // Tooltips Options
  const tooltipOptions = {
    backgroundColor: "white",
    borderColor: "rgb(" + colors.primary + ")",
    borderWidth: 0.5,
    bodyColor: "rgb(" + colors.text + ")",
    bodySpacing: 8,
    cornerRadius: 4,
    padding: 16,
    boxPadding: 2,
    titleColor: "rgb(" + colors.primary + ")",
    titleFont: {
      family: fonts.heading,
    },
    bodyFont: {
      family: fonts.body,
    },
    footerFont: {
      family: fonts.body,
    },
  };

  const area = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: tooltipOptions,
    },
    scales: {
      y: {
        border: {
          display: false,
        },
        grid: {
          display: true,
        },
        min: 0,
        max: 20,
        ticks: {
          stepSize: 5,
          font: {
            family: fonts.body,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: fonts.body,
          },
        },
      },
    },
  };

  const bar = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: fonts.body,
          },
        },
      },
      tooltip: tooltipOptions,
    },
    scales: {
      y: {
        border: {
          display: false,
        },
        grid: {
          display: true,
        },
        min: 0,
        max: 20,
        ticks: {
          stepSize: 5,
          font: {
            family: fonts.body,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: fonts.body,
          },
        },
      },
    },
  };

  const line = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: tooltipOptions,
    },
    scales: {
      y: {
        border: {
          display: false,
        },
        grid: {
          display: true,
        },
        min: 0,
        max: 20,
        ticks: {
          stepSize: 5,
          font: {
            family: fonts.body,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: fonts.body,
          },
        },
      },
    },
  };

  const pie = {
    aspectRatio: 2,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: fonts.body,
          },
        },
      },
      tooltip: tooltipOptions,
    },
  };

  const doughnut = {
    aspectRatio: 2,
    cutout: "75%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: fonts.body,
          },
        },
      },
      tooltip: tooltipOptions,
    },
  };

  const radar = {
    aspectRatio: 2,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: fonts.body,
          },
        },
      },
      tooltip: tooltipOptions,
    },
    scales: {
      r: {
        max: 30,
        pointLabels: {
          font: {
            family: fonts.body,
          },
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const polarArea = {
    aspectRatio: 2,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: fonts.body,
          },
        },
      },
      tooltip: tooltipOptions,
    },
    scales: {
      r: {
        ticks: {
          display: false,
        },
      },
    },
    layout: {
      padding: 5,
    },
  };

  return {
    area,
    bar,
    line,
    pie,
    doughnut,
    radar,
    polarArea,
  };
};

export default ConfigChartJS;
