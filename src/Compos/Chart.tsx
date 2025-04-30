import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

// ─── 1) FULL DATASET ───────────────────────────────────────────────────────
const raw = [
  // shared origin so both curves start at (2000,0)
  { year: 2000, education: 0, career: 0 },

  // Education history
  {
    year: 2005,
    education: 6,
    career: null,
    eduPeriod: "2002 – 2005",
    eduTitle: "Arabic High School",
  },
  {
    year: 2007,
    education: 7,
    career: null,
    eduPeriod: "2006 – 2007",
    eduTitle: "English Course",
  },
  {
    year: 2011,
    education: 8,
    career: null,
    eduPeriod: "2007 – 2011",
    eduTitle: "Bachelor Degree",
  },
  {
    year: 2015,
    education: 9,
    career: null,
    eduPeriod: "2013 – 2015",
    eduTitle: "MBA",
  },
  {
    year: 2024,
    education: 10,
    career: null,
    eduPeriod: "Feb – May 2024",
    eduTitle: "Full-Stack Developer",
  },

  // Career history
  {
    year: 2011, // midpoint of Feb – Apr 2011
    education: null,
    career: 6,
    jobPeriod: "Feb – Apr 2011",
    jobTitle: "VFX Artist",
  },
  {
    year: 2012,
    education: null,
    career: 9,
    jobPeriod: "Jun – Dec 2012",
    jobTitle: "Assisting Production Manager",
  },
  {
    year: 2018, // midpoint of Mar 2017 – Jan 2019
    education: null,
    career: 8,
    jobPeriod: "Mar 2017 – Jan 2019",
    jobTitle: "Advertising Coordinator",
  },
  {
    year: 2019,
    education: null,
    career: 7,
    jobPeriod: "Mar – May 2019",
    jobTitle: "Advertising Designer",
  },
  {
    year: 2020,
    education: null,
    career: 10,
    jobPeriod: "Feb – Nov 2020",
    jobTitle: "Social Media Manager",
  },
  {
    year: 2022, // midpoint of Jun 2021 – Mar 2023
    education: null,
    career: 5,
    jobPeriod: "Jun 2021 – Mar 2023",
    jobTitle: "Graphic Designer",
  },
];

// ─── 2) SORT CHRONOLOGICALLY ────────────────────────────────────────────────
const data = raw.slice().sort((a, b) => a.year - b.year);
export function Chart() {
  const { t, i18n } = useTranslation();
  const [hover, setHover] = useState<any>(null);

  // re-use your sorted `data` array here…
  // (omitted for brevity)

  // for dynamic years in the title:
  const startYear = 2000;
  const endYear = 2026;

  return (
    <div className="w-full text-black p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-1">
        {t("chart.title", { start: startYear, end: endYear })}
      </h2>
      <p className="text-gray-600 mb-4">{t("chart.subtitle")}</p>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ChartContainer
            config={{
              education: { label: t("legend.education"), color: "#888888" },
              career: { label: t("legend.career"), color: "#000000" },
            }}
          >
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, left: 20, bottom: 20 }}
              onMouseMove={(e) =>
                e.activePayload && setHover(e.activePayload[0].payload)
              }
              onMouseLeave={() => setHover(null)}
            >
              {/* X-axis */}
              <XAxis
                dataKey="year"
                type="number"
                domain={[startYear, endYear]}
                tickCount={6}
                tick={{ fill: "#333333" }}
                axisLine={{ stroke: "#CCCCCC" }}
                tickLine={{ stroke: "#CCCCCC" }}
                label={{
                  value: t("axis.year"),
                  position: "bottom",
                  fill: "#333333",
                }}
              />

              {/* Y-axis */}
              <YAxis
                type="number"
                domain={[0, 10]}
                tickCount={6}
                tick={{ fill: "#333333" }}
                axisLine={{ stroke: "#CCCCCC" }}
                tickLine={{ stroke: "#CCCCCC" }}
                label={{
                  value: t("axis.rank"),
                  angle: -90,
                  position: "insideLeft",
                  fill: "#333333",
                  dx: -5, // ← slide the label 5px closer to the axis
                }}
              />

              {/* Education line */}
              <Line
                type="monotone"
                dataKey="education"
                name={t("legend.education")}
                stroke="#888888"
                strokeWidth={2}
                dot={{ r: 4, fill: "#FFFFFF", stroke: "#888888" }}
                activeDot={{ r: 6, fill: "#888888", stroke: "#888888" }}
                connectNulls
              />

              {/* Career line */}
              <Line
                type="monotone"
                dataKey="career"
                name={t("legend.career")}
                stroke="#000000"
                strokeWidth={2}
                dot={{ r: 4, fill: "#FFFFFF", stroke: "#000000" }}
                activeDot={{ r: 6, fill: "#000000", stroke: "#000000" }}
                connectNulls
              />

              {/* Tooltip */}
              <Tooltip
                cursor={{ stroke: "#999999", strokeWidth: 1 }}
                content={<CustomTooltip />}
              />

              {/* Legend */}
              <Legend verticalAlign="top" wrapperStyle={{ color: "#333333" }} />
            </LineChart>
          </ChartContainer>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload }: any) {
  const { t } = useTranslation();

  if (!active || !payload?.length) return null;
  const { eduPeriod, eduTitle, education, jobPeriod, jobTitle, career, year } =
    payload[0].payload;

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-3 text-black">
      {/* Education hover */}
      {education > 0 && (
        <>
          <div className="font-semibold">
            {t(`eduPeriods.${eduPeriod}`)} — {t(`eduTitles.${eduTitle}`)}
          </div>
        </>
      )}

      {/* Career hover */}
      {career > 0 && (
        <>
          <div className="font-semibold">
            {t(`jobPeriods.${jobPeriod}`)} — {t(`jobTitles.${jobTitle}`)}
          </div>
        </>
      )}

      {/* Year label */}
      <div className="text-xs text-gray-500">{t("tooltip.year", { year })}</div>
    </div>
  );
}
