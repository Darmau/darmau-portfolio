import Link from "next/link";

export default function Footer({ id }: { id: string }) {
  return (
    <footer className="transparent border-t border-black" id={id}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div key="blog" className="pb-6">
            <a
              href="https://darmau.design"
              target="_blank"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Blog
            </a>
          </div>
          <div key="github" className="pb-6">
            <a
              href="https://github.com/Darmau"
              target="_blank"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              data-umami-event="Github"
            >
              Github
            </a>
          </div>
          <div key="resume" className="pb-6">
            <Link
              href="/resume"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              data-umami-event="Resume"
            >
              Resume
            </Link>
          </div>

        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
              data-umami-event="Social Network"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 李大毛没有猫. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const navigation = {
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/darmaulee",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "https://dribbble.com/darmau",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M2 12C2 14.4799 2.90795 16.7522 4.40879 18.5018C4.43946 18.5451 4.47481 18.5859 4.51482 18.6235C6.34842 20.6931 9.02483 22 12 22C12.9925 22 13.9517 21.8546 14.8575 21.5839C14.8689 21.5808 14.8803 21.5773 14.8915 21.5737C18.0764 20.6096 20.5954 18.0957 21.5668 14.914C21.5801 14.8789 21.5907 14.8433 21.5987 14.8074C21.8599 13.9164 22 12.9742 22 12C22 9.53782 21.105 7.28026 19.6232 5.53568C19.5887 5.48483 19.5478 5.43723 19.5007 5.39407C17.6667 3.31424 14.9836 2 12 2C7.48684 2 3.66117 5.00723 2.42205 9.12262C2.41512 9.14265 2.40891 9.16311 2.40346 9.18397L2.40125 9.19265C2.14012 10.0837 2 11.0258 2 12ZM15.5532 19.5972C17.5001 18.6833 19.0403 17.0426 19.8227 15.0264C18.1784 14.2223 16.6422 13.8502 15.2242 13.7878C15.5545 15.7224 15.6646 17.6606 15.5532 19.5972ZM14.8987 12.18C16.6664 12.197 18.4684 12.6172 20.2617 13.45C20.3441 12.9789 20.3871 12.4944 20.3871 12C20.3871 10.2337 19.8387 8.59337 18.9031 7.24041C17.611 8.55313 16.0836 9.52695 14.3441 10.1566C14.5558 10.8302 14.7407 11.5048 14.8987 12.18ZM12.7965 10.613C12.9716 11.1685 13.1273 11.7243 13.2637 12.2805C10.344 12.6701 7.55844 14.184 5.10957 16.7779C4.16628 15.4214 3.6129 13.7743 3.6129 12C3.6129 11.4399 3.66805 10.8925 3.77319 10.3629C5.65841 10.7999 7.43739 11.0162 9.09701 11.0162C10.4059 11.0162 11.6409 10.8814 12.7965 10.613ZM13.8147 8.62136C15.3708 8.05507 16.7257 7.18052 17.858 6.00238C16.3454 4.52463 14.2775 3.6129 12 3.6129C11.8111 3.6129 11.6236 3.61918 11.4378 3.63153C12.3947 5.28607 13.1873 6.95052 13.8147 8.62136ZM9.73873 3.92233C10.7644 5.63052 11.6052 7.34782 12.26 9.0701C9.93837 9.57863 7.24667 9.49751 4.24092 8.81452C5.21595 6.44733 7.24388 4.62128 9.73873 3.92233ZM13.5974 13.8515C13.9757 15.9589 14.0758 18.068 13.8953 20.1713C13.2861 20.3125 12.6516 20.3871 12 20.3871C9.73279 20.3871 7.67325 19.4836 6.16244 18.0175C7.78551 16.269 10.3154 14.2567 13.5974 13.8515Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/darmaulee/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "小红书",
      href: "https://www.xiaohongshu.com/user/profile/5f8915a40000000001005766",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            d="M3.84884 14.7359H2.88445C2.88445 15.892 3.83775 15.9944 3.83775 15.9944H4.3255C5.3047 15.9944 5.34533 14.8458 5.34533 14.8458V8H3.84884V14.7359Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M1.35473 10.0469H2.88446C2.88446 10.0469 2.90661 14.7093 1.8203 15.1869L1 13.6454C1 13.6454 1.48775 12.0938 1.35473 10.0469Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M6.32083 10.0469H7.85056C7.71754 12.0938 8.20527 13.6454 8.20527 13.6454L7.38499 15.1869C6.29866 14.7093 6.32083 10.0469 6.32083 10.0469Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.99271 11.457H8.99596C8.2865 11.4267 8.72992 10.5321 8.72992 10.5321L9.95662 8H11.3903L10.3606 10.0148C10.3128 10.111 10.3808 10.2251 10.486 10.2251H10.581L10.6661 10.0469H12.0997L10.8631 12.5318C10.8152 12.628 10.8833 12.742 10.9886 12.742H11.8153L11.1538 13.974H9.4985C8.78906 13.9436 9.23246 13.0491 9.23246 13.0491L9.99271 11.457Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.21397 14.4705C9.21397 14.4705 9.03101 14.4875 8.90908 14.3626L8.16647 15.8295C8.16647 15.8295 8.28842 16 8.53778 16H10.3779L11.1649 14.4705H9.21397Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7209 10.0469H14.7749V14.5199H16.2086V15.9944H11.1649L11.878 14.5199H13.297V10.0469H12.3362V8.48516H15.7209V10.0469Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.5552 11.1993H21.3811V10.1889C21.3811 9.24298 20.6336 8.47624 19.7117 8.47624H19.1351V8H17.6718V8.47624H16.7532V10.0076H17.6718V11.1993H16.2086V12.7307H17.6718V15.9944H19.1351V12.7307H21.1487C21.3466 12.7307 21.5072 12.8953 21.5072 13.0985V14.7065H20.1115C20.1115 15.4178 20.6736 15.9944 21.3669 15.9944H21.7446C22.4379 15.9944 23 15.4178 23 14.7065V12.6814C23 11.8629 22.3532 11.1993 21.5552 11.1993ZM19.1351 10.0076H19.6608C19.7865 10.0076 19.8884 10.1121 19.8884 10.2411V11.1993H19.1351V10.0076Z"
          />
          <path
            fillRule="evenodd"
            d="M22.2537 8.48516C22.6537 8.48516 22.9779 8.81787 22.9779 9.22815C22.9779 9.63845 22.6537 9.97115 22.2537 9.97115H21.5295V9.22815C21.5295 8.81787 21.8537 8.48516 22.2537 8.48516Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@darmau",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
