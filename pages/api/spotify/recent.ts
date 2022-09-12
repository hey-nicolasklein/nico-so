import { NextApiRequest, NextApiResponse } from "next";
import { getRecentTracks, getTopTracks } from "../../../lib/spotify";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const tracks = await getRecentTracks();

    return res.status(200).json({ tracks });
};

export default handler;
