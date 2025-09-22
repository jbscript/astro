import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import PersonalHoroscopeReadingPage from "./pages/services/personal-horoscope-reading";
import FamilyHoroscopeReadingPage from "./pages/services/family-horoscope-reading";
import BookAnOnlineCounselingSession from "./pages/services/book-an-online-counseling-session";
import AshamanjakaKutumbaReadingPage from "./pages/services/ashamanjaka-kutumba-prashna";
import AshamanjakaTempleReadingPage from "./pages/services/ashamanjaka-temple-prashna";
import BuyRareUniqueHandwrittenYantras from "./pages/services/buy-rare-unique-handwritten-yantras";
import FindBackYourLostMaterialsValuables from "./pages/services/find-back-your-lost-materials-valuables";
import FindHoroscopeMatchForMarriage from "./pages/services/find-horoscope-match-for-marriage";
import FindYourKuladeivatha from "./pages/services/find-your-kuladeivatha";
import GroupHoroscopeReadingPage from "./pages/services/group-horoscope-reading";
import PerformUniqueHomasHomams from "./pages/services/perform-unique-homas-homams";
import { Work } from "./pages/works/works";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Work />} />
      <Route
        path="/ashamanjaka-kutumba-prashna"
        element={<AshamanjakaKutumbaReadingPage />}
      />
      <Route
        path="/ashamanjaka-temple-prashna"
        element={<AshamanjakaTempleReadingPage />}
      />
      <Route
        path="/book-an-online-counseling-session"
        element={<BookAnOnlineCounselingSession />}
      />
      <Route
        path="/buy-rare-unique-handwritten-yantras"
        element={<BuyRareUniqueHandwrittenYantras />}
      />
      <Route
        path="/family-horoscope-reading"
        element={<FamilyHoroscopeReadingPage />}
      />
      <Route
        path="/find-back-your-lost-materials-valuables"
        element={<FindBackYourLostMaterialsValuables />}
      />
      <Route
        path="/find-horoscope-match-for-marriage"
        element={<FindHoroscopeMatchForMarriage />}
      />
      <Route
        path="/find-your-kuladeivatha"
        element={<FindYourKuladeivatha />}
      />
      <Route
        path="/group-horoscope-reading"
        element={<GroupHoroscopeReadingPage />}
      />
      <Route
        path="/perform-unique-homas-homams"
        element={<PerformUniqueHomasHomams />}
      />
      <Route
        path="/personal-horoscope-reading"
        element={<PersonalHoroscopeReadingPage />}
      />
    </Routes>
  );
}
