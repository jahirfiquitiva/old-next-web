import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    success: true,
    magic: false,
    date: '2021-06-09',
  });
};
