import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

export default function DynamicForm() {
  return (
    // salah your code will go here remember to use the Input and Label components
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <div className="relative">
        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="pl-10"
        />
      </div>
    </div>
  );
}
