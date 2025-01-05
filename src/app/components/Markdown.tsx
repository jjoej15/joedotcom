'use client';

import { MDXComponents, MDXContent } from "mdx/types";
import styles from "../styles/Markdown.module.sass";

const Markdown = ({ MDX, components }: { 
    MDX: MDXContent,
    components?: MDXComponents
}) => {
    return (
        <div
            className={styles.markdownWrapper}>
            <MDX 
                components={components} />
        </div>
    )
}

export default Markdown;