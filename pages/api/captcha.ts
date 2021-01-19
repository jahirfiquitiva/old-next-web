import { NextApiRequest, NextApiResponse } from 'next';

const { RECAPTCHA_SECRET_KEY: recaptchaSecret = '' } = process.env;
const threshold = 0.7;
const url = `https://www.recaptcha.net/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { action, token } = req.query;
  const validData = await fetch(`${url}${token}`)
    .then((response: { json: () => any; }) => response.json())
    .then((data: any) => {
      return (data.success && data.score && data.action
        && data.score >= threshold && data.action === action);
    })
    .catch((e: Error) => {
      return false;
    });
  return res.status(200).json({
    success: true,
    valid: validData,
  });
};
