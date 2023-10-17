import { Request, Response } from 'express';

const getHealth = (_req: Request, res: Response) => {
    res.send('OK');
};

export default { getHealth };