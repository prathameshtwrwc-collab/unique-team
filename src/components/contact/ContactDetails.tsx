import { motion } from "framer-motion";
import { contactData } from "../../data/contact";
import { ContactDetailItem } from "./ContactDetailItem";
import { fadeUp, defaultViewport } from "../../lib/animations";

export function ContactDetails() {
  const { contactIntro, details, responseNote } = contactData;

  return (
    <div className="max-w-[560px]">
      {/* Contact introduction */}
      <motion.p
        variants={fadeUp(1.0, 14, 0.6)}
        initial="hidden"
        whileInView="visible" viewport={defaultViewport}
        className="text-[17px] leading-[1.65] text-ink lg:text-[18px]"
      >
        {contactIntro}
      </motion.p>

      {/* Contact details list */}
      <div className="mt-7 flex flex-col gap-1">
        <ContactDetailItem icon="phone" label={details.phone.label} value={details.phone.value} href={details.phone.href} index={0} />
        <ContactDetailItem icon="email" label={details.email.label} value={details.email.value} href={details.email.href} index={1} />
        <ContactDetailItem icon="office" label={details.office.label} value={details.office.value} href={details.office.href} index={2} />
        <ContactDetailItem icon="hours" label={details.hours.label} value={details.hours.value} href={details.hours.href} index={3} />
      </div>

      {/* Response note */}
      <motion.p
        variants={fadeUp(1.4, 12, 0.6)}
        initial="hidden"
        whileInView="visible" viewport={defaultViewport}
        className="mt-6 text-[14px] leading-[1.65] text-ink-soft lg:text-[15px]"
      >
        {responseNote}
      </motion.p>
    </div>
  );
}
