import AppBanner from "./components/AppBanner";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Products from "./components/Products";
import HallOfFame from "./components/HallOfFame";
import Mentors from "./components/Mentors";
// data 
import data from './data/data.json'
//component
import Count from './component/Count';
import JobAssistance from "./components/JobAssistance";
import JobGuarantee from "./components/JobGuarantee";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermCondition from "./components/TermCondition";
import Faq from "./components/Faq";



function App() {
  return (
   <>
   <AppBanner />
 <div className="bg-[#E6E4FC]"> 
 <div className="App sm:flex w-[80%] mx-auto justify-between">
      {data.counts.map(count => <Count key={count.id} data={count}/>)}
    </div>
 </div>
    <Companies />
    <Courses />
    <Products />
    <HallOfFame />
    <Mentors />
    <JobAssistance />
    <JobGuarantee />
    <PrivacyPolicy />
    <TermCondition />
    <Faq />

      {/* <Count /> */}
   </>
  );
}

export default App;