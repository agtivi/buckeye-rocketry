import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";

export default function Home() {
  redirect('/home', RedirectType.replace);
}
