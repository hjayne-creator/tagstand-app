import type { NextApiRequest, NextApiResponse } from 'next';
import { woocommerce } from '../../lib/woocommerce';
// @ts-ignore
import * as storage from 'node-persist';

const CACHE_KEY = 'categories';
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in ms

let storageInitialized = false;
async function ensureStorage() {
  if (!storageInitialized) {
    await storage.init();
    storageInitialized = true;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensureStorage();
  const cached = await storage.getItem(CACHE_KEY);
  const cachedAt = await storage.getItem(CACHE_KEY + '_at');
  const now = Date.now();

  if (cached && cachedAt && now - cachedAt < CACHE_TTL) {
    return res.status(200).json(cached);
  }

  try {
    const { data } = await woocommerce.get('products/categories', { per_page: 100 });
    await storage.setItem(CACHE_KEY, data);
    await storage.setItem(CACHE_KEY + '_at', now);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
} 