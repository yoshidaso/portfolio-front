import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

export default function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Get in Touch
        </h2>
        <Card className="border-primary/10">
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-md h-32 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  required
                ></textarea>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
