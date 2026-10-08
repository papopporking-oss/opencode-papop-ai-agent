export default function Page() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="crm-drawer-sm" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar — compact */}
        <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-10 min-h-0 py-1">
          <div className="navbar-start">
            <label htmlFor="crm-drawer-sm" className="btn btn-ghost btn-xs drawer-button lg:hidden">
              Menu
            </label>
            <span className="text-sm font-semibold ml-1">CRM</span>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div role="tablist" className="tabs tabs-box tabs-sm">
              <button role="tab" className="tab tab-active text-xs">Overview</button>
              <button role="tab" className="tab text-xs">Analytics</button>
              <button role="tab" className="tab text-xs">Reports</button>
              <button role="tab" className="tab text-xs">Settings</button>
            </div>
          </div>
          <div className="navbar-end gap-1">
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost btn-xs">
                <div className="avatar placeholder">
                  <div className="w-6 rounded-full bg-base-300">
                    <span className="text-xs">DN</span>
                  </div>
                </div>
                <span className="hidden sm:inline ml-1 text-xs">Denish</span>
              </summary>
              <ul className="dropdown-content menu bg-base-100 rounded-box w-44 p-1 shadow border border-base-300 z-20 text-sm">
                <li className="menu-title text-xs">Account</li>
                <li><button className="text-xs">View Profile</button></li>
                <li><button className="text-xs">Team</button></li>
                <li><button className="text-xs">Invites</button></li>
                <li className="menu-title text-xs">Platform</li>
                <li><button className="text-xs">Settings</button></li>
                <li><button className="text-xs">Billing</button></li>
                <li><button className="text-xs">Support</button></li>
                <div className="divider my-0"></div>
                <li><button className="text-xs">Sign Out</button></li>
              </ul>
            </details>
          </div>
        </div>

        {/* Page Content — compact padding */}
        <div className="flex-1 p-2 lg:p-3 space-y-2 overflow-auto">

          {/* Breadcrumbs — compact */}
          <div className="breadcrumbs text-xs py-0">
            <ul>
              <li><button className="link link-hover text-xs">Nexus</button></li>
              <li><button className="link link-hover text-xs">Dashboards</button></li>
              <li className="font-medium text-xs">Components</li>
            </ul>
          </div>

          {/* Component Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">

            {/* Accordion — show/hide content with radio inputs */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Accordion</h2>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="accordion-demo" defaultChecked />
                  <div className="collapse-title text-xs font-medium py-1.5">Item 1</div>
                  <div className="collapse-content text-xs pb-1.5">Content for item 1</div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="accordion-demo" />
                  <div className="collapse-title text-xs font-medium py-1.5">Item 2</div>
                  <div className="collapse-content text-xs pb-1.5">Content for item 2</div>
                </div>
              </div>
            </div>

            {/* Alert — notification banner */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Alert</h2>
                <div className="alert bg-base-200 border border-base-300 rounded-box py-1.5 px-2 text-xs">
                  <span>Info: Action completed</span>
                </div>
                <div className="alert bg-base-200 border border-base-300 rounded-box py-1.5 px-2 text-xs">
                  <span>Success: Data saved</span>
                </div>
              </div>
            </div>

            {/* Aura — light effect around component border */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Aura</h2>
                <div className="aura aura-glow aura-sm text-base-content rounded-box">
                  <div className="bg-base-200 p-2 rounded-box text-center text-xs">Glow Aura</div>
                </div>
              </div>
            </div>

            {/* Avatar — profile image placeholder */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Avatar</h2>
                <div className="flex flex-wrap gap-2">
                  <div className="avatar placeholder">
                    <div className="w-8 rounded-full bg-base-300"><span className="text-xs">JD</span></div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-8 rounded-full bg-base-300"><span className="text-xs">AS</span></div>
                  </div>
                  <div className="avatar-group -space-x-2">
                    <div className="avatar placeholder">
                      <div className="w-8 rounded-full bg-base-300"><span className="text-xs">A</span></div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-8 rounded-full bg-base-300"><span className="text-xs">B</span></div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-8 rounded-full bg-base-300"><span className="text-xs">C</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge — status label */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Badge</h2>
                <div className="flex flex-wrap gap-1">
                  <span className="badge badge-ghost badge-xs text-xs">Default</span>
                  <span className="badge badge-ghost badge-xs text-xs">Active</span>
                  <span className="badge badge-ghost badge-xs text-xs">Pending</span>
                  <span className="badge badge-ghost badge-xs text-xs">Done</span>
                </div>
              </div>
            </div>

            {/* Breadcrumbs — navigation breadcrumb */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Breadcrumbs</h2>
                <div className="breadcrumbs text-xs py-0">
                  <ul>
                    <li><button className="link link-hover text-xs">Home</button></li>
                    <li><button className="link link-hover text-xs">Products</button></li>
                    <li className="font-medium text-xs">Detail</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Button — various button styles */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Button</h2>
                <div className="flex flex-wrap gap-1">
                  <button className="btn btn-xs">Default</button>
                  <button className="btn btn-xs btn-ghost">Ghost</button>
                  <button className="btn btn-xs btn-outline">Outline</button>
                  <button className="btn btn-xs btn-soft">Soft</button>
                </div>
              </div>
            </div>

            {/* Calendar — date picker (static mock) */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Calendar</h2>
                <div className="border border-base-300 rounded-box bg-base-100 p-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium">October 2026</span>
                  </div>
                  <div className="grid grid-cols-7 gap-0.5 text-center text-xs">
                    <span className="text-base-content/50">Mo</span><span className="text-base-content/50">Tu</span><span className="text-base-content/50">We</span><span className="text-base-content/50">Th</span><span className="text-base-content/50">Fr</span><span className="text-base-content/50">Sa</span><span className="text-base-content/50">Su</span>
                    {Array.from({ length: 31 }, (_, i) => (
                      <span key={i} className={`py-0.5 ${i === 7 ? "bg-base-300 rounded font-bold" : ""}`}>{i + 1}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card — content box */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Card</h2>
                <div className="card card-sm bg-base-200 border border-base-300">
                  <div className="card-body p-2">
                    <h3 className="card-title text-xs">Card Title</h3>
                    <p className="text-xs text-base-content/60">Card description</p>
                    <div className="card-actions">
                      <button className="btn btn-ghost btn-xs text-xs">Action</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel — horizontal scroll slider */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Carousel</h2>
                <div className="carousel carousel-center w-full gap-1 rounded-box">
                  <div className="carousel-item">
                    <div className="bg-base-200 rounded-box flex items-center justify-center w-20 h-10 text-xs">Item 1</div>
                  </div>
                  <div className="carousel-item">
                    <div className="bg-base-200 rounded-box flex items-center justify-center w-20 h-10 text-xs">Item 2</div>
                  </div>
                  <div className="carousel-item">
                    <div className="bg-base-200 rounded-box flex items-center justify-center w-20 h-10 text-xs">Item 3</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat bubble — message bubble for chat */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Chat Bubble</h2>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-6 rounded-full bg-base-300"><span className="text-xs">A</span></div>
                  </div>
                  <div className="chat-header text-xs text-base-content/60">Alex</div>
                  <div className="chat-bubble chat-bubble-neutral text-xs py-1 px-2">Hello, team!</div>
                  <div className="chat-footer text-xs text-base-content/50">12:30</div>
                </div>
                <div className="chat chat-end">
                  <div className="chat-bubble chat-bubble-neutral text-xs py-1 px-2">Hi Alex!</div>
                  <div className="chat-footer text-xs text-base-content/50">12:31</div>
                </div>
              </div>
            </div>

            {/* Checkbox — selection control */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Checkbox</h2>
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-xs" defaultChecked readOnly />
                    <span className="text-xs">Option A (checked)</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-xs" readOnly />
                    <span className="text-xs">Option B</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Collapse — show/hide content via click */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Collapse</h2>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-200">
                  <div className="collapse-title text-xs font-medium py-1.5">Click to expand</div>
                  <div className="collapse-content text-xs pb-1.5">Hidden content revealed on click.</div>
                </div>
              </div>
            </div>

            {/* Countdown — number transition effect */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Countdown</h2>
                <div className="flex gap-1">
                  <span className="countdown text-sm">
                    <span style={{ "--value": 59 } as React.CSSProperties}>59</span>
                  </span>
                  <span className="text-sm">:</span>
                  <span className="countdown text-sm">
                    <span style={{ "--value": 59 } as React.CSSProperties}>59</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Diff — side-by-side comparison */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Diff</h2>
                <figure className="diff aspect-16/9 rounded-box overflow-hidden">
                  <div className="diff-item-1 bg-base-200 flex items-center justify-center text-xs">Original</div>
                  <div className="diff-item-2 bg-base-300 flex items-center justify-center text-xs">Updated</div>
                  <div className="diff-resizer"></div>
                </figure>
              </div>
            </div>

            {/* Divider — separator line */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Divider</h2>
                <div className="text-xs">Top content</div>
                <div className="divider my-0 text-xs">OR</div>
                <div className="text-xs">Bottom content</div>
              </div>
            </div>

            {/* Dock — bottom navigation bar */}
            {/* <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Dock</h2>
                <div className="dock dock-sm bg-base-200 rounded-box not-dock-fixed">
                  <button className="dock-active text-xs px-1">Home</button>
                  <button className="text-xs px-1">Search</button>
                  <button className="text-xs px-1">Settings</button>
                </div>
              </div>
            </div> */}

            {/* Dropdown — click-to-open menu */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Dropdown</h2>
                <details className="dropdown">
                  <summary className="btn btn-xs btn-ghost">Open Menu</summary>
                  <ul className="dropdown-content menu bg-base-100 rounded-box w-32 p-1 shadow border border-base-300 z-10 text-xs">
                    <li><button className="text-xs">Profile</button></li>
                    <li><button className="text-xs">Settings</button></li>
                    <li><button className="text-xs">Logout</button></li>
                  </ul>
                </details>
              </div>
            </div>

            {/* FAB / Speed Dial — floating action button */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">FAB</h2>
                <div className="fab not-fab-fixed" style={{ position: "relative", inset: "auto" }}>
                  <div tabIndex={0} role="button" className="btn btn-sm btn-circle">+</div>
                  <button className="btn btn-sm btn-circle">A</button>
                  <button className="btn btn-sm btn-circle">B</button>
                  <button className="btn btn-sm btn-circle">C</button>
                </div>
              </div>
            </div>

            {/* Fieldset — group of form elements */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Fieldset</h2>
                <fieldset className="fieldset bg-base-200 rounded-box p-2">
                  <legend className="fieldset-legend text-xs">Profile Info</legend>
                  <input className="input input-xs w-full" placeholder="Name" readOnly />
                  <input className="input input-xs w-full" placeholder="Email" readOnly />
                  <p className="text-xs text-base-content/60">Enter your details above.</p>
                </fieldset>
              </div>
            </div>

            {/* File Input — upload file */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">File Input</h2>
                <input type="file" className="file-input file-input-xs w-full" />
              </div>
            </div>

            {/* Filter — radio-based filter buttons */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Filter</h2>
                <div className="filter">
                  <input className="btn btn-xs filter-reset" type="radio" name="filter-demo" aria-label="x" />
                  <input className="btn btn-xs" type="radio" name="filter-demo" aria-label="All" defaultChecked />
                  <input className="btn btn-xs" type="radio" name="filter-demo" aria-label="Active" />
                  <input className="btn btn-xs" type="radio" name="filter-demo" aria-label="Done" />
                </div>
              </div>
            </div>

            {/* Footer — page footer */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Footer</h2>
                <footer className="footer bg-base-200 rounded-box p-2 text-xs">
                  <nav>
                    <h6 className="footer-title text-xs">Services</h6>
                    <button className="link link-hover text-xs">Branding</button>
                    <button className="link link-hover text-xs">Design</button>
                  </nav>
                  <nav>
                    <h6 className="footer-title text-xs">Company</h6>
                    <button className="link link-hover text-xs">About</button>
                    <button className="link link-hover text-xs">Contact</button>
                  </nav>
                </footer>
              </div>
            </div>

            {/* Hero — large banner section */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Hero</h2>
                <div className="hero bg-base-200 rounded-box py-2">
                  <div className="hero-content text-center p-2">
                    <div>
                      <h1 className="text-sm font-bold">Welcome</h1>
                      <p className="text-xs text-base-content/60">Short hero description</p>
                      <button className="btn btn-xs mt-1">Get Started</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover 3D Card — 3D tilt effect on hover */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Hover 3D Card</h2>
                <div className="hover-3d mx-1 my-2">
                  <figure className="max-w-full rounded-xl bg-base-200 p-3 text-center text-xs">
                    <div className="font-medium">3D Card</div>
                    <div className="text-base-content/50">Hover to tilt</div>
                  </figure>
                  <div></div><div></div><div></div><div></div>
                  <div></div><div></div><div></div><div></div>
                </div>
              </div>
            </div>

            {/* Hover Gallery — image gallery with hover reveal */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Hover Gallery</h2>
                <figure className="hover-gallery max-w-full rounded-box overflow-hidden">
                  <div className="bg-base-200 flex items-center justify-center h-14 text-xs font-medium">Image 1</div>
                  <div className="bg-base-300 flex items-center justify-center h-14 text-xs font-medium">Image 2</div>
                  <div className="bg-base-200 flex items-center justify-center h-14 text-xs font-medium">Image 3</div>
                  <div className="bg-base-300 flex items-center justify-center h-14 text-xs font-medium">Image 4</div>
                </figure>
              </div>
            </div>

            {/* Indicator — badge at corner of element */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Indicator</h2>
                <div className="flex gap-3">
                  <div className="indicator">
                    <span className="indicator-item badge badge-ghost badge-xs">5</span>
                    <div className="bg-base-200 rounded-box flex items-center justify-center w-10 h-10 text-xs">Inbox</div>
                  </div>
                  <div className="indicator">
                    <span className="indicator-item status status-xs"></span>
                    <div className="avatar placeholder">
                      <div className="w-8 rounded-full bg-base-300"><span className="text-xs">ME</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Input — simple text field */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Text Input</h2>
                <input type="text" placeholder="Type here..." className="input input-xs w-full" readOnly />
                <input type="email" placeholder="email@example.com" className="input input-xs w-full" readOnly />
              </div>
            </div>

            {/* Join — group buttons/inputs together */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Join</h2>
                <div className="join">
                  <button className="btn btn-xs join-item">1</button>
                  <button className="btn btn-xs join-item">2</button>
                  <button className="btn btn-xs join-item btn-active">3</button>
                </div>
                <div className="join">
                  <input className="input input-xs join-item w-16" placeholder="Search" readOnly />
                  <button className="btn btn-xs join-item">Go</button>
                </div>
              </div>
            </div>

            {/* Kbd — keyboard shortcut display */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Kbd</h2>
                <div className="flex flex-wrap gap-1 text-xs items-center">
                  <span>Press</span>
                  <kbd className="kbd kbd-xs">Ctrl</kbd>
                  <span>+</span>
                  <kbd className="kbd kbd-xs">S</kbd>
                  <span>to save</span>
                </div>
              </div>
            </div>

            {/* Label — input label (regular + floating) */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Label</h2>
                <label className="input input-xs flex items-center gap-1 mb-1">
                  <span className="label text-xs">Name</span>
                  <input type="text" className="grow" placeholder="Your name" readOnly />
                </label>
                <label className="floating-label text-xs">
                  <input type="text" placeholder="Email" className="input input-xs w-full" readOnly />
                  <span>Email</span>
                </label>
              </div>
            </div>

            {/* Link — underlined hyperlink */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Link</h2>
                <div className="flex flex-wrap gap-2">
                  <button className="link link-hover text-xs">Default Link</button>
                  <button className="link link-hover text-xs">Another Link</button>
                </div>
              </div>
            </div>

            {/* List — vertical row-based list */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">List</h2>
                <ul className="list bg-base-200 rounded-box">
                  <li className="list-row flex items-center gap-2 p-1.5 text-xs">
                    <div className="text-xs font-medium">Item A</div>
                    <div className="text-xs text-base-content/60 ml-auto">Subtitle</div>
                  </li>
                  <li className="list-row flex items-center gap-2 p-1.5 text-xs">
                    <div className="text-xs font-medium">Item B</div>
                    <div className="text-xs text-base-content/60 ml-auto">Subtitle</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Loading — animated loading indicator */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Loading</h2>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="loading loading-spinner loading-xs"></span>
                  <span className="loading loading-dots loading-xs"></span>
                  <span className="loading loading-ring loading-xs"></span>
                  <span className="loading loading-ball loading-xs"></span>
                </div>
              </div>
            </div>

            {/* Mask — crop element to shape */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Mask</h2>
                <div className="flex flex-wrap gap-2">
                  <div className="mask mask-squircle w-8 h-8 bg-base-300 flex items-center justify-center text-xs">A</div>
                  <div className="mask mask-hexagon w-8 h-8 bg-base-300 flex items-center justify-center text-xs">B</div>
                  <div className="mask mask-star w-8 h-8 bg-base-300 flex items-center justify-center text-xs">C</div>
                </div>
              </div>
            </div>

            {/* Megamenu — large horizontal navigation */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Megamenu</h2>
                <div className="megamenu megamenu-sm max-sm:megamenu-vertical p-1 border border-base-300 rounded-box" popover="auto" id="megamenu-demo">
                  <span className="megamenu-active"></span>
                  <button className="text-xs after:content-none" popoverTarget="mega-1">Products</button>
                  <div id="mega-1" popover="auto">
                    <ul className="menu p-1 text-xs">
                      <li><button>Software</button></li>
                      <li><button>Hardware</button></li>
                    </ul>
                  </div>
                  <button className="text-xs after:content-none" popoverTarget="mega-2">Services</button>
                  <div id="mega-2" popover="auto">
                    <ul className="menu p-1 text-xs">
                      <li><button>Consulting</button></li>
                      <li><button>Support</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu — vertical navigation list */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Menu</h2>
                <ul className="menu bg-base-200 rounded-box p-1 text-xs">
                  <li className="menu-title text-xs">Section</li>
                  <li><button>Dashboard</button></li>
                  <li><button className="menu-active">Analytics</button></li>
                  <li>
                    <details>
                      <summary>Settings</summary>
                      <ul>
                        <li><button>Profile</button></li>
                        <li><button>Billing</button></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>

            {/* Browser Mockup — browser window frame */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Browser Mockup</h2>
                <div className="mockup-browser border border-base-300">
                  <div className="mockup-browser-toolbar">
                    <div className="input input-xs">https://example.com</div>
                  </div>
                  <div className="bg-base-200 flex items-center justify-center p-2 text-xs">
                    Browser content area
                  </div>
                </div>
              </div>
            </div>

            {/* Code Mockup — code editor frame */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Code Mockup</h2>
                <div className="mockup-code text-xs">
                  <pre data-prefix="$"><code>npm install daisyui</code></pre>
                  <pre data-prefix=">" className="text-base-content/50"><code>installing packages...</code></pre>
                  <pre data-prefix="$"><code>npm run dev</code></pre>
                </div>
              </div>
            </div>

            {/* Phone Mockup — iPhone frame */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Phone Mockup</h2>
                <div className="mockup-phone">
                  <div className="mockup-phone-camera"></div>
                  <div className="mockup-phone-display flex items-center justify-center text-xs bg-base-200">
                    App Screen
                  </div>
                </div>
              </div>
            </div>

            {/* Window Mockup — OS window frame */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Window Mockup</h2>
                <div className="mockup-window border border-base-300">
                  <div className="bg-base-200 flex items-center justify-center p-2 text-xs">
                    Window content
                  </div>
                </div>
              </div>
            </div>

            {/* Modal — dialog overlay */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Modal</h2>
                <button className="btn btn-xs btn-ghost" popoverTarget="modal-demo">Open Modal</button>
                <div className="modal" popover="auto" id="modal-demo">
                  <div className="modal-box w-52 p-3">
                    <h3 className="text-sm font-bold">Confirmation</h3>
                    <p className="text-xs py-1">Are you sure?</p>
                    <div className="modal-action">
                      <button className="btn btn-xs" popoverTarget="modal-demo" popoverTargetAction="hide">Cancel</button>
                      <button className="btn btn-xs btn-ghost">Confirm</button>
                    </div>
                  </div>
                  <div className="modal-backdrop">
                    <button popoverTarget="modal-demo" popoverTargetAction="hide">close</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navbar — top navigation bar */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Navbar</h2>
                <div className="navbar bg-base-200 rounded-box min-h-0 py-1 px-2">
                  <div className="navbar-start">
                    <span className="text-xs font-bold">Logo</span>
                  </div>
                  <div className="navbar-center">
                    <button className="btn btn-ghost btn-xs text-xs">Home</button>
                    <button className="btn btn-ghost btn-xs text-xs">About</button>
                  </div>
                  <div className="navbar-end">
                    <button className="btn btn-xs text-xs">Login</button>
                  </div>
                </div>
              </div>
            </div>

            {/* OTP — one-time password input */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">OTP</h2>
                <label className="otp otp-xs otp-joined">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span></span>
                  <input type="text" autoComplete="one-time-code" inputMode="numeric" maxLength={4} pattern="[0-9]{4}" readOnly />
                </label>
              </div>
            </div>

            {/* Pagination — page navigation */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Pagination</h2>
                <div className="join">
                  <button className="join-item btn btn-xs">&laquo;</button>
                  <button className="join-item btn btn-xs btn-active">1</button>
                  <button className="join-item btn btn-xs">2</button>
                  <button className="join-item btn btn-xs">3</button>
                  <button className="join-item btn btn-xs">&raquo;</button>
                </div>
              </div>
            </div>

            {/* Progress — linear progress bar */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Progress</h2>
                <progress className="progress w-full h-1.5" value="65" max="100"></progress>
                <div className="text-xs text-base-content/60 mt-0.5">65% complete</div>
              </div>
            </div>

            {/* Radial Progress — circular progress */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Radial Progress</h2>
                <div className="flex items-center gap-3">
                  <div className="radial-progress text-xs" style={{ "--value": 75, "--size": "3rem" } as React.CSSProperties} aria-valuenow={75} role="progressbar">75%</div>
                  <div>
                    <div className="text-xs font-medium">75%</div>
                    <div className="text-xs text-base-content/60">Completed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Radio — single-select option */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Radio</h2>
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="radio-demo" className="radio radio-xs" defaultChecked readOnly />
                    <span className="text-xs">Option 1</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="radio-demo" className="radio radio-xs" readOnly />
                    <span className="text-xs">Option 2</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Range Slider — value slider */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Range Slider</h2>
                <input type="range" min="0" max="100" defaultValue="40" className="range range-xs" />
                <div className="flex justify-between text-xs text-base-content/60">
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            {/* Rating — star rating display */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Rating</h2>
                <div className="rating rating-xs">
                  <div className="mask mask-star bg-base-content/30" aria-label="1 star"></div>
                  <div className="mask mask-star bg-base-content/30" aria-label="2 star"></div>
                  <div className="mask mask-star bg-base-content/30" aria-label="3 star" aria-current="true"></div>
                  <div className="mask mask-star bg-base-content/20" aria-label="4 star"></div>
                  <div className="mask mask-star bg-base-content/20" aria-label="5 star"></div>
                </div>
                <span className="text-xs text-base-content/60">3.0 / 5</span>
              </div>
            </div>

            {/* Select — dropdown selection */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Select</h2>
                <select className="select select-xs w-full" defaultValue="">
                  <option value="" disabled>Choose option</option>
                  <option>Option A</option>
                  <option>Option B</option>
                  <option>Option C</option>
                </select>
              </div>
            </div>

            {/* Skeleton — loading placeholder */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Skeleton</h2>
                <div className="space-y-1">
                  <div className="skeleton h-3 w-full"></div>
                  <div className="skeleton h-3 w-3/4"></div>
                  <div className="skeleton h-3 w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Stack — layered elements */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Stack</h2>
                <div className="stack w-16 h-16 mx-auto">
                  <div className="bg-base-200 rounded-box flex items-center justify-center text-xs border border-base-300">One</div>
                  <div className="bg-base-300 rounded-box flex items-center justify-center text-xs border border-base-300">Two</div>
                  <div className="bg-base-200 rounded-box flex items-center justify-center text-xs border border-base-300">Three</div>
                </div>
              </div>
            </div>

            {/* Stat — number/metric display */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Stat</h2>
                <div className="stat p-2 bg-base-200 rounded-box">
                  <div className="stat-title text-xs">Total Users</div>
                  <div className="stat-value text-lg">12,847</div>
                  <div className="stat-desc text-xs text-base-content/60">+21% from last month</div>
                </div>
              </div>
            </div>

            {/* Status — small state indicator dot */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Status</h2>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="status status-xs"></span>
                  <span className="text-xs">Online</span>
                  <span className="status status-xs status-neutral"></span>
                  <span className="text-xs">Away</span>
                  <span className="status status-xs status-neutral"></span>
                  <span className="text-xs">Offline</span>
                </div>
              </div>
            </div>

            {/* Steps — process step indicator */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Steps</h2>
                <ul className="steps steps-horizontal text-xs w-full">
                  <li data-content="1" className="step step-neutral text-xs">Register</li>
                  <li data-content="2" className="step step-neutral text-xs">Verify</li>
                  <li data-content="3" className="step text-xs">Complete</li>
                </ul>
              </div>
            </div>

            {/* Swap — toggle between two elements */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Swap</h2>
                <label className="swap swap-rotate text-xs">
                  <input type="checkbox" />
                  <div className="swap-on bg-base-200 px-1.5 py-0.5 rounded text-xs">ON</div>
                  <div className="swap-off bg-base-200 px-1.5 py-0.5 rounded text-xs">OFF</div>
                </label>
              </div>
            </div>

            {/* Tabs — tabbed navigation */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Tabs</h2>
                <div role="tablist" className="tabs tabs-box tabs-sm">
                  <button role="tab" className="tab tab-active text-xs">Tab 1</button>
                  <button role="tab" className="tab text-xs">Tab 2</button>
                  <button role="tab" className="tab text-xs">Tab 3</button>
                </div>
              </div>
            </div>

            {/* Table — data table */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Table</h2>
                <div className="overflow-x-auto">
                  <table className="table table-xs table-zebra">
                    <thead>
                      <tr>
                        <th className="text-xs">Name</th>
                        <th className="text-xs">Role</th>
                        <th className="text-xs">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr>
                        <td>Alice</td>
                        <td>Dev</td>
                        <td><span className="badge badge-ghost badge-xs">Active</span></td>
                      </tr>
                      <tr>
                        <td>Bob</td>
                        <td>Design</td>
                        <td><span className="badge badge-ghost badge-xs">Active</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Text Rotate — auto-rotating text */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Text Rotate</h2>
                <span className="text-rotate text-xs">
                  <span>
                    <span>Design</span>
                    <span>Develop</span>
                    <span>Deploy</span>
                    <span>Scale</span>
                  </span>
                </span>
              </div>
            </div>

            {/* Textarea — multi-line text input */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Textarea</h2>
                <textarea className="textarea textarea-xs w-full" placeholder="Enter your message..." readOnly></textarea>
              </div>
            </div>

            {/* Theme Controller — theme toggle */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Theme Controller</h2>
                <div className="flex flex-wrap gap-1">
                  <input type="radio" name="theme-demo" className="theme-controller btn btn-xs" aria-label="Light" value="light" defaultChecked />
                  <input type="radio" name="theme-demo" className="theme-controller btn btn-xs" aria-label="Dark" value="dark" />
                  <input type="radio" name="theme-demo" className="theme-controller btn btn-xs" aria-label="Dim" value="dim" />
                </div>
                <span className="text-xs text-base-content/60">Select a theme</span>
              </div>
            </div>

            {/* Timeline — chronological event list */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Timeline</h2>
                <ul className="timeline timeline-compact text-xs">
                  <li>
                    <div className="timeline-start text-xs">Oct 2026</div>
                    <div className="timeline-middle"><span className="status status-xs"></span></div>
                    <div className="timeline-end timeline-box p-1.5 text-xs">v2.0 Released</div>
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle"><span className="status status-xs"></span></div>
                    <div className="timeline-end timeline-box p-1.5 text-xs">v1.0 Released</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Toast — corner notification stack */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Toast</h2>
                <div className="toast not-toast-fixed" style={{ position: "relative", inset: "auto" }}>
                  <div className="alert bg-base-200 border border-base-300 rounded-box py-1 px-2 text-xs">Notification message</div>
                </div>
              </div>
            </div>

            {/* Toggle — switch-style checkbox */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Toggle</h2>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="toggle toggle-xs" defaultChecked readOnly />
                  <span className="text-xs">Enabled</span>
                </div>
              </div>
            </div>

            {/* Tooltip — hover tooltip */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Tooltip</h2>
                <div className="flex gap-2">
                  <div className="tooltip tooltip-bottom text-xs" data-tip="Information tooltip">
                    <button className="btn btn-xs">Hover me</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Validator — form validation state */}
            <div className="card card-sm bg-base-100 border border-base-300">
              <div className="card-body p-2">
                <h2 className="card-title text-xs">Validator</h2>
                <input type="email" className="input input-xs validator w-full" defaultValue="valid@email.com" readOnly />
                <p className="validator-hint text-xs text-base-content/60">Valid email format</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer — compact */}
        <footer className="footer footer-center py-1.5 border-t border-base-300 bg-base-100 text-xs text-base-content/60">
          <aside>
            <p>Built with care by Denish</p>
          </aside>
        </footer>
      </div>

      {/* Sidebar — compact narrow */}
      <div className="drawer-side z-20">
        <label htmlFor="crm-drawer-sm" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-48 p-2 gap-0.5 text-sm">
          {/* Logo */}
          <li className="mb-1">
            <button className="text-sm font-bold hover:bg-transparent cursor-default p-2">Nexus</button>
          </li>

          {/* Dashboard Section */}
          <li className="menu-title text-xs">Dashboard</li>
          <li><button className="text-xs">Ecommerce</button></li>
          <li><button className="menu-active text-xs">CRM</button></li>
          <li><button className="text-xs">Gen AI</button></li>

          {/* Agentic Hub */}
          <li className="menu-title text-xs mt-1">Agentic Hub</li>
          <li><button className="text-xs">Storage</button></li>

          {/* Apps Section */}
          <li className="menu-title text-xs mt-1">Apps</li>
          <li>
            <details>
              <summary className="text-xs">Ecommerce</summary>
              <ul>
                <li><button className="text-xs">Orders</button></li>
                <li><button className="text-xs">Products</button></li>
                <li><button className="text-xs">Customers</button></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-xs">Gen AI</summary>
              <ul>
                <li><button className="text-xs">Home</button></li>
                <li><button className="text-xs">Content</button></li>
                <li><button className="text-xs">Images</button></li>
                <li><button className="text-xs">Library</button></li>
              </ul>
            </details>
          </li>
          <li><button className="text-xs">File Manager</button></li>
          <li><button className="text-xs">Chat</button></li>

          {/* Extras Section */}
          <li className="menu-title text-xs mt-1">Extras</li>
          <li>
            <details>
              <summary className="text-xs">Auth</summary>
              <ul>
                <li><button className="text-xs">Login</button></li>
                <li><button className="text-xs">Register</button></li>
                <li><button className="text-xs">Forgot Password</button></li>
                <li><button className="text-xs">Reset Password</button></li>
              </ul>
            </details>
          </li>
          <li><button className="text-xs">Settings</button></li>
          <li><button className="text-xs">Get Help</button></li>
        </ul>
      </div>
    </div>
  );
}