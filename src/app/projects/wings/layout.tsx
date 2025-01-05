import { Metadata } from "next";

export const metadata: Metadata = {
    title: "WINGS | Joe Anderson"
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}