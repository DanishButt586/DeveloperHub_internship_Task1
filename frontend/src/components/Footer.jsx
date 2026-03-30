import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { footerLinkSections } from "../data/siteConfig";

const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const YoutubeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;

export default function Footer() {
  return (
    <footer className="bg-white pt-10">
      <div className="max-w-[1180px] mx-auto px-4 flex justify-between pb-10">
        {/* Brand Info */}
        <div className="w-[280px]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[#0d6efd] rounded flex items-center justify-center text-white font-bold text-xl">
              <span className="leading-none mt-1">S</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#8cb7f5]">Brand</span>
          </div>
          <p className="text-gray-dark text-[15px] mb-4">
            Best information about the company
            gies here but now lorem ipsum is
          </p>
          <div className="flex gap-2 text-gray flex-wrap">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><FacebookIcon /></a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><TwitterIcon /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><LinkedinIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><InstagramIcon /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><YoutubeIcon /></a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="flex gap-[70px]">
          {footerLinkSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-dark mb-3">{section.title}</h4>
              <ul className="flex flex-col gap-2 text-[15px] text-gray-dark">
                {section.links.map((link) => (
                  <li key={link.label}><Link to={link.path} className="hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Links */}
        <div>
          <h4 className="font-semibold text-dark mb-3">Get app</h4>
          <div className="flex flex-col gap-2">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="w-[124px] h-[40px] bg-dark rounded-md flex items-center justify-center text-white hover:opacity-90 transition-opacity">
              {/* Placeholder for App Store button */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-full object-contain p-1" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="w-[124px] h-[40px] bg-dark rounded-md flex items-center justify-center text-white hover:opacity-90 transition-opacity">
              {/* Placeholder for Google Play button */}
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-full object-contain p-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-border bg-[#EFF2F4]">
        <div className="max-w-[1180px] mx-auto px-4 h-16 flex items-center justify-between text-gray-dark text-[15px]">
          <p>© 2023 Ecommerce.</p>
          <Link to="/settings" className="flex items-center gap-2 cursor-pointer hover:text-dark">
            <span className="text-xl leading-none mr-1">🇺🇸</span>
            <span>English</span>
            <ChevronUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
