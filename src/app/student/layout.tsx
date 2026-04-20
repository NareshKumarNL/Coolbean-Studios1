"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/auth";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (!session || session.role !== "student") {
      router.replace("/login/student");
    } else {
      setVerified(true);
    }
  }, [router]);

  if (!verified) return null;

  return <>{children}</>;
}
