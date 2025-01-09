'use client';

import { MDXComponents, MDXContent } from "mdx/types";
import styles from "../styles/Markdown.module.sass";

const Markdown = ({ MDX, components }: { 
    MDX: MDXContent,
    components?: MDXComponents
}) => {
    return (
        <article
            className={styles.markdownWrapper}>
            <MDX 
                components={components} />
        </article>
    )
}

export default Markdown;