
export default function Navbar() {
  return (
    <>
      <nav className="navbar shadow sticky top-0 z-50">
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full">
              <a className="link text-base-content link-neutral text-xl font-bold no-underline" href="#">Edusia</a>
              <div className="md:hidden">
                <button type="button" className="collapse-toggle btn btn-outline border-none btn-secondary btn-sm btn-square" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-example" data-overlay="#overlay-example">
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                  <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                </button>
              </div>
            </div>
          </div>
          <div id="default-navbar-collapse" className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full pt-3 sm:pt-0 flex flex-col sm:flex-row">
            <div className="sm:ms-3 me-auto w-full max-w-sm">
              <input type="text" className="input rounded-full" aria-label="input" placeholder="What do you want to learn?" />
            </div>
            <ul className="menu md:menu-horizontal gap-2 p-0 pe-2 max-md:mt-2">
              <li><a href="#" className="rounded-full p-0">Home</a></li>
              <li><a href="#" className="rounded-full p-0">Learn</a></li>
              <li><a href="#" className="rounded-full p-0">Business</a></li>
            </ul>
            <div className="flex gap-2">
              <a href="/login" className="btn btn-text rounded-full">Sign In</a>
              <div className="btn btn-error shadow-none rounded-full">Register for free</div>
            </div>
          </div>
        </div>
      </nav>

      <div id="overlay-example" className="overlay overlay-open:translate-x-0 drawer drawer-start hidden" role="dialog" tabIndex={-1}>
        <div className="drawer-header">
          <h3 className="drawer-title">Drawer Title</h3>
          <button type="button" className="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-example">
            <span className="icon-[tabler--x] size-5"></span>
          </button>
        </div>
        <div className="drawer-body">
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </p>
        </div>
        <div className="drawer-footer">
          <button type="button" className="btn btn-soft btn-secondary" data-overlay="#overlay-example">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </>
  )
}