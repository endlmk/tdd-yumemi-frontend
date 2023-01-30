import type { NextApiRequest, NextApiResponse } from "next";

export type PrefectureData = {
  message: string;
  result: { prefCode: number; prefName: string }[];
};

export async function getPrefectures() {
  const res = await fetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      headers: {
        "X-API-KEY": process.env.RESAS_API_KEY,
      },
    }
  );

  return (await res.json()) as PrefectureData;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PrefectureData>
) {
  const data = await getPrefectures();
  res.status(200).json(data);
}
