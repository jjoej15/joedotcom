import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MCP Server Project | Joe Anderson"
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}