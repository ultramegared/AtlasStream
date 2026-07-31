/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: crypto.ts
 * Path: backend/src/utils/crypto.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Password hashing and verification utilities.
 * ----------------------------------------------------------------
 */

import bcrypt from "bcrypt";

import { env } from "@/config";

export async function hashPassword(
    password: string
): Promise<string> {

    return bcrypt.hash(
        password,
        env.BCRYPT_SALT_ROUNDS
    );

}

export async function verifyPassword(
    password: string,
    hash: string
): Promise<boolean> {

    return bcrypt.compare(
        password,
        hash
    );

}

export async function needsRehash(
    hash: string
): Promise<boolean> {

    const rounds = bcrypt.getRounds(hash);

    return rounds < env.BCRYPT_SALT_ROUNDS;

}