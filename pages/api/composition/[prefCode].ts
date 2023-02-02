import type { NextApiRequest, NextApiResponse } from "next";

export type CompositionData = {
  message: string;
  result: {
    boundaryYear: Number;
    data: {
      label: string;
      data: {
        year: Number;
        value: Number;
        rate?: Number;
      }[];
    };
  };
};

async function getComposition(prefCode: Number): Promise<CompositionData> {
  const res = await fetch(
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=" +
      prefCode.toString(),
    {
      headers: {
        "X-API-KEY": process.env.RESAS_API_KEY,
      },
    }
  );
  return res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CompositionData>
) {
  const data = await getComposition(+req.query.prefCode);
  res.status(200).json(data);
}
