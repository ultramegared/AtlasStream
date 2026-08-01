/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: user.service.ts
 * Path: backend/src/services/user.service.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * User business logic.
 * ----------------------------------------------------------------
 */

import userRepository from "@/repositories/user.repository";

import {
    ApiError,
    HTTP_STATUS
} from "@/utils";

import {
    UpdateUserProfile,
    User,
    UserFilters
} from "@/models/user.model";

class UserService {

    public async getById(
        id: string
    ): Promise<User> {

        const user = await userRepository.findById(id);

        if (!user) {

            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "USER_NOT_FOUND",
                "User not found."
            );

        }

        return user;

    }

    public async getAll(
        filters: UserFilters
    ): Promise<User[]> {

        return userRepository.findAll(filters);

    }

    public async updateProfile(
        id: string,
        profile: UpdateUserProfile
    ): Promise<User> {

        const existingUser = await userRepository.findById(id);

        if (!existingUser) {

            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "USER_NOT_FOUND",
                "User not found."
            );

        }

        await userRepository.updateProfile(
            id,
            profile
        );

        return (await userRepository.findById(id)) as User;

    }

    public async delete(
        id: string
    ): Promise<void> {

        const existingUser = await userRepository.findById(id);

        if (!existingUser) {

            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "USER_NOT_FOUND",
                "User not found."
            );

        }

        await userRepository.delete(id);

    }

}

export default new UserService();