import React from "react";
import { Toaster } from "react-hot-toast";
import GradientBG from "./GradientBG";
import ContactForm from "./ContactForm";
import Section from "./Section";

function ContactPage() {
  return (
    <Section crosses id="contact">
      <div className="min-h-screen relative overflow-hidden">
        {/* Background with dotted map */}

        <GradientBG />
        {/* Main content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <ContactForm />
        </div>

        {/* Toast notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
            },
            success: {
              iconTheme: {
                primary: "#7ADB78",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#FA1616",
                secondary: "#fff",
              },
            },
          }}
        />
      </div>
    </Section>
  );
}

export default ContactPage;
