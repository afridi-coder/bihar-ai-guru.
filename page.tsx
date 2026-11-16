 "use client";
import { useMemo, useState } from "react";
import { BookOpen, BrainCircuit, GraduationCap, Languages, FileUp, Mic, MessageCircle, ChartNoAxesColumnIncreasing, ShieldCheck, Menu, ArrowRight, CheckCircle2, Play, Sparkles, UploadCloud, FileText, ChevronDown } from "lucide-react";

const universities = ["Purnea University","Patna University","Magadh University","Veer Kunwar Singh University","B.N. Mandal University","T.M. Bhagalpur University","L.N. Mithila University","Jai Prakash University","B.R.A. Bihar University","Munger University","Patliputra University","Aryabhatta Knowledge University"];
const courses = ["BA","B.Sc","B.Com","BBA","BCA","Other UG Course"];
const subjects: Record<string,string[]> = {
  "BA":["History","Political Science","Geography","Sociology","Psychology","Economics","Hindi","English"],
  "B.Sc":["Zoology","Botany","Physics","Chemistry","Mathematics","Biotechnology","Computer Science"],
  "B.Com":["Financial Accounting","Business Economics","Business Law","Corporate Accounting","Cost Accounting","Business Management"],
  "BBA":["Management","Marketing","Business Communication"], "BCA":["Programming","Mathematics","Database Management"], "Other UG Course":["Add your subject"]
};
export default function Home() {
  const [lang,setLang] = useState("Hindi");
  const [university,setUniversity] = useState("Purnea University");
  const [course,setCourse] = useState("B.Sc");
  const [subject,setSubject] = useState("Zoology");
  const [semester,setSemester] = useState("Semester 1");
  const [file,setFile] = useState<File|null>(null);
  const [notice,setNotice] = useState("");
  const [mobileOpen,setMobileOpen] = useState(false);
  const [tab,setTab] = useState("overview");
  const [question,setQuestion] = useState("");
  const subjectOptions = useMemo(()=>subjects[course] || [],[course]);
  function chooseCourse(value:string){setCourse(value);setSubject((subjects[value]||[])[0]||"");}
  function upload(){ if(!file){setNotice("Please select your syllabus file first.");return;} setNotice(`Selected: ${file.name}. Connect Supabase and the syllabus analysis API to process and save it.`); }
  function ask(){ if(!question.trim()) return; setNotice("AI tutor API is not configured yet. Add OPENAI_API_KEY and complete the server integration to enable live answers."); }
  return <main>
    <header className="topbar"><a className="brand" href="#"><span className="brandIcon"><GraduationCap size={23}/></span><span>BIHAR <b>AI GURU</b><small>YOUR PERSONAL AI TEACHER</small></span></a>
      <nav className={mobileOpen?"nav show":"nav"}><a href="#features">Features</a><a href="#how">How it works</a><a href="#classroom">AI Classroom</a><a href="#universities">Universities</a></nav>
      <div className="topActions"><button className="language" onClick={()=>setLang(lang==="Hindi"?"English":lang==="English"?"Hinglish":"Hindi")}><Languages size={16}/>{lang}<ChevronDown size={14}/></button><a className="login" href="#dashboard">Student Login</a><button className="menuBtn" onClick={()=>setMobileOpen(!mobileOpen)}><Menu/></button></div>
    </header>
    <section className="hero">
      <div className="heroText"><div className="eyebrow"><Sparkles size={15}/> BUILT FOR BIHAR UNIVERSITY STUDENTS</div><h1>Your Syllabus.<br/><em>Your Language.</em><br/>Your AI Teacher.</h1><p>Upload your university syllabus and learn every topic with your personal AI teacher — in Hindi, English or Hinglish.</p>
        <div className="heroButtons"><a className="primary" href="#dashboard">Start Learning <ArrowRight size={17}/></a><a className="secondary" href="#how"><Play size={16}/> Explore Platform</a></div>
        <div className="trust"><span><CheckCircle2/> Syllabus-first learning</span><span><CheckCircle2/> 3 teaching languages</span></div>
      </div>
      <div className="heroVisual"><div className="glow"></div><div className="lessonCard"><div className="lessonHead"><span className="liveDot"></span> AI LIVE CLASSROOM <span className="lessonTime">● READY</span></div><div className="teacher"><div className="avatar"><BrainCircuit size={35}/></div><div><b>Your AI Teacher</b><small>Ready to teach your syllabus</small></div><span className="sound"><i></i><i></i><i></i><i></i><i></i></span></div><div className="board"><div className="boardTag">TODAY'S LESSON · B.SC ZOOLOGY</div><h3>Cell: The Basic Unit of Life</h3><div className="cellSketch"><div className="cellCircle"><div className="nucleus"></div><span className="label l1">Cell membrane</span><span className="label l2">Nucleus</span></div></div><div className="boardFooter"><span>Unit 1 · Topic 01</span><span>Lesson preview</span></div></div><div className="lessonBottom"><span><Mic size={15}/> Voice interaction</span><span><MessageCircle size={15}/> Ask doubts</span><span><FileText size={15}/> Smart notes</span></div></div><div className="floatNote"><FileUp size={18}/><span><b>Upload your syllabus</b><small>AI organizes your units</small></span><CheckCircle2 className="check"/></div></div>
    </section>
    <section className="stats"><div><b>BA</b><span>Arts Courses</span></div><div><b>B.Sc</b><span>Science Courses</span></div><div><b>B.Com</b><span>Commerce Courses</span></div><div><b>3</b><span>Teaching Languages</span></div></section>
    <section className="section" id="features"><div className="sectionIntro"><div className="eyebrow">ONE PLATFORM · COMPLETE LEARNING</div><h2>Everything you need to<br/><em>master your syllabus.</em></h2><p>Designed around your university curriculum, not generic lessons.</p></div>
      <div className="featureGrid">
        <Feature icon={<FileUp/>} title="Your Syllabus, Your Rules" desc="Upload PDF, Word documents or syllabus photos. The platform is designed to organize units, chapters and topics for your course."/>
        <Feature icon={<BrainCircuit/>} title="Personal AI Teacher" desc="Learn topic by topic, ask follow-up questions and resume from where you stopped."/>
        <Feature icon={<Languages/>} title="Hindi · English · Hinglish" desc="Switch your teaching language whenever you want. Explanations, notes and practice follow your choice."/>
        <Feature icon={<BookOpen/>} title="Digital Classroom" desc="A dedicated learning space for explanations, diagrams, equations and visual notes."/>
        <Feature icon={<FileText/>} title="Smart Notes & Tests" desc="Generate revision notes, practice MCQs and topic-wise tests from your syllabus."/>
        <Feature icon={<ChartNoAxesColumnIncreasing/>} title="Track Your Progress" desc="See completed topics, pending units and your overall syllabus coverage."/>
      </div>
    </section>
    <section className="howSection" id="how"><div className="sectionIntro"><div className="eyebrow">SIMPLE 3-STEP LEARNING</div><h2>From syllabus to <em>success.</em></h2></div><div className="steps"><Step n="01" title="Upload your syllabus" desc="Share your university syllabus as a PDF, document or clear photo."/><Step n="02" title="Review your course plan" desc="Check the extracted subjects, units and topics before confirming."/><Step n="03" title="Learn with your AI teacher" desc="Choose Hindi, English or Hinglish and start your personalized lessons."/></div></section>
    <section className="workspace" id="dashboard"><div className="workspaceHead"><div><div className="eyebrow">STUDENT WORKSPACE PREVIEW</div><h2>Set up your <em>learning space.</em></h2><p>Choose your academic details and upload your own syllabus.</p></div><span className="previewBadge">EARLY ACCESS PREVIEW</span></div>
      <div className="workspaceGrid"><div className="setupCard"><h3><GraduationCap/> Academic profile</h3><label>University<select value={university} onChange={e=>setUniversity(e.target.value)}>{universities.map(u=><option key={u}>{u}</option>)}</select></label><div className="twoCols"><label>Course<select value={course} onChange={e=>chooseCourse(e.target.value)}>{courses.map(c=><option key={c}>{c}</option>)}</select></label><label>Semester<select value={semester} onChange={e=>setSemester(e.target.value)}>{Array.from({length:8},(_,i)=><option key={i}>Semester {i+1}</option>)}</select></label></div><label>Subject<select value={subject} onChange={e=>setSubject(e.target.value)}>{subjectOptions.map(s=><option key={s}>{s}</option>)}</select></label><label>Teaching language<div className="langChoices">{["Hindi","English","Hinglish"].map(l=><button key={l} className={lang===l?"chosen":""} onClick={()=>setLang(l)}>{l}</button>)}</div></label></div>
      <div className="uploadCard"><div className="uploadIcon"><UploadCloud size={27}/></div><h3>Upload your university syllabus</h3><p>PDF, DOC, DOCX, JPG or PNG · Max 20 MB</p><label className="dropzone"><input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt" onChange={e=>setFile(e.target.files?.[0]||null)}/><FileUp size={23}/><b>{file?file.name:"Choose a syllabus file"}</b><small>{file?"File selected":"or drag and drop here"}</small></label><button className="primary full" onClick={upload}>Upload syllabus <ArrowRight size={16}/></button><small className="privacy"><ShieldCheck size={13}/> Your syllabus should remain private to your account.</small></div></div>
      {notice&&<div className="notice">{notice}</div>}
    </section>
    <section className="classroomSection" id="classroom"><div className="classroomCopy"><div className="eyebrow">YOUR PERSONAL STUDY PARTNER</div><h2>Ask anything.<br/><em>Understand everything.</em></h2><p>The AI classroom is designed for voice-based doubt solving, clear explanations and guided learning from your confirmed syllabus.</p><div className="languagePills"><span>हिंदी</span><span>English</span><span>Hinglish</span></div></div><div className="chatDemo"><div className="chatTop"><span className="online"></span> BIHAR AI GURU · TUTOR <span className="demoLabel">UI PREVIEW</span></div><div className="chatBody"><div className="botBubble">Namaste! आपका syllabus मिलने के बाद मैं उसी के अनुसार topics पढ़ाऊँगा। आज क्या सीखना चाहेंगे?</div><div className="userBubble">Explain cell structure in Hinglish.</div><div className="botBubble">Sure! Cell एक basic structural and functional unit है. चलिए इसके main parts को step-by-step समझते हैं…</div></div><div className="chatInput"><input value={question} onChange={e=>setQuestion(e.target.value)} onKeyDown={e=>e.key==="Enter"&&ask()} placeholder="Ask your AI teacher…"/><button onClick={ask}><ArrowRight size={17}/></button></div></div></section>
    <section className="universities" id="universities"><div className="sectionIntro"><div className="eyebrow">MADE FOR BIHAR</div><h2>One learning home for<br/><em>Bihar universities.</em></h2><p>University options are configurable and must be verified against current official records.</p></div><div className="uniGrid">{universities.map((u,i)=><div className="uniItem" key={u}><span>{String(i+1).padStart(2,"0")}</span>{u}<ArrowRight size={15}/></div>)}</div></section>
    <footer><a className="brand" href="#"><span className="brandIcon"><GraduationCap size={22}/></span><span>BIHAR <b>AI GURU</b><small>YOUR PERSONAL AI TEACHER</small></span></a><p>Learn your syllabus. Build your future.</p><small>© 2026 BIHAR AI GURU · Early development preview</small></footer>
  </main>;
}
function Feature({icon,title,desc}:{icon:React.ReactNode,title:string,desc:string}){return <article className="feature"><div className="featureIcon">{icon}</div><h3>{title}</h3><p>{desc}</p></article>}
function Step({n,title,desc}:{n:string,title:string,desc:string}){return <article className="step"><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>}