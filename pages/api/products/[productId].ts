import type { NextApiRequest, NextApiResponse } from 'next';
import { woocommerce } from '../../../lib/woocommerce';
// @ts-ignore
import * as storage from 'node-persist';
import { CACHE_TTL } from '../../../lib/cacheConfig';

let storageInitialized = false;
async function ensureStorage() {
  if (!storageInitialized) {
    await storage.init();
    storageInitialized = true;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensureStorage();
  const { productId } = req.query;
  const CACHE_KEY = `product_${productId}`;
  const CACHE_KEY_AT = `${CACHE_KEY}_at`;
  const cached = await storage.getItem(CACHE_KEY);
  const cachedAt = await storage.getItem(CACHE_KEY_AT);
  const now = Date.now();

  if (cached && cachedAt && now - cachedAt < CACHE_TTL) {
    return res.status(200).json(cached);
  }

  try {
    const { data } = await woocommerce.get(`products/${productId}`);
    await storage.setItem(CACHE_KEY, data);
    await storage.setItem(CACHE_KEY_AT, now);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
} 