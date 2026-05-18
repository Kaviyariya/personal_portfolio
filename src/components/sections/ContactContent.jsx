import { Mail, MapPin, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactContent() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground">
          Have a project in mind, an opportunity to share, or just want to say hi?
          Send a message and I'll get back to you.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <User className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="font-medium">Kaviya Balamurugan</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="font-medium">Coimbatore, Tamil Nadu, India</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a
                href="mailto:kaviyabalamurugan950@gmail.com"
                className="font-medium transition-smooth hover:text-primary"
              >
                kaviyabalamurugan950@gmail.com
              </a>
            </div>
          </li>
        </ul>
      </div>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="space-y-4 rounded-2xl border border-border bg-gradient-card p-6 shadow-card"
      >
        {/* Web3Forms Access Key - You need to replace this! */}
        <input type="hidden" name="access_key" value="498cd4cc-1c75-49c3-b64b-ccbedfb2c29a" />
        <input type="hidden" name="subject" value="New Contact from Portfolio!" />
        <input type="checkbox" name="botcheck" className="hidden" />
        
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hi..."
            rows={5}
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
