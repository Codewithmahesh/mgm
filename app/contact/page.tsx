import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Navigation, Building } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, queries, or any assistance. We're here to help you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <Card className="border-purple-200 shadow-lg animate-slide-up">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    MGM's College of Engineering
                    <br />
                    Kamothe, Navi Mumbai - 410209
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone Numbers</h3>
                  <p className="text-gray-600">
                    Main Office: +91-22-2743-4191
                    <br />
                    Admission Office: +91-22-2743-4192
                    <br />
                    Placement Cell: +91-22-2743-4193
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email Addresses</h3>
                  <p className="text-gray-600">
                    General: info@mgmcen.ac.in
                    <br />
                    Admissions: admissions@mgmcen.ac.in
                    <br />
                    Placements: placements@mgmcen.ac.in
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Navigation className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">How to Reach</h3>
                  <p className="text-gray-600">
                    Nearest Railway Station: Panvel (15 km)
                    <br />
                    Nearest Airport: Mumbai Airport (45 km)
                    <br />
                    Bus Stop: Kamothe Bus Stand (2 km)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg animate-slide-up animation-delay-200">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <Input placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <Input placeholder="Enter your last name" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <Input type="email" placeholder="Enter your email" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <Input placeholder="Enter subject" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <Textarea placeholder="Enter your message" rows={5} required />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="border-purple-200 shadow-lg animate-slide-up animation-delay-400">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <CardTitle className="text-2xl flex items-center">
              <MapPin className="mr-3 h-6 w-6" />
              Campus Location
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full h-96 bg-gray-200 rounded-b-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5234567890123!2d73.1234567890123!3d19.0234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMGM%27s%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MGM College of Engineering Location"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Department Contacts */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center animate-fade-in">Department Contacts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                dept: "Computer Science",
                hod: "Dr. Rajesh Kumar",
                email: "cse@mgmcen.ac.in",
                phone: "+91-9876-543210",
              },
              { dept: "Mechanical", hod: "Dr. Priya Sharma", email: "mech@mgmcen.ac.in", phone: "+91-9876-543211" },
              { dept: "Civil", hod: "Dr. Amit Patel", email: "civil@mgmcen.ac.in", phone: "+91-9876-543212" },
              { dept: "Electronics", hod: "Dr. Sunita Desai", email: "etc@mgmcen.ac.in", phone: "+91-9876-543213" },
            ].map((dept, index) => (
              <Card
                key={index}
                className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
                  <CardTitle className="text-lg text-purple-800 flex items-center">
                    <Building className="mr-2 h-5 w-5" />
                    {dept.dept}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-gray-800">HOD: {dept.hod}</p>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-gray-600">{dept.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-gray-600">{dept.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
