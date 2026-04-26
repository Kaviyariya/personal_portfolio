import { useState } from "react";
import { Mail, MapPin, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks! Your message has been noted.");
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

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
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-border bg-gradient-card p-6 shadow-card"
      >
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me about your project or just say hi..."
            rows={5}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={sending}
          className="w-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
        >
          {sending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
