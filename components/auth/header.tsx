import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
  formType: string
}

export const Header = ({ label, formType }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>🔐 Auth</h1>
      <h2 className="rounded-md border-t-4 border-b-4 px-5 border-sky-300 text-muted-foreground font-semibold">{formType}</h2>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
