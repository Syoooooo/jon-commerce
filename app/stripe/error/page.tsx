import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorStripe() {
  return (
    <div className="py-10 px-10">
      <h2>Something went wrong....</h2>
      <Button asChild className="mt-5">
            <Link href="/">GO back</Link>
          </Button>
    </div>
  );
}
