import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-purple-600/80"></div>
        <Image src="/images/hero-bg.png" alt="Hero Background" fill className="object-cover -z-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Make Your Interior More
            <br />
            Minimalistic & Modern
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Turn your room with panto into a lot more minimalist
            <br />
            and modern with ease and speed
          </p>

          <Button className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
            Terms and Conditions
          </Button>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Your use of our website is governed by the following terms and conditions ("Terms of Use"), as well as the
              CARDONE CAPITAL Privacy Policy and other operating rules, minimum qualifications and cautions posted
              throughout the website or presented to you individually during the course of your use of the website
              (collectively, the "Terms"). The Terms govern your use of the website and constitute the entire agreement
              between you and CARDONE CAPITAL regarding your use of the website. CARDONE CAPITAL may revise the Terms at
              any time by updating this posting. You should visit this page periodically to review the Terms because
              they are binding on you. Your use of the website after such changes constitutes your acceptance of the
              Terms and any changes to such terms. If at any time you do not want to be bound by the Terms, you should
              logout, exit and cease using the website immediately.
            </p>

            <h2 className="text-2xl font-bold mb-6">Intended Use of Website</h2>
            <p className="text-gray-600 mb-8">
              CARDONE CAPITAL is not a dealer or placement agent. At no time does CARDONE CAPITAL offer, broker, advise,
              purchase, sell or otherwise transact in securities regulated by the SEC or federal or state law. CARDONE
              CAPITAL does not accept, hold or transfer cash or securities. CARDONE CAPITAL does not guarantee that a
              Company seeking investment will achieve any level of success or that any proposed offering will satisfy
              all applicable federal and state securities laws.
            </p>

            <p className="text-gray-600 mb-8">
              CARDONE CAPITAL is not a licensed advisor. CARDONE CAPITAL, whether through the website or otherwise, does
              not provide personal financial advice, loans or credit, banking, consumer credit ratings, credit
              decisions, financial products, brokerage accounts, insurance, tax advice, legal advice, or legal services
              of any kind.
            </p>

            <p className="text-gray-600 mb-8">
              CARDONE CAPITAL does not guarantee any results to anyone. All users of the website are responsible for
              making their own decisions to use the website and for any activity taken on the website, including without
              limitation registering and making an investment or other decision.
            </p>

            <h2 className="text-2xl font-bold mb-6">User Registration</h2>
            <p className="text-gray-600 mb-8">
              If you are accepting the Terms on behalf of an organization or entity, rather than in an individual
              capacity, you represent and warrant that you are authorized to accept the Terms on behalf of that
              organization or entity and to bind them to these Terms (in which case, the references to "you" and "your"
              in these Terms, except for in this sentence, refer to that organization or entity).
            </p>

            <p className="text-gray-600 mb-8">
              Only real persons of or above the age of 18 may register for an account and use the website. Registering
              for an account on the website creates no commitment or obligation on the part of CARDONE CAPITAL to
              provide investment. All information you provide to create your account must be accurate and complete. You
              are responsible for maintaining the confidentiality of your account login information and for all
              activities that occur under third-party social media sites, to attempt to confirm your qualification to
              use the website.
            </p>

            <p className="text-gray-600 mb-8">
              CARDONE CAPITAL may reject any application to register an individual or an organization or entity for
              failure to achieve validation through available methods or otherwise meet CARDONE CAPITAL's requirements.
            </p>

            <p className="text-gray-600 mb-8">
              Your registration and the use of any third-party site is subject to the terms and conditions and policies
              of such sites and CARDONE CAPITAL is not responsible or liable for any harm resulting from the use or
              misuse of those sites, including when such harm could or does affect your account on this website or use
              of this website.
            </p>

            <h2 className="text-2xl font-bold mb-6">Registered Account Obligations</h2>
            <p className="text-gray-600 mb-8">
              The registered account user and account is the only person that may use the account and it may not be
              transferred to anyone else.
            </p>

            <p className="text-gray-600 mb-8">
              You are responsible for maintaining the confidentiality of your username and password and to periodically
              change your password to maintain security. If you have reason to believe that your username or password
              may have been compromised and suspect that unauthorized access to your account or the website has
              occurred, you must immediately contact CARDONE CAPITAL's investor support through a secure method (not
              just by posting through your website account).
            </p>

            <h2 className="text-2xl font-bold mb-6">Content Use Limitations</h2>
            <p className="text-gray-600 mb-8">
              Your use of the website and its videos, webinars, images, infographics, alerts, text, articles,
              assessments, checklists, forms, ratings, design, data, software, sound, photographs, graphics,
              applications, interactive features, and all other content or materials available on or through the website
              ("Content") may only be used for the purposes expressly authorized by CARDONE CAPITAL. If you access this
              website from outside the United States, you are solely responsible for ensuring compliance with the laws
              of your specific jurisdiction. Any unauthorized use of the website and its Content, or other violations of
              the Terms may violate Applicable Law (see below), federal, state, and local laws, regulations and
              ordinances, including without limitation, laws regarding the unauthorized practice of law, copyright laws
              (including the Digital Millennium Copyright Act), trademark laws, the laws of privacy and publicity, and
              communications regulations and statutes. Any such unauthorized use terminates the permission or license
              granted by CARDONE CAPITAL and CARDONE CAPITAL is authorized to terminate your account and access to the
              website at any time and without notice and report you to the appropriate authorities and other interested
              parties.
            </p>

            <h2 className="text-2xl font-bold mb-6">Prospective Investor Accounts</h2>
            <p className="text-gray-600 mb-8">
              Any person or entity that is considering making an investment with a Company that posts its fundraising
              plans on the website, or after the fundraising plan becomes a live offering, does so as an investor, and
              such person or entity may be or may become an investor. Investment carries risk that you may lose your
              investment. No Content on the website is a replacement for performing your own due diligence, exercising
              good judgment, and seeking financial, accounting, securities, tax and legal advice from licensed
              professionals familiar with your personal circumstances. Any projections, estimates, forecasts, targets,
              prospects, and/or opinions expressed in these materials are subject to change without notice and may
              differ or be contrary to opinions expressed by others. Please consult your advisor(s) for investment,
              accounting, legal, or tax representatives or firm working for or with CARDONE CAPITAL or communicating
              with you or users in general through the website are not your representatives and are not providing advice
              to you individually. Nothing they post is for informational purposes only and you are solely responsible
              for determining whether any investment, investment strategy, security, or related transaction is
              appropriate for you based on your investment objectives, financial circumstances, and risk tolerance. You
              should consult your legal, tax, or investment advisors before making any investment decision. CARDONE
              CAPITAL and the Companies seeking investment are not responsible for determining the suitability of any
              investment for any investor and will not be held personally liable for your fraud, negligence and other
              bad acts that may result from any false representations you make.
            </p>

            <p className="text-gray-600 mb-8">
              You are solely responsible for your investment decisions. While you may be asked about your identity,
              individual financial circumstances and investment experience and sophistication during your engagement
              with the website, CARDONE CAPITAL and its advisors and vendors are not responsible to verify the veracity
              of the information that you provide, even if you certify its truth or undergo a suitability review.
              Whether you are an "Accredited Investor", as such is defined under securities law, or a non-accredited
              investor, or an institutional investor, or any other category of investor, CARDONE CAPITAL and the
              Companies seeking investment are relying on your representations with respect to your investment
              experience, your financial status and your eligibility to invest. You may, further, be held personally
              liable for your fraud, negligence and other bad acts that may result from any false representations you
              make.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
