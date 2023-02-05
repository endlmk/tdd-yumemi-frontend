import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import PrefCheckBox from "../components/PrefCheckBox";
import { getPrefectures } from "./api/prefectures";
import type { PrefectureData } from "./api/prefectures";
import type { CompositionData } from "./api/composition/[prefCode]";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type {
  PopulationChartData,
  PopulationOfPref,
  Line,
  Point,
} from "../components/PopulationChart";

type Props = {
  prefs: PrefectureData;
};

const PopulationChart = dynamic(import("../components/PopulationChart"), {
  ssr: false,
});

export async function getServerSideProps() {
  const prefs = await getPrefectures();
  return { props: { prefs } };
}

export default function Home(data: Props) {
  const [populationData, setPopulationData] = useState<PopulationChartData>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>都道府県別の総人口推移</title>
        <meta name="description" content="都道府県別の総人口推移" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>都道府県別の総人口推移</h1>
        <div className={styles.grid}>
          {data.prefs.result.map((n) => {
            return (
              <PrefCheckBox
                key={n.prefCode.toString()}
                name={n.prefName}
                code={n.prefCode}
                checked={populationData.some((p) => p.code === n.prefCode)}
                onChange={async (c) => {
                  if (!populationData.some((p) => p.code === c)) {
                    setIsLoading(true);
                    const fetchPopulation = async (n: number) => {
                      const res = await fetch(`/api/composition/${n}`);
                      const d = (await res.json()) as CompositionData;
                      const l: Line = d.result.data
                        .find((d) => d.label === "総人口")
                        .data.map((d) => {
                          return { year: d.year, value: d.value };
                        });
                      setPopulationData(
                        populationData.concat({
                          code: n,
                          name: data.prefs.result.find((p) => p.prefCode == n)
                            .prefName,
                          line: l,
                        })
                      );
                      setIsLoading(false);
                    };
                    await fetchPopulation(c);
                  } else {
                    setPopulationData(
                      populationData.filter((p) => p.code != c)
                    );
                  }
                }}
              ></PrefCheckBox>
            );
          })}
        </div>
        <div style={{ height: 18, textAlign: "center" }}>
          {isLoading ? "Loading..." : ""}
        </div>
        <PopulationChart data={populationData} />
      </main>
    </div>
  );
}
