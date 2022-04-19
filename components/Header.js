/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { FullScreenMobileModal } from './Modal';

function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleMobileNav = () => {
    setOpen(!open);
    document.body.style.overflow = open ? '' : 'hidden';
  };

  useEffect(
    () => () => {
      document.body.style.overflow = '';
    },
    []
  );

  return (
    <>
      <button
        aria-label="Toggle mobile nav"
        onClick={toggleMobileNav}
        className="h-10 py-2 px-4 sm:hidden"
        key="mobile-nav-button"
        style={{ zIndex: 600 }}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{ transform: open && 'rotate(90deg)' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {open && (
        <FullScreenMobileModal>
          <MobileNavItem href="/" text="Home" />
          <MobileNavItem href="/resume" text="Resume" />
          <MobileNavItem href="/projects" text="Projects" />
        </FullScreenMobileModal>
      )}
    </>
  );
}

const MobileNavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={`${
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400'
        } rounded-lg p-3 text-center text-xl sm:hidden`}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
};

const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={`${
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400'
        } hidden rounded-lg p-3 sm:inline-block sm:hover:bg-gray-200 sm:dark:hover:bg-gray-800`}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
};

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex justify-center p-4 sm:flex-col">
      <nav>
        <div className="flex">
          <MobileNav />
          <NavItem href="/" text="Home" />
          <NavItem href="/resume" text="Resume" />
          <NavItem href="/projects" text="Projects" />
          <div className="flex flex-1 justify-end">
            <a
              aria-label="Email"
              href="mailto:aruniverse@pm.me"
              className="h-10 py-2 px-4"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="mt-1 h-4 w-6"
              >
                <path d="m16 14v-10l-8 6-8-6v10z" />
                <path d="m0 2h16l-8 6z" />
              </svg>
            </a>
            <a
              aria-label="GitHub Source"
              href="https://github.com/aruniverse"
              className="h-10 py-2 px-4"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
              className="h-10 py-2 px-4"
              style={{ zIndex: 600 }}
            >
              {mounted && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-800 dark:text-gray-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      resolvedTheme === 'dark'
                        ? 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                        : 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    }
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
