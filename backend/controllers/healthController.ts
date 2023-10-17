import { Request, Response } from 'express';

const getHealth = (_req: Request, res: Response) => {
    res.send('ok');
};

export default { getHealth };