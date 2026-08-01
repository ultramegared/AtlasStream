/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: content.service.ts
 * Module: Frontend
 * Language: TypeScript
 * Description:
 * Content service.
 * ===============================================================
 */

import Content from "../types/Content";

class ContentService {

    public getTrending(): Content[] {

        return [

            {
                id: "1",
                title: "Nebula Rising",
                poster: ""
            },
            {
                id: "2",
                title: "The Last Kingdom",
                poster: ""
            },
            {
                id: "3",
                title: "Dark Horizon",
                poster: ""
            },
            {
                id: "4",
                title: "Cyber City",
                poster: ""
            }

        ];

    }

}

export default new ContentService();