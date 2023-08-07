"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b610a8db-1a69-4696-9ee9-2fdff9636a34");
  }, []);

  return null;
};
