import { useState } from "react";
import Container from "../common/container";
import Link from "next/link";

interface AccountDetail {
  label: string;
  value: string;
  icon?: string;
}

const AccountInfo = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const accountDetails: AccountDetail[] = [
    {
      label: "Bank Name",
      value: "First Bank of Africa",
      icon: "🏦",
    },
    {
      label: "Account Number",
      value: "1234567890",
      icon: "🔢",
    },
    {
      label: "Account Name",
      value: "Jaytee Ojo Foundation",
      icon: "👤",
    },
    {
      label: "Routing Number",
      value: "021000021",
      icon: "📍",
    },
    {
      label: "Swift Code",
      value: "FBANAIJA",
      icon: "🌐",
    },
    {
      label: "Branch",
      value: "Lagos Main Branch",
      icon: "🏢",
    },
  ];

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <Container>
      <div className="py-12 max-md:py-8">
        {/* Header Section */}
        <div className="mb-12 text-center max-md:mb-8">
          <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-4 font-RobotoSlab">
            Foundation Account Details
          </h2>
          <p className="text-lg text-gray-600 max-md:text-base font-Roboto">
            Transfer funds directly to support our mission of creating positive
            change
          </p>
        </div>

        {/* Account Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-4 mb-8">
          {accountDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#369458] rounded-lg p-6 max-md:p-4 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Label and Icon */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{detail.icon}</span>
                <label className="text-sm font-semibold text-[#369458] uppercase tracking-wide font-Roboto">
                  {detail.label}
                </label>
              </div>

              {/* Value and Copy Button */}
              <div className="flex items-center justify-between gap-3">
                <p className="text-xl max-md:text-lg font-bold text-gray-900 font-Roboto break-all">
                  {detail.value}
                </p>
                <button
                  onClick={() => handleCopy(detail.value, detail.label)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold text-sm font-Roboto transition-all duration-300 whitespace-nowrap ${
                    copiedField === detail.label
                      ? "bg-green-500 text-white"
                      : "bg-[#369458] text-white hover:bg-[#2a7a45] active:scale-95"
                  }`}
                  title="Copy to clipboard"
                >
                  {copiedField === detail.label ? "✓ Copied" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="bg-gradient-to-r from-[#369458] via-green-500 to-[#369458] text-white rounded-lg p-8 max-md:p-6 mb-8">
          <div className="flex items-start gap-4 max-md:gap-3">
            <span className="text-3xl max-md:text-2xl flex-shrink-0">💡</span>
            <div>
              <h3 className="text-xl max-md:text-lg font-bold mb-2 font-RobotoSlab">
                Important Information
              </h3>
              <ul className="space-y-2 text-sm max-md:text-xs font-Roboto">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>
                    All donations are securely processed and tax-deductible
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>
                    You will receive a donation receipt via email within 24
                    hours
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>
                    Your support directly impacts our community programs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 border-l-4 border-[#E60303] rounded-lg p-6 max-md:p-4">
          <h3 className="text-lg max-md:text-base font-bold text-gray-900 mb-2 font-RobotoSlab">
            Need Help?
          </h3>
          <p className="text-gray-700 text-base max-md:text-sm font-Roboto mb-4">
            If you have any questions about making a donation or need
            alternative payment methods, please don&apos;t hesitate to reach out
            to our team.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-6 py-2 bg-[#369458] text-white font-bold rounded-lg hover:bg-[#2a7a45] transition-colors duration-300 font-Roboto text-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-xl max-md:text-lg font-bold text-gray-900 mb-6 font-RobotoSlab">
            Other Payment Methods
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Mobile Money",
                icon: "📱",
                description: "Quick and easy transfers",
              },
              {
                title: "Online Portal",
                icon: "💻",
                description: "Secure payment gateway",
              },
              {
                title: "In-Person",
                icon: "👥",
                description: "Visit our office",
              },
            ].map((method, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:border-[#369458] transition-colors"
              >
                <div className="text-3xl mb-2">{method.icon}</div>
                <h4 className="font-bold text-gray-900 font-Roboto mb-1">
                  {method.title}
                </h4>
                <p className="text-sm text-gray-600 font-Roboto">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AccountInfo;
