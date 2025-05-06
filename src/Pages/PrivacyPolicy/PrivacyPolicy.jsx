import React from "react";
import DynamicTittle from "../../Utils/DynamicTittle";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  DynamicTittle("Privacy Policy");

  return (
    <>
      <div className="bg-gray-50 text-gray-800 px-6 md:px-20 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">Privacy Policy</h1>
        <p className="mb-6 text-lg">At EventBangla, your privacy is very important to us. This page explains what data we collect, why we collect it, and how we use it.</p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">1. What We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your name and email address when you sign up</li>
              <li>Event interests you select or view</li>
              <li>Basic device and usage data (like your browser or time spent on site)</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">2. Why We Collect It</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To help you find events you care about</li>
              <li>To send event updates or newsletters (only if you subscribe)</li>
              <li>To improve our site experience and features</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">3. Who Can See Your Info</h2>
            <p>
              We do <strong>not</strong> sell or share your personal info with outside companies. Your data is safe and only used inside EventBangla.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">4. Cookies & Tracking</h2>
            <p>We use small files called cookies to remember your preferences and improve your experience. You can turn off cookies in your browser settings if you want.</p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">5. Your Choices</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You can update or delete your account at any time</li>
              <li>You can unsubscribe from our emails anytime</li>
              <li>Contact us if you have questions or want your data removed</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">6. Contact Us</h2>
            <p>
              If you have any questions about this policy, Please{" "}
              <Link to="/contact" className="text-primary font-medium btn-primary">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
