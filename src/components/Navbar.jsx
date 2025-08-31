import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className="flex items-center justify-center text-sm h-14 border-b border-gray-200 fixed top-0 w-full z-50"
      style={{
        backgroundColor: "var(--bg-color)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:w-[65%] lg:px-0 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4 max-md:space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill={"white"}
            viewBox="0 0 24 24"
          >
            <path d="M2.25 14.3c-.04-.19.18-.31.32-.17l7.3 7.3c.14.14.02.36-.17.32-3.68-.86-6.59-3.77-7.45-7.45m-.24-2.93q0 .09.06.15l10.41 10.41s.1.06.15.06c.47-.03.94-.09 1.39-.19.15-.03.21-.22.1-.33L2.52 9.89a.194.194 0 0 0-.33.1c-.09.46-.16.92-.19 1.39Zm.84-3.44c-.03.07-.02.16.04.22L15.84 21.1c.06.06.15.07.22.04.36-.16.7-.34 1.04-.54.09-.06.12-.18.07-.27 0-.01-.02-.03-.03-.04L3.69 6.87a.193.193 0 0 0-.28 0c-.01.01-.02.02-.03.04-.2.33-.38.68-.54 1.04ZM4.54 5.6a.19.19 0 0 1 0-.27 9.99 9.99 0 0 1 7.47-3.34c5.53 0 10.01 4.48 10.01 10.01 0 2.97-1.29 5.63-3.34 7.47-.08.07-.2.07-.27 0L4.53 5.61Z"></path>
          </svg>
          <span className="text-xl" style={{ color: "var(--primary-text)" }}>
            Linear
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-7">
          <a
            href="#"
            className="transition-colors"
            style={{ color: "var(--secondary-text)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-color)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--secondary-text)")
            }
          >
            Product
          </a>
          <a
            href="#"
            className="transition-colors"
            style={{ color: "var(--secondary-text)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-color)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--secondary-text)")
            }
          >
            Resources
          </a>
          <a
            href="#"
            className="transition-colors"
            style={{ color: "var(--secondary-text)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-color)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--secondary-text)")
            }
          >
            Pricing
          </a>
          <a
            href="#"
            className="transition-colors"
            style={{ color: "var(--secondary-text)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-color)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--secondary-text)")
            }
          >
            Customers
          </a>
          <a
            href="#"
            className="transition-colors"
            style={{ color: "var(--secondary-text)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-color)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--secondary-text)")
            }
          >
            Now
          </a>
          <a
            href="#"
            className="transition-colors"
            style={{ color: "var(--secondary-text)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-color)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--secondary-text)")
            }
          >
            Contact
          </a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className="transition-colors"
            style={{ color: "var(--primary-text)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-color)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--primary-text)")
            }
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 transition-colors"
            style={{
              color: "var(--bg-color)",
              backgroundColor: "var(--primary-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--primary-text)";
              e.currentTarget.style.backgroundColor = "var(--accent-color)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--bg-color)";
              e.currentTarget.style.backgroundColor = "var(--primary-text)";
            }}
          >
            Sign up
          </a>
        </div>

        {/* Mobile Auth Buttons (Tablet and Mobile) */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="#"
            className="text-sm transition-colors"
            style={{ color: "var(--primary-text)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-color)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--primary-text)")
            }
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-1.5 text-sm transition-colors"
            style={{
              color: "var(--bg-color)",
              backgroundColor: "var(--primary-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--primary-text)";
              e.currentTarget.style.backgroundColor = "var(--accent-color)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--bg-color)";
              e.currentTarget.style.backgroundColor = "var(--primary-text)";
            }}
          >
            Sign up
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="ml-2 p-1 transition-colors"
            style={{ color: "var(--primary-text)" }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="lg:hidden absolute top-14 left-0 w-full border-b z-40"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="px-4 py-4 space-y-4">
            <a
              href="#"
              className="block text-base transition-colors"
              style={{ color: "var(--secondary-text)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--secondary-text)")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </a>
            <a
              href="#"
              className="block text-base transition-colors"
              style={{ color: "var(--secondary-text)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--secondary-text)")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <a
              href="#"
              className="block text-base transition-colors"
              style={{ color: "var(--secondary-text)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--secondary-text)")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#"
              className="block text-base transition-colors"
              style={{ color: "var(--secondary-text)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--secondary-text)")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Customers
            </a>
            <a
              href="#"
              className="block text-base transition-colors"
              style={{ color: "var(--secondary-text)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--secondary-text)")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Now
            </a>
            <a
              href="#"
              className="block text-base transition-colors"
              style={{ color: "var(--secondary-text)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--secondary-text)")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
