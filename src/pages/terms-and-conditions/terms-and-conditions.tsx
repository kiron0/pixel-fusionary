import ScrollToTop from "@/components/scroll-to-top";
import { Config } from "@/config";
import useScrollToTop from "@/hooks/useScrollToTop";
import Footer from "../home/footer";
import Navbar from "../home/navbar/navbar";

export default function TermsAndConditions() {
          useScrollToTop();

          return (
                    <>
                              <Navbar />
                              <div className="max-w-7xl mx-auto p-5 sm:p-7 py-12">
                                        <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms and Conditions</h1>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            Welcome to {Config.title}. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree to these terms, you must refrain from using our services.
                                                  </p>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Services</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            We offer a variety of digital services designed to help you grow your business. Each service is subject to its own specific terms which will be provided upon engagement. We reserve the right to modify or discontinue any service without prior notice.
                                                  </p>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Payment and Fees</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            All payments for services are due upfront unless otherwise agreed upon in writing. Failure to complete payment may result in the suspension or termination of services. Any applicable taxes or fees are your responsibility as the customer.
                                                  </p>
                                        </section>

                                        <section className="mb-8 bg-red-100 p-4 rounded-lg">
                                                  <h2 className="text-2xl font-semibold text-red-700 mb-4">Non-Refundable</h2>
                                                  <p className="text-red-600 leading-relaxed">
                                                            Please note that all payments made for our services are non-refundable. Once a transaction is completed, it cannot be reversed, and no refunds will be issued. This policy is final and non-negotiable.
                                                  </p>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Liability</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            While we strive to deliver the best possible results, we cannot guarantee specific outcomes from our services. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
                                                  </p>
                                        </section>

                                        <section className="mb-8">
                                                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to Terms</h2>
                                                  <p className="text-gray-600 leading-relaxed">
                                                            We reserve the right to update these terms and conditions at any time. Any changes will be effective immediately upon posting to this page. Your continued use of our services constitutes your acceptance of any updated terms.
                                                  </p>
                                        </section>

                                        <footer className="border-t pt-4 mt-8 text-gray-600 text-sm">
                                                  <p>
                                                            If you have any questions regarding these terms, please contact us at <a
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