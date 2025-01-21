import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Logo from "@/components/Logo";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    toast.success("Thank you for your message! We'll get back to you soon.");
    reset();
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Get in touch with us to learn more about how Ajentic AI can help transform your business with cutting-edge AI solutions.
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    {...register("firstName", { required: true })}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    {...register("lastName", { required: true })}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  {...register("message", { required: true })}
                  placeholder="Tell us about your project..."
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">Or email us directly at:</p>
              <a href="mailto:sales@ajentic.ai" className="text-primary font-medium hover:underline">
                sales@ajentic.ai
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
