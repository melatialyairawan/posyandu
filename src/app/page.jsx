'use client';
import { Button, NextUIProvider } from "@nextui-org/react";

import Image from "next/image";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <Button>Click me</Button>
      </main>
    </NextUIProvider>
  );
}
