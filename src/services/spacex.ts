import { type SpaceAPIResponse } from "../types/api.ts";
import { type Doc } from "../types/api.ts";

export const getSapceXBy = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

  const lauch = (await res.json()) as Doc;
  return lauch;
}

export const getSapceXData = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          data_unix: "asc",
        },
        limit: 12,
      },
    }),
  });

  const { docs: lauches } = (await res.json()) as SpaceAPIResponse;
  return lauches;
}