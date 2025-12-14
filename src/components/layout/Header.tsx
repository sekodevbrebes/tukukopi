import Button from "../common/Button";

export const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center min-w-0">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
              <i className="fas fa-coffee text-white"></i>
            </div>
            <div className="ml-3 min-w-0">
              <h1 className="font-bold text-lg text-amber-900 leading-tight truncate">
                Kopi Santai Cafe
              </h1>
              <p className="text-xs text-amber-700 truncate">
                Pesan makanan & minuman online
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search */}
            <div className="relative w-44 sm:w-56">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
              <input
                type="text"
                placeholder="Cari menu..."
                className="
                  w-full
                  pl-9 pr-4 py-2
                  rounded-2xl
                  border border-gray-300
                  text-sm text-gray-900
                  placeholder-gray-500
                  bg-white
                  focus:outline-none
                  focus:ring-2 focus:ring-orange-300
                  focus:border-transparent
                "
              />
            </div>

            {/* Cart */}
            <Button
              variant="outline"
              size="sm"
              className="
                relative
                w-11 h-11
                rounded-full
                flex items-center justify-center
                border border-gray-300
                hover:bg-gray-100
               cursor-pointer
                transition
              "
            >
              <i className="fas fa-shopping-cart text-orange-500"></i>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                5
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
