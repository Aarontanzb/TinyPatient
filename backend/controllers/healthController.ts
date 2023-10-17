import { Request, Response } from 'express';

const getHealth = async (_req: Request, res: Response) => {
    res.send('ok');
};

export default { getHealth }