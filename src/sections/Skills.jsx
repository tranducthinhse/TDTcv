import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useState, useEffect } from "react";
import styles from "./Skills.module.css";

const data = [
  { skill: "JavaScript", level: 95, fill: "url(#colorJs)" },
  { skill: "React", level: 90, fill: "url(#colorReact)" },
  { skill: "Figma", level: 95, fill: "url(#colorFigma)" },
  { skill: "Node.js", level: 75, fill: "url(#colorNode)" },
  { skill: "MongoDB", level: 65, fill: "url(#colorMongo)" },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.skillsHeading}>My Skills</h2>

      <div className={`${styles.chartContainer} ${isVisible ? styles.visible : ""}`}>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="colorJs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#facc15" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#eab308" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="colorReact" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="colorFigma" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#d97706" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="colorNode" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#86efac" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="colorMongo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f87171" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#dc2626" stopOpacity={0.7} />
              </linearGradient>
            </defs>

            <XAxis dataKey="skill" tick={{ fill: "#374151", fontSize: 14 }} />
            <YAxis domain={[0, 100]} hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />

            <Bar
              dataKey="level"
              radius={[8, 8, 0, 0]}
              animationDuration={1200}
            >
              <LabelList
                dataKey="level"
                position="top"
                fill="#111"
                fontSize={14}
                formatter={(val) => `${val}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
