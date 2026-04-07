import { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "../../../lib/spotify";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const tracks = await getTopTracks();
        return res.status(200).json({ tracks });
    } catch (error) {
        return res.status(500).json({
            error:
                error instanceof Error
                    ? error.message
                    : "Failed to fetch top tracks",
        });
    }
};

export default handler;
