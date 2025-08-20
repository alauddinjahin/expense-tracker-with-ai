import Link from 'next/link';
import { 
  Wallet, 
  ArrowRight, 
  BookOpen, 
  Home, 
  User, 
  Mail, 
  HelpCircle, 
  Users, 
  FileText,
  Twitter,
  Linkedin,
  Github,
  BotIcon,
  BarChart,
  LineChartIcon,
  File
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800'>
      {/* Main content */}
      <div className='max-w-6xl md:mx-5 xl:mx-auto py-12 px-5 xl:px-0'>
        {/* Top section */}
        <div className='flex flex-col lg:flex-row justify-between items-start mb-12 gap-8'>
          {/* Logo and description */}
          <div className='max-w-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md'>
                <Wallet className='text-white' size={20} />
              </div>
              <h2 className='text-xl font-bold text-slate-900 dark:text-white'>
                ExpenseTracker AI
              </h2>
            </div>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              Smart financial management with AI-powered insights to help you track expenses and build better money habits.
            </p>
          </div>

          {/* Quick actions */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5'>
              Get Started
              <ArrowRight size={16} className="ml-2" />
            </button>
            <button className='flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 rounded-lg transition-colors duration-200'>
              Learn More
              <BookOpen size={16} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Links grid */}
        <div className='grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-8 mb-12'>
          {/* Navigation */}
          <div>
            <h3 className='font-semibold text-slate-900 dark:text-white mb-4'>Navigation</h3>
            <div className='space-y-3'>
              {[
                {
                  label: 'Home',
                  link: '/',
                  icon: <Home size={16} className="mr-2" />
                },
                {
                  label: 'About',
                  link: '/about',
                  icon: <User size={16} className="mr-2" />
                },
                {
                  label: 'Contact',
                  link: '/contact',
                  icon: <Mail size={16} className="mr-2" />
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  className='flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200'
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className='font-semibold text-slate-900 dark:text-white mb-4'>Features</h3>
            <div className='space-y-3'>
              {[
                { name: 'AI Insights', icon: <BotIcon size={16} className="mr-2" /> },
                { name: 'Smart Categories', icon: <BarChart size={16} className="mr-2" /> },
                { name: 'Budget Tracking', icon: <LineChartIcon size={16} className="mr-2" /> },
                { name: 'Export Data', icon: <File size={16} className="mr-2" /> }
              ].map((feature) => (
                <div key={feature.name} className='flex items-center text-sm text-slate-600 dark:text-slate-400'>
                  <span className="mr-2">{feature.icon}</span>
                  {feature.name}
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className='font-semibold text-slate-900 dark:text-white mb-4'>Support</h3>
            <div className='space-y-3'>
              {[
                { name: 'Help Center', href: '/help', icon: <HelpCircle size={16} className="mr-2" /> },
                { name: 'Contact', href: '/contact', icon: <Mail size={16} className="mr-2" /> },
                { name: 'Community', href: '/community', icon: <Users size={16} className="mr-2" /> },
                { name: 'API Docs', href: '/docs', icon: <FileText size={16} className="mr-2" /> }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200'
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='font-semibold text-slate-900 dark:text-white mb-4'>Stay Updated</h3>
            <p className='text-sm text-slate-600 dark:text-slate-400 mb-4'>
              Get tips and updates delivered to your inbox.
            </p>
            <div className='space-y-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200'
              />
              <button className='w-full px-3 py-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white text-sm font-medium rounded-md transition-colors duration-200'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className='flex flex-wrap justify-center gap-8 mb-12 py-6 bg-slate-100 dark:bg-slate-800 rounded-lg'>
          {[
            { label: 'Active Users', value: '50K+' },
            { label: 'Transactions', value: '2M+' },
            { label: 'Money Saved', value: '$10M+' },
            { label: 'Countries', value: '25+' }
          ].map((stat) => (
            <div key={stat.label} className='text-center'>
              <div className='text-2xl font-bold text-amber-600 dark:text-amber-400'>
                {stat.value}
              </div>
              <div className='text-sm text-slate-600 dark:text-slate-400'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className='pt-8 border-t border-slate-200 dark:border-slate-800'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Copyright and legal */}
            <div className='flex flex-col md:flex-row items-center gap-4 text-sm text-slate-600 dark:text-slate-400'>
              <p>© {new Date().getFullYear()} ExpenseTracker AI. All rights reserved.</p>
              <div className='flex items-center gap-3'>
                <Link href='/privacy' className='hover:text-slate-900 dark:hover:text-white transition-colors duration-200'>
                  Privacy
                </Link>
                <span className='text-slate-400'>•</span>
                <Link href='/terms' className='hover:text-slate-900 dark:hover:text-white transition-colors duration-200'>
                  Terms
                </Link>
              </div>
            </div>

            {/* Social and developer */}
            <div className='flex flex-col md:flex-row items-center gap-6'>
              {/* Social links */}
              <div className='flex items-center gap-3'>
                {[
                  { name: 'Twitter', icon: <Twitter size={16} /> },
                  { name: 'LinkedIn', icon: <Linkedin size={16} /> },
                  { name: 'GitHub', icon: <Github size={16} /> }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href='#'
                    className='w-8 h-8 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors duration-200'
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>

              {/* Developer credit */}
              <div className='flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400'>
                <span>Built by</span>
                <span className='font-medium text-amber-600 dark:text-amber-400'>
                  Alauddin Jahin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;