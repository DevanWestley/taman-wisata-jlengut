import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Ico from "./Icon";
import { attractions, zooAnimals, photoSpots } from "../data/mockData";
import { openWA } from "../utils/whatsapp";
import logoImg from "../assets/logo.jpg"; 

export default function Navbar() {
  const [mob, setMob] = useState(false);
  const [exDrop, setExDrop] = useState(false);
  const [infoDrop, setInfoDrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isHome = location.pathname === "/";
  const dark = scrolled || !isHome;
  const txtCls = dark ? "text-gray-700 hover:text-green-700" : "text-white hover:text-white/80";

  const go = (path) => {
    navigate(path);
    setMob(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${dark ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => go("/")} className="flex items-center gap-2 group">
            
            {}
            <img 
              src={logoImg} 
              alt="Logo Taman Wisata Jlengut" 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover shadow-md transition-transform group-hover:scale-105" 
            />

            <div>
              <div className={`font-extrabold text-base lg:text-lg leading-tight ${dark ? "text-green-800" : "text-white"}`}>Taman Wisata</div>
              <div className={`font-extrabold text-base lg:text-lg leading-tight -mt-1 ${dark ? "text-sky-400" : "text-white"}`}>Jlengut</div>
            </div>
          </button>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            <button onClick={() => go("/")} className={`px-4 py-2 rounded-full font-medium text-sm ${txtCls}`}>Home</button>

            <div className="relative group" onMouseEnter={() => setExDrop(true)} onMouseLeave={() => setExDrop(false)}>
              <button className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-1 ${txtCls}`}>
                Explore <Ico name="ChevronDown" size={14} className={`transition-transform ${exDrop ? "rotate-180" : ""}`} />
              </button>
              {exDrop && (
                <div className="absolute top-full left-0 pt-2 w-60 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    {attractions.map((a) => (
                      <div key={a.id} className={`relative ${a.hasAnimals() || a.hasPhotoSpots() ? "group/sub" : ""}`}>
                        <button onClick={() => go(a.path)} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 flex items-center justify-between gap-2">
                          <span>{a.name}</span>
                          {(a.hasAnimals() || a.hasPhotoSpots()) && <Ico name="ChevronRight" size={14} className="text-gray-300" />}
                        </button>
                        {a.hasAnimals() && (
                          <div className="absolute top-0 left-full pl-1 hidden group-hover/sub:block z-50">
                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-52 max-h-80 overflow-y-auto">
                              {zooAnimals.map((an) => (
                                <button key={an.id} onClick={() => go(an.path)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 flex items-center gap-2">
                                  <span>{an.icon}</span>{an.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                        {a.hasPhotoSpots() && (
                          <div className="absolute top-0 left-full pl-1 hidden group-hover/sub:block z-50">
                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-52">
                              {photoSpots.map((sp) => (
                                <button key={sp.id} onClick={() => go(sp.path)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 flex items-center gap-2">
                                  <Ico name="Camera" size={14} className="text-green-600" /> {sp.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => go("/tickets")} className={`px-4 py-2 rounded-full font-medium text-sm ${txtCls}`}>Tickets</button>

            <div className="relative" onMouseEnter={() => setInfoDrop(true)} onMouseLeave={() => setInfoDrop(false)}>
              <button className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-1 ${txtCls}`}>
                Information <Ico name="ChevronDown" size={14} className={`transition-transform ${infoDrop ? "rotate-180" : ""}`} />
              </button>
              {infoDrop && (
                <div className="absolute top-full left-0 pt-2 w-52 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    {["FAQ", "Jam Operasional", "Panduan Pengunjung"].map((it) => (
                      <button key={it} onClick={() => go("/info")} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">{it}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => go("/about")} className={`px-4 py-2 rounded-full font-medium text-sm ${txtCls}`}>About Us</button>
            <button onClick={() => openWA()} className="ml-3 px-5 py-2.5 rounded-full font-semibold text-sm text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg,#FFC107,#FFB300)" }}>Beli Tiket</button>
          </div>

          <button onClick={() => setMob(!mob)} className={`lg:hidden p-2 ${dark ? "text-green-800" : "text-white"}`}>
            <Ico name={mob ? "X" : "Menu"} size={26} />
          </button>
        </div>
      </div>

      {mob && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            <button onClick={() => go("/")} className="w-full text-left px-3 py-3 rounded-lg font-medium text-gray-700 hover:bg-green-50">Home</button>
            <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase">Explore</div>
            {attractions.map((a) => (
              <div key={a.id}>
                <button onClick={() => go(a.path)} className="w-full text-left px-6 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 flex items-center gap-2">
                  <Ico name={a.iconName} size={16} className="text-green-700" /> {a.name}
                </button>
                {a.hasAnimals() && (
                  <div className="ml-6 pl-3 border-l-2 border-green-100">
                    {zooAnimals.map((an) => (
                      <button key={an.id} onClick={() => go(an.path)} className="w-full text-left px-3 py-2 rounded-lg text-gray-600 text-sm hover:bg-green-50 flex items-center gap-2">
                        <span>{an.icon}</span>{an.name}
                      </button>
                    ))}
                  </div>
                )}
                {a.hasPhotoSpots() && (
                  <div className="ml-6 pl-3 border-l-2 border-yellow-100">
                    {photoSpots.map((sp) => (
                      <button key={sp.id} onClick={() => go(sp.path)} className="w-full text-left px-3 py-2 rounded-lg text-gray-600 text-sm hover:bg-yellow-50 flex items-center gap-2">
                        <Ico name="Camera" size={13} className="text-yellow-600" /> {sp.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button onClick={() => go("/tickets")} className="w-full text-left px-3 py-3 rounded-lg font-medium text-gray-700 hover:bg-green-50">Tickets</button>
            <button onClick={() => go("/info")} className="w-full text-left px-3 py-3 rounded-lg font-medium text-gray-700 hover:bg-green-50">Information Center</button>
            <button onClick={() => go("/about")} className="w-full text-left px-3 py-3 rounded-lg font-medium text-gray-700 hover:bg-green-50">About Us</button>
            <button onClick={() => { openWA(); setMob(false); }} className="w-full mt-2 px-4 py-3 rounded-full font-semibold text-white text-center" style={{ background: "linear-gradient(135deg,#FFC107,#FFB300)" }}>Beli Tiket</button>
          </div>
        </div>
      )}
    </nav>
  );
}