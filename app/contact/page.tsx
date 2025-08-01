"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
} from "lucide-react"
import EditableWrapper from "@/components/editable-wrapper"

const defaultContact = {
  address: `MGM's College of Engineering\n Nanded - 431602\nMaharashtra, India`,
  phones: [
    "Main Office: 22-02462-22299",
    "Admission Office: 02-4622-22999",
    "Placement Cell: +91-9765-172399",
  ],
  emails: [
    "General: info@mgmcen.ac.in",
    "Admissions: admissions@mgmcen.ac.in",
    "Placements: placements@mgmcen.ac.in",
  ],
  hours: [
    "Monday - Friday: 9:00 AM - 5:00 PM",
    "Saturday: 9:00 AM - 1:00 PM",
    "Sunday: Closed",
  ],
  reach: [
    "Nearest Railway Station: Hazur Sahib Nanded (3 km)",
    "Nearest Airport: Shri Guru Gobind Singh Ji Airport Nanded (6 km)",
    "Bus Stop: Nanded Bus Stand (4 km)",
  ],
  form: {
    formTitle: "Send us a Message",
    firstNameLabel: "First Name *",
    firstNamePlaceholder: "Enter your first name",
    lastNameLabel: "Last Name *",
    lastNamePlaceholder: "Enter your last name",
    emailLabel: "Email *",
    emailPlaceholder: "Enter your email",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Enter your phone number",
    subjectLabel: "Subject *",
    subjectPlaceholder: "Enter subject",
    messageLabel: "Message *",
    messagePlaceholder: "Enter your message",
    submitText: "Send Message",
  },
}

type ContactContent = {
  address?: string
  phones?: string | string[]
  emails?: string | string[]
  hours?: string | string[]
  reach?: string | string[]
  form?: { [key: string]: string }
}

interface ContactPageProps {
  content?: ContactContent
  handleSave?: (updatedContent: ContactContent) => void
}

export default function ContactPage({
  content = {},
  handleSave,
}: ContactPageProps) {
  const safeArray = (value: string[] | string | undefined, fallback: string[]) => {
    if (Array.isArray(value)) return value
    if (typeof value === "string") return value.split(/\s*,\s*|\n/).filter(Boolean)
    return fallback
  }

  const form = {
    ...defaultContact.form,
    ...(content.form || {}),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, queries, or any assistance. We're here to help you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* CONTACT INFO */}
          <EditableWrapper
            id="contact-info"
            editableContent={{
              address: content.address || defaultContact.address,
              phones: safeArray(content.phones, defaultContact.phones).join(",\n"),
              emails: safeArray(content.emails, defaultContact.emails).join(",\n"),
              hours: safeArray(content.hours, defaultContact.hours).join(",\n"),
              reach: safeArray(content.reach, defaultContact.reach).join(",\n"),
            }}
            onSave={handleSave}
          >
            <Card className="border-purple-200 shadow-lg animate-slide-up">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {content.address || defaultContact.address}
                    </p>
                  </div>
                </div>

                {(["phones", "emails", "hours", "reach"] as const).map((key, i) => {
                  const Icon = [Phone, Mail, Clock, Navigation][i]
                  const title = ["Phone Numbers", "Email Addresses", "Office Hours", "How to Reach"][i]
                  const lines = safeArray(content[key], defaultContact[key])

                  return (
                    <div key={key} className="flex items-start space-x-4">
                      <Icon className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800">{title}</h3>
                        <ul className="text-gray-600 list-disc list-inside">
                          {lines.map((line, idx) => (
                            <li key={idx}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </EditableWrapper>

          {/* CONTACT FORM */}
          <EditableWrapper
            id="contact-form"
            editableContent={form}
            onSave={(updated) => {
              handleSave?.({
                ...content,
                form: {
                  ...form,
                  ...updated,
                },
              })
            }}
          >
            <Card className="border-purple-200 shadow-lg animate-slide-up animation-delay-200">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <CardTitle className="text-2xl">{form.formTitle || "Send us a Message"}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{form.firstNameLabel}</label>
                      <Input placeholder={form.firstNamePlaceholder} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{form.lastNameLabel}</label>
                      <Input placeholder={form.lastNamePlaceholder} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{form.emailLabel}</label>
                    <Input type="email" placeholder={form.emailPlaceholder} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{form.phoneLabel}</label>
                    <Input type="tel" placeholder={form.phonePlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{form.subjectLabel}</label>
                    <Input placeholder={form.subjectPlaceholder} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{form.messageLabel}</label>
                    <Textarea placeholder={form.messagePlaceholder} rows={5} required />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">{form.submitText}</Button>
                </form>
              </CardContent>
            </Card>
          </EditableWrapper>
        </div>
        {/* Embedded Google Map */}
        <div className="max-w-5xl mx-auto mt-12 rounded-xl overflow-hidden shadow-lg border border-purple-200 animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3768.3639519702906!2d77.32244532525289!3d19.179299632046714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smgm%20nanded!5e0!3m2!1sen!2sin!4v1754052108168!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
