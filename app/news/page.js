import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "../dummy-news";
import Image from "next/image";
import NewsList from "@/components/NewsList";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList newsList={DUMMY_NEWS} />
    </>
  );
}
