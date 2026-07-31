import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Introduction',
      content:
        'Code2Commit ("we", "our", or "the extension") is a Chrome browser extension that helps developers save their accepted LeetCode solutions directly to their GitHub repositories. This Privacy Policy explains what data we collect, how we use it, and how we protect it.',
    },
    {
      title: 'Information We Collect',
      items: [
        {
          label: 'GitHub OAuth Access Token',
          detail:
            'When you connect your GitHub account, we receive an OAuth access token through the standard GitHub OAuth 2.0 flow. This token is stored locally in your browser using chrome.storage.local and is never transmitted to any third-party server.',
        },
        {
          label: 'LeetCode Submission Data',
          detail:
            'When you click the "Push to GitHub" button, the extension reads your submission code, problem title, and topic tags from LeetCode\'s public GraphQL API. This data is used solely to create the file that gets pushed to your GitHub repository.',
        },
        {
          label: 'GitHub Username',
          detail:
            'Your GitHub username is fetched via the GitHub API to identify your repositories. It is only used locally within the extension and is never stored on our servers.',
        },
      ],
    },
    {
      title: 'Information We Do NOT Collect',
      items: [
        { label: 'Personal Information', detail: 'We do not collect your name, email address, phone number, or any personally identifiable information.' },
        { label: 'LeetCode Credentials', detail: 'We never access, store, or transmit your LeetCode password or session cookies to any external server.' },
        { label: 'Browsing History', detail: 'We do not track, log, or monitor any of your browsing activity.' },
        { label: 'Analytics or Telemetry', detail: 'We do not use any analytics services, tracking pixels, or telemetry of any kind.' },
      ],
    },
    {
      title: 'How Your Data Is Used',
      items: [
        { label: 'Authentication', detail: 'Your GitHub access token is used exclusively to authenticate API requests to push your code to your own GitHub repository.' },
        { label: 'Code Submission', detail: 'Your LeetCode solution code and problem metadata are read only when you explicitly click the "Push to GitHub" button, and are sent directly to the GitHub API.' },
      ],
    },
    {
      title: 'Data Storage & Security',
      content:
        'All data is stored locally within your browser using chrome.storage.local, which is sandboxed and cannot be accessed by other extensions or websites. Your GitHub access token is never stored on our servers. The OAuth token exchange happens through our secure backend solely to protect the GitHub Client Secret, after which the token is passed to your browser and our server retains nothing.',
    },
    {
      title: 'Third-Party Services',
      items: [
        { label: 'GitHub API', detail: 'Used to authenticate users and push code to repositories. Governed by GitHub\'s own Privacy Policy.' },
        { label: 'LeetCode GraphQL API', detail: 'Used to fetch the user\'s own submitted code. This is the same API that powers LeetCode\'s own website.' },
      ],
    },
    {
      title: 'Data Sharing',
      content:
        'We do not sell, trade, rent, or share your data with any third parties. Your code travels directly from your browser to GitHub. It never passes through our servers.',
    },
    {
      title: 'Your Rights',
      items: [
        { label: 'Revoke Access', detail: 'You can revoke the extension\'s access to your GitHub account at any time from your GitHub Settings → Applications → Authorized OAuth Apps.' },
        { label: 'Delete Data', detail: 'Uninstalling the extension automatically removes all locally stored data, including your access token.' },
      ],
    },
    {
      title: 'Changes to This Policy',
      content:
        'We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. Continued use of the extension after changes constitutes acceptance of the revised policy.',
    },
    {
      title: 'Contact Us',
      content:
        'If you have any questions or concerns about this Privacy Policy, please open an issue on our GitHub repository or reach out to us through our website.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-dark text-white">
      {/* Background */}
      <div className="grid-bg" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 max-w-5xl mx-auto">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-orange-400 flex items-center justify-center font-bold text-dark text-sm shadow-lg shadow-primary/20">
            C2C
          </div>
          <span className="font-semibold text-lg tracking-tight text-white">
            Code<span className="text-primary">2</span>Commit
          </span>
        </a>
        <a
          href="/"
          className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm text-gray-300 hover:text-white"
        >
          ← Back to Home
        </a>
      </nav>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 pt-8 pb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {section.title}
              </h2>

              {section.content && (
                <p className="text-gray-400 leading-relaxed pl-11">
                  {section.content}
                </p>
              )}

              {section.items && (
                <ul className="space-y-3 pl-11">
                  {section.items.map((item, j) => (
                    <li key={j} className="glass-card rounded-xl p-4">
                      <span className="text-white font-medium">{item.label}</span>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-primary to-orange-400 flex items-center justify-center font-bold text-dark text-[8px]">
              C2C
            </div>
            <span>Code2Commit © {new Date().getFullYear()}</span>
          </div>
          <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
        </div>
      </div>
    </div>
  );
}
