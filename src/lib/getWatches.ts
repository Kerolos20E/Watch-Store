import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import type { WatchCard } from "../types/watch";

export async function getWatches(): Promise<WatchCard[]> {
  const snapshot = await getDocs(collection(db, "watches"));
  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      collectionName: data.collectionName ?? "",
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

export async function getWatchById(id: string): Promise<WatchCard | null> {
  const watchRef = doc(db, "watches", id);
  const snapshot = await getDoc(watchRef);
  if (!snapshot.exists()) {
    return null;
  }
  const data = snapshot.data();

  return {
    id: snapshot.id,
    collectionName: data.collectionName ?? "",
    crystal: data.Crystal ?? "",
    dial: data.Dial ?? "",
    name: data.name ?? "",
    caseMaterial: data.Case ?? "",
    movement: data.Movement ?? "",
    priceUSD: Number(data.Price ?? 0),
    imageUrl: data.imaURL ?? "",
  };
}
