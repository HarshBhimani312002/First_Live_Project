import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, X, FileBadge } from "lucide-react";
import { toast } from "../../hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactCTA({ isModal = false, onClose = () => {} }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|co\.in|in|com\.au|au)$/i.test(
        form.email.trim(),
      )
    ) {
      newErrors.email =
        "Please enter a valid email address (e.g. example@gmail.com)";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    // એરર સ્ટેટ અપડેટ કરો
    setErrors(newErrors);

    // જો કોઈ પણ ભૂલ (જેમ કે ઈમેઈલમાં f@f) હોય, તો અહીંથી જ સીધું false રિટર્ન કરો
    if (Object.keys(newErrors).length > 0) {
      return false;
    }

    // જો બધી ફિલ્ડ સાચી હોય, તો જ કેપ્ચા ચેક કરો
    if (!captchaValue) {
      alert("Please confirm you are not a robot.");
      return false;
    }

    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Failed to send enquiry");
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});

      toast({
        title: "Thank you!",
        description: "Enquiry sent successfully.",
      });

      if (isModal) {
        onClose();
      }
    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description: "Failed to send enquiry.",
      });
    }

    setSubmitting(false);
  };

  const content = (
    <div className="grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="bg-[#0B1F3A] text-white p-8 md:p-9 relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-[#F39019]/15 blur-2xl" />

        <div className="title-accent mb-4" />

        <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
          Get In Touch
        </p>

        <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold leading-tight mb-5">
          Let’s build your <span className="text-[#F39019]">dream home</span>.
        </h2>

        <p className="text-white/75 leading-relaxed mb-10">
          Tell us a little about your project — we’ll be in touch within 24
          hours.
        </p>

        <ul className="space-y-5 relative">
          <li className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-md bg-[#F39019] grid place-items-center shrink-0">
              <MapPin className="h-5 w-5 text-[#0B1F3A]" />
            </div>

            <div>
              <div className="text-xs tracking-widest uppercase text-white/60">
                Office
              </div>

              <div className="font-medium">
                11A Newcombe Dr Gilles Plains SA 5086
              </div>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-md bg-[#F39019] grid place-items-center shrink-0">
              <Phone className="h-5 w-5 text-[#0B1F3A]" />
            </div>

            <div>
              <div className="text-xs tracking-widest uppercase text-white/60">
                Call us
              </div>

              <div className="font-medium">+61417862762</div>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-md bg-[#F39019] grid place-items-center shrink-0">
              <Mail className="h-5 w-5 text-[#0B1F3A]" />
            </div>

            <div>
              <div className="text-xs tracking-widest uppercase text-white/60">
                Email
              </div>

              <div className="font-medium">info@nesthomessa.com.au</div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-md bg-[#F39019] grid place-items-center shrink-0">
              <FileBadge className="h-5 w-5 text-[#0B1F3A]" />
            </div>

            <div>
              <div className="text-xs tracking-widest uppercase text-white/60">
                Licence
              </div>

              <div className="font-medium text-sm">BLD354512</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="bg-white p-8 md:p-7">
        <h3 className="font-[Poppins] text-2xl font-semibold text-[#0B1F3A] mb-2">
          Request a consultation
        </h3>

        <p className="text-slate-500 text-sm mb-5">
          Fill in the form — a real human will reply.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                Your name
              </label>

              <input
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="mt-2 w-full px-4 py-3 rounded-md border border-slate-200 outline-none"
                placeholder="John Smith"
                required
              />

              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                Phone
              </label>

              <input
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="mt-2 w-full px-4 py-3 rounded-md border border-slate-200 outline-none"
                required
              />

              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold tracking-widest uppercase text-slate-500">
              Email
            </label>

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="mt-2 w-full px-4 py-3 rounded-md border border-slate-200 outline-none"
              placeholder="you@email.com"
              required
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold tracking-widest uppercase text-slate-500">
              Tell us about your project
            </label>

            <textarea
              rows="3"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="mt-2 w-full px-4 py-3 rounded-md border border-slate-200 outline-none resize-none"
              required
            />

            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <div>
            <ReCAPTCHA
              sitekey="6LfTVQctAAAAAAXVF4sjU4Ko0uIrEwpJZMHHrv-8"
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary rounded-md px-6 py-3.5 font-semibold inline-flex items-center gap-2"
          >
            {submitting ? (
              "Sending..."
            ) : (
              <>
                Send Enquiry <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );

  // Modal View
  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-6 overflow-hidden">
        <div className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-50 h-11 w-11 rounded-full bg-slate-100 hover:bg-slate-200 grid place-items-center"
          >
            <X className="h-5 w-5" />
          </button>

          {content}
        </div>
      </div>
    );
  }

  // Normal Contact Page View
  return (
    <section className="py-24 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-6 rounded-3xl overflow-hidden shadow-sm">
        {content}
      </div>
    </section>
  );
}
