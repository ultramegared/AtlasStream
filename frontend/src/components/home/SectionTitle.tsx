/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: SectionTitle.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Section title component.
 * ===============================================================
 */

interface SectionTitleProps {

    title: string;

}

function SectionTitle({

    title

}: SectionTitleProps) {

    return (

        <h2>

            {title}

        </h2>

    );

}

export default SectionTitle;