import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <h1>Main Page</h1>
      <div className="bg-slate-50 p-10">
      <Button variant={"secondary"}>Button</Button>
      </div>
      <Input type="text" placeholder="Email"/>
    </>
  )
}
