import { SignInButton } from '@clerk/nextjs';
import { BadgeQuestionMarkIcon, BarChart3Icon, BotIcon, DiamondIcon, SparklesIcon } from 'lucide-react';

const Guest = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-[10rem] px-4 sm:px-6 md:px-8 
      bg-gradient-to-br from-cyan-500/10 via-orange-500/5 to-amber-500/10 dark:from-cyan-900/5 dark:via-orange-900/5 dark:to-amber-900/10'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500 dark:bg-amber-400 rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>
              AI-Powered Financial Management
            </span>
            <span className='sm:hidden'>AI Financial Management</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight'>
            Welcome to{' '}
            <span className='bg-gradient-to-r from-amber-600 via-orange-500 to-cyan-500 bg-clip-text text-transparent'>
              ExpenseTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-8 text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0'>
            Track your expenses, manage your budget, and get AI-powered insights
            to take control of your finances with intelligent automation.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0 '>
            <SignInButton>
              <button className='group relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-500 to-cyan-500 hover:from-amber-700 hover:via-orange-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'>
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  Get Started Free
                  <span className='text-lg'>→</span>
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              </button>
            </SignInButton>
            <button className='group border-2 border-amber-500/20 dark:border-amber-400/20 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'>
              Learn More
            </button>
          </div>

        </div>
      </section>

      
    <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 flex flex-col justify-center font-sans bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300'>
    
     {/* Feature highlights */}
     <div className='text-center mb-10 sm:mb-12 md:mb-16'>
        
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 px-2 sm:px-0'>
          Smart {' '}
          <span className='text-amber-600 dark:text-amber-400'>
            Services
          </span>
        </h2>

         <p className='text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 sm:px-0'>
              Everything you need to know about ExpenseTracker AI and how it can
              transform your financial management.
            </p>

      </div>

      <div className='flex items-center '>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0'>
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 via-orange-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                  <span className='text-white text-base sm:text-lg'><BotIcon size={20} /></span>
                </div>
                <h3 className='text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center'>
                  AI Insights
                </h3>
                <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center'>
                  Smart analysis of your spending patterns
                </p>
              </div>
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 via-cyan-500 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                  <span className='text-white text-base sm:text-lg'><SparklesIcon size={20} /></span>
                </div>
                <h3 className='text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center'>
                  Auto Categories
                </h3>
                <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center'>
                  Intelligent expense categorization
                </p>
              </div>
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 sm:col-span-2 md:col-span-1'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 via-amber-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                  <span className='text-white text-base sm:text-lg'><BarChart3Icon size={20} /></span>
                </div>
                <h3 className='text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center'>
                  Smart Dashboard
                </h3>
                <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center'>
                  Beautiful, intuitive financial overview
                </p>
              </div>
            </div>
      </div>
          
    </section>

      {/* Frequently Asked Questions Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-500'></div>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-amber-500 dark:bg-amber-400 rounded-full'></span>
              FAQ
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 px-2 sm:px-0'>
              Frequently Asked{' '}
              <span className='text-amber-600 dark:text-amber-400'>
                Questions
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 sm:px-0'>
              Everything you need to know about ExpenseTracker AI and how it can
              transform your financial management.
            </p>
          </div>

          <div className='space-y-4 sm:space-y-6'>
            <div className='group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-200'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-500 via-orange-500 to-cyan-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg flex-shrink-0'>
                  <span className='text-white text-xs sm:text-sm'><BadgeQuestionMarkIcon size={20} /></span>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3'>
                    What is ExpenseTracker AI?
                  </h3>
                  <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed'>
                    ExpenseTracker AI is an intelligent financial management
                    tool that uses artificial intelligence to help you monitor
                    your spending patterns, get smart category suggestions, and
                    receive personalized insights to improve your financial
                    health.
                  </p>
                </div>
              </div>
            </div>

            <div className='group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-200'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 via-cyan-500 to-amber-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg flex-shrink-0'>
                  <span className='text-white text-xs sm:text-sm'><BotIcon size={20} /></span>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3'>
                    How does the AI work?
                  </h3>
                  <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed'>
                    Our AI analyzes your spending data to automatically
                    categorize expenses, detect patterns, and provide
                    personalized recommendations. You can also ask the AI
                    questions about your spending habits and get instant,
                    intelligent responses.
                  </p>
                </div>
              </div>
            </div>

            <div className='group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-200'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-500 via-amber-500 to-orange-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg flex-shrink-0'>
                  <span className='text-white text-xs sm:text-sm'><DiamondIcon size={20} /></span>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3'>
                    Is ExpenseTracker AI free?
                  </h3>
                  <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed'>
                    Yes, ExpenseTracker AI offers a free plan with basic AI
                    features including smart categorization and insights.
                    Premium plans are available for advanced AI analytics and
                    unlimited AI interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900/20'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-amber-500 dark:bg-amber-400 rounded-full'></span>
              Testimonials
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 px-2 sm:px-0'>
              What Our Users{' '}
              <span className='text-amber-600 dark:text-amber-400'>
                Say
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 sm:px-0'>
              Join thousands of satisfied users who have transformed their
              financial habits with ExpenseTracker AI.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 via-orange-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg'>
                    <span className='text-white text-xs sm:text-sm font-bold'>
                      S
                    </span>
                  </div>
                  <div>
                    <div className='font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base'>
                      Sarah L.
                    </div>
                    <div className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
                      Verified User
                    </div>
                  </div>
                </div>
                <p className='text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  &ldquo;ExpenseTracker AI has completely transformed my
                  budgeting. The AI insights are incredibly helpful and I now
                  have full control over my finances!&rdquo;
                </p>
                <div className='flex text-amber-500 text-xs sm:text-sm'>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>

            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-cyan-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 via-cyan-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg'>
                    <span className='text-white text-xs sm:text-sm font-bold'>
                      J
                    </span>
                  </div>
                  <div>
                    <div className='font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base'>
                      John D.
                    </div>
                    <div className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
                      Verified User
                    </div>
                  </div>
                </div>
                <p className='text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  &ldquo;The AI-powered insights from ExpenseTracker have helped
                  me identify and reduce unnecessary spending. The smart
                  categorization is amazing!&rdquo;
                </p>
                <div className='flex text-amber-500 text-xs sm:text-sm'>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>

            <div className='group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 sm:col-span-2 lg:col-span-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-amber-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 via-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg'>
                    <span className='text-white text-xs sm:text-sm font-bold'>
                      E
                    </span>
                  </div>
                  <div>
                    <div className='font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base'>
                      Emily R.
                    </div>
                    <div className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
                      Verified User
                    </div>
                  </div>
                </div>
                <p className='text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  &ldquo;ExpenseTracker AI is so intelligent and easy to use.
                  The AI recommendations are spot-on and have genuinely improved
                  my financial habits!&rdquo;
                </p>
                <div className='flex text-amber-500 text-xs sm:text-sm'>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guest;
