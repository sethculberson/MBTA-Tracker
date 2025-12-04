"use client";
import dynamic from 'next/dynamic';

const DynamicMapWithNoSSR = dynamic(() => import('../components/DynamicMap'), { ssr: false });

export default function Map() {
    return (
        <DynamicMapWithNoSSR></DynamicMapWithNoSSR>
    )
}