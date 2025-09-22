export function Work() {
  const mediaLinks = [
    {
      label: "Rahul Gandhi not destined to become PM anytime soon",
      url: "https://www.theweek.in/news/india/2018/06/19/rahul-gandhi-not-destined-become-pm-anytime-soon-astrologers.html",
    },
    {
      label: "Third term for sure for Modi: Astrologers",
      url: "https://www.theweek.in/leisure/lifestyle/2024/03/17/third-term-for-sure-for-modi-say-renowned-astrologers.html",
    },
    {
      label: "Coronavirus will see its end soon: Astrologers",
      url: "https://www.theweek.in/news/india/2020/03/29/coronavirus-will-see-its-end-soon-say-renowned-astrologers.html",
    },
    {
      label: "Will Priyanka Gandhi become PM? What astrologers say",
      url: "https://www.theweek.in/news/india/2024/11/01/will-priyanka-gandhi-become-india-pm-what-astrologers-say-prime-minister-congress-party.html",
    },
    {
      label: "Modi’s swearing-in: Vegetarian thali and five more years?",
      url: "https://www.theweek.in/news/india/2024/06/08/modis-swearing-in-its-vegetarian-thali-for-dinner-astrologer-predicts-five-years-for-govt.html",
    },
    {
      label: "No political setback for Modi till 2029: Astrologers",
      url: "https://www.theweek.in/news/india/modi-will-face-no-political-setback-till-2029-astrologers.html",
    },
    {
      label: "AstroPoduval Tweet",
      url: "https://x.com/Astropoduval/status/1752984992236593404?t=DIMplMUVE6QYYdACHmLy3Q&s=08",
    },
    {
      label: "Mid-Day Feature",
      url: "https://www.mid-day.com/brand-media/article/astrology-with-this-man-is-inimitable-and-astronomical-23338581",
    },
    {
      label: "Bharat18 Feature",
      url: "https://www.bharat18.in/worlds-most-intuitive-astrologer-of-alltime-an-astrologer-with-a-difference/",
    },
    {
      label: "Delhi Updates Feature",
      url: "https://delhiupdates.in/worlds-most-intuitive-astrologer-of-alltime-an-astrologer-with-a-difference/",
    },
  ];

  const chithrabhanuLinks = [
    {
      label: "WhatsApp Channel",
      url: "https://whatsapp.com/channel/0029Va4IQjAHVvTgJTCMFK2j",
    },
    {
      label: "Facebook Group",
      url: "https://www.facebook.com/share/g/1Cf1iq6SRJ/",
    },
    {
      label: "Facebook Page",
      url: "https://www.facebook.com/share/1AYDoa81kb/",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/astrologerpoduval?igsh=NnBieG9yM3c1ejM3",
    },
    {
      label: "YouTube Channel",
      url: "https://youtube.com/@astropoduval?si=w4y-muH-s4K4QFF3",
    },
    {
      label: "JustDial Profile",
      url: "https://www.justdial.com/Kannur/Astrologer-Drhc-Shri-Chithrabhanu-K-Poduval-Near-Bypass-Payyanur/9999PX497-X497-110805132403-G9J4_BZDET",
    },
    { label: "X (Twitter)", url: "https://x.com/astropoduval" },
    {
      label: "Facebook Public Profile",
      url: "https://www.facebook.com/share/16VR5aFwk3/",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Media Section */}
      <div className="border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
          Media References
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-blue-700">
          {mediaLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
          Social Media – Astrology With Chithrabhanu K Poduval
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-blue-700">
          {chithrabhanuLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
