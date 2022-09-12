import { NextApiRequest, NextApiResponse } from "next";
import { getRecentTracks, getTopTracks } from "../../../lib/spotify";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const tracks = await getTopTracks();

    return res.status(200).json({ tracks });
};

export default handler;
