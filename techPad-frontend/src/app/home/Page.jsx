import React from "react";
import HeroSection from "../../components/HeroSection";
import NewArticles from "./NewArticles";
import TrendArticles from "./TrendArticles";

export default function Home() {
    return (
        <>
            <HeroSection />
            <NewArticles />
            <TrendArticles />
        </>
    );
}
