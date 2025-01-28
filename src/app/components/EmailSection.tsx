"use client";
import React, { useState, FormEvent } from "react";
import { sendEmail } from "../services/emailService";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      await sendEmail(data);
      setEmailSubmitted(true);
    } catch {
      alert("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently exploring new opportunities, and my inbox is always open.
            Whether you have a question, want to share an idea, or simply want to say hello, feel free to reach out.
          </p>
          <div className="socials flex flex-row gap-2">
            <a href="https://github.com/lsouzapedroso">
              <img src="/github-icon.svg" alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/lsouzapedroso/">
              <img src="/linkedin-icon.svg" alt="Linkedin Icon" />
            </a>
          </div>
        </div>
        <div>
          {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          ) : (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                    Your email
                  </label>
                  <input
                      name="email"
                      type="email"
                      id="email"
                      required
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="your@mail.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                    Subject
                  </label>
                  <input
                      name="subject"
                      type="text"
                      id="subject"
                      required
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Just saying hi"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                      name="message"
                      id="message"
                      required
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Let's talk about..."
                  />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${
                        isSubmitting ? "bg-gray-500" : "bg-primary-500 hover:bg-primary-600"
                    } text-white font-medium py-2.5 px-5 rounded-lg w-full`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
          )}
        </div>
      </section>
  );
};

export default EmailSection;