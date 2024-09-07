import ScrollToTop from "@/components/scroll-to-top";
import { Config } from "@/config";
import useScrollToTop from "@/hooks/useScrollToTop";
import Footer from "../home/footer";
import Navbar from "../home/navbar/navbar";

export default function PrivacyPolicy() {
          useScrollToTop();

          return (
                    <>
                              <Navbar />
                              <div className="max-w-7xl mx-auto p-5 sm:p-7 py-12">
                                        <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            At {Config.title}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services. By using our site, you agree to the collection and use of information in accordance with this policy.
                                                  </p>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Information We Collect</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            We collect both personal and non-personal information to provide you with the best experience possible. The types of data we collect may include:
                                                  </p>
                                                  <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                                                            <li>Personal identification information (such as name, email address, phone number)</li>
                                                            <li>Usage data (such as your IP address, browser type, and pages visited)</li>
                                                            <li>Cookies and tracking data (to enhance user experience)</li>
                                                  </ul>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">How We Use Your Information</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            We may use the information we collect from you for the following purposes:
                                                  </p>
                                                  <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                                                            <li>To provide and maintain our service</li>
                                                            <li>To notify you about changes to our service</li>
                                                            <li>To offer customer support</li>
                                                            <li>To analyze usage data and improve our website</li>
                                                            <li>To communicate with you through email or other communication channels</li>
                                                  </ul>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cookies and Tracking</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            Our website uses cookies to track user activity and enhance the user experience. Cookies are small data files that your browser stores on your device. You can choose to disable cookies through your browser settings; however, some features of our website may not function correctly if cookies are disabled.
                                                  </p>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Security</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            We take the security of your data seriously and implement industry-standard measures to protect your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
                                                  </p>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sharing Your Information</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            We do not sell or share your personal information with third parties for marketing purposes. We may share your data only in the following situations:
                                                  </p>
                                                  <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                                                            <li>With trusted service providers who assist us in delivering services</li>
                                                            <li>To comply with legal obligations or protect against legal liability</li>
                                                            <li>To protect the rights, property, or safety of {Config.title}, our users, or the public</li>
                                                  </ul>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Data Rights</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            You have the right to access, correct, or delete your personal data. If you wish to exercise any of these rights or have any questions regarding our data practices, please contact us at <a
                                                                      className="inline-flex text-primary"
                                                                      href='https://wa.me/+16622606515'
                                                                      target='_blank'
                                                                      rel='noopener noreferrer'
                                                            > +1 (662) 260-6515</a>.
                                                  </p>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to This Policy</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and we will notify you via email or prominent notice on our website if significant changes are made.
                                                  </p>
                                        </section>

                                        <footer className="border-t pt-4 mt-8 text-gray-600 text-sm">
                                                  <p>
                                                            If you have any questions or concerns about this Privacy Policy, please contact us at <a
                                                                      className="inline-flex text-primary"
                                                                      href='https://wa.me/+16622606515'
                                                                      target='_blank'
                                                                      rel='noopener noreferrer'
                                                            > +1 (662) 260-6515</a>.
                                                  </p>
                                        </footer>
                              </div>
                              <Footer />
                              <ScrollToTop />
                    </>
          )
}