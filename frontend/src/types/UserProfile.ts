/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: UserProfile.ts
 * Module: Frontend
 * Language: TypeScript
 * Description:
 * AtlasStream user profile model.
 * ===============================================================
 */

export interface UserProfile {

    id: string;

    userId: string;

    name: string;

    avatar: string;

    isKids: boolean;

    pin?: string;

    language: string;

    createdAt: string;

}