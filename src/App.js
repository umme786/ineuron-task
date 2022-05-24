import AppBanner from "./components/AppBanner";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Products from "./components/Products";
import HallOfFame from "./components/HallOfFame";
import Mentors from "./components/Mentors";
// count
import data from './components/CountData.json'
import Count from './components/Count';

import JobAssistance from "./components/JobAssistance";
import JobGuarantee from "./components/JobGuarantee";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermCondition from "./components/TermCondition";
import Accordion from './componentsFAQ/Accordion';
import About from './components/About';

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
   
    <About />

    <Accordion />
   </>
  );
}

export default App;