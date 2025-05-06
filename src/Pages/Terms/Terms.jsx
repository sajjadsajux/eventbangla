import React from "react";
import DynamicTittle from "../../Utils/DynamicTittle";
import { Link } from "react-router";

const Terms = () => {
  DynamicTittle("Terms & Conditions");

  return (
    <>
      <div className="bg-gray-50 py-10 px-4 md:px-20 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary text-center">Terms and Conditions</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: [07/05/2025]</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">1. Use of Our Website</h2>
              <p className="text-gray-700">By using EventBangla, you agree to use the platform only for lawful purposes. You may not misuse the website or disrupt the experience of other users.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">2. Event Listings</h2>
              <p className="text-gray-700">We try to provide accurate and updated event details, but EventBangla is not responsible for any changes, errors, or cancellations by the organizers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">3. User Accounts</h2>
              <p className="text-gray-700">You are responsible for your login credentials and all activities that occur under your account. Do not share your password with others.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">4. Ticket Booking</h2>
              <p className="text-gray-700">EventBangla does not process ticket payments. All bookings are handled by organizers or third-party platforms, and we are not liable for any booking issues.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">5. Intellectual Property</h2>
              <p className="text-gray-700">All content on EventBangla, including text, logos, and graphics, belongs to us or our partners. Do not reuse or copy without permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">6. Changes to Terms</h2>
              <p className="text-gray-700">We may update these terms at any time. Please review them regularly. Continued use of the site means you accept the changes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">7. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about these terms, please{" "}
                <Link to="/contact" className="text-primary font-medium btn-primary">
                  Contact Us
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
