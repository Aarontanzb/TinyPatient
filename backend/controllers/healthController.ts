import { Request, Response } from 'express';

/**
 * GET /health
 * Health check endpoint
 */
const getHealth = (_req: Request, res: Response) => {
    res.send('OK');
};

export default { getHealth };