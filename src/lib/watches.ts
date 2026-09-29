import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import type { Watch } from "../types/watch";

export async function getWatches(): Promise<Watch[]> {
  const snapshot = await getDocs(collection(db, "watches"));
  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      crystal: data.Crystal ?? "",
      dial: data.Dial ?? "",
      name: data.name ?? "",
      caseMaterial: data.Case ?? "",
      movement: data.Movement ?? "",
      priceUSD: Number(data.Price ?? 0),
      imageUrl: data.imaURL ?? "",
    };
  });
}
