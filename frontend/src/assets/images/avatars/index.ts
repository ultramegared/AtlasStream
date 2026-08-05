/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: index.ts
 * Module: Frontend
 * Language: TypeScript
 * Description:
 * Official AtlasStream avatars.
 * ===============================================================
 */

import explorer from "./adult/explorer.webp";
import nova from "./adult/nova.webp";
import orion from "./adult/orion.webp";
import titan from "./adult/titan.webp";
import vega from "./adult/vega.webp";
import luna from "./adult/luna.webp";
import shadow from "./adult/shadow.webp";
import pulse from "./adult/pulse.webp";

import fox from "./kids/fox.webp";
import panda from "./kids/panda.webp";
import penguin from "./kids/penguin.webp";
import lion from "./kids/lion.webp";
import koala from "./kids/koala.webp";
import unicorn from "./kids/unicorn.webp";
import owl from "./kids/owl.webp";
import dolphin from "./kids/dolphin.webp";

export interface Avatar {

    id: string;

    name: string;

    category: "adult" | "kids";

    image: string;

}

export const avatars: Avatar[] = [

    {
        id: "explorer",
        name: "Explorer",
        category: "adult",
        image: explorer
    },

    {
        id: "nova",
        name: "Nova",
        category: "adult",
        image: nova
    },

    {
        id: "orion",
        name: "Orion",
        category: "adult",
        image: orion
    },

    {
        id: "titan",
        name: "Titan",
        category: "adult",
        image: titan
    },

    {
        id: "vega",
        name: "Vega",
        category: "adult",
        image: vega
    },

    {
        id: "luna",
        name: "Luna",
        category: "adult",
        image: luna
    },

    {
        id: "shadow",
        name: "Shadow",
        category: "adult",
        image: shadow
    },

    {
        id: "pulse",
        name: "Pulse",
        category: "adult",
        image: pulse
    },

    {
        id: "fox",
        name: "Fox",
        category: "kids",
        image: fox
    },

    {
        id: "panda",
        name: "Panda",
        category: "kids",
        image: panda
    },

    {
        id: "penguin",
        name: "Penguin",
        category: "kids",
        image: penguin
    },

    {
        id: "lion",
        name: "Lion",
        category: "kids",
        image: lion
    },

    {
        id: "koala",
        name: "Koala",
        category: "kids",
        image: koala
    },

    {
        id: "unicorn",
        name: "Unicorn",
        category: "kids",
        image: unicorn
    },

    {
        id: "owl",
        name: "Owl",
        category: "kids",
        image: owl
    },

    {
        id: "dolphin",
        name: "Dolphin",
        category: "kids",
        image: dolphin
    }

];