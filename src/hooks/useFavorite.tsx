import { useState } from "react";

export function useFavorite(value: string) {
  const item = window.localStorage.getItem("favorite")
    ? window.localStorage.getItem("favorite")
    : [];
}
