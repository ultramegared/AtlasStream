/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: User.ts
 * Module: Frontend
 * Language: TypeScript
 * Description:
 * AtlasStream user model.
 * ===============================================================
 */

import type {

    UserProfile

} from "./UserProfile";

export interface User {

    id: string;

    fullName: string;

    username: string;

    email: string;

    password: string;

    language: string;

    subscription: {

        id: string;

        name: string;

        price: string;

        profiles: number;

        streams: number;

    } | null;

    payment: {

        method: string;

        status: "pending" | "paid" | "failed";

        transactionId?: string;

    } | null;

    profiles: UserProfile[];

    createdAt: string;

    updatedAt: string;

}