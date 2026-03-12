import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Trophy, 
  Timer,
  BookOpen,
  ClipboardCheck,
  Target
} from 'lucide-react';
import { MachinerySystem } from '../../data/machinery';

interface AssessmentsProps {
  machinery: MachinerySystem[];
}
//
const Assessments: React.FC<AssessmentsProps> = ({ machinery }) => {
  const [curView, setCurView] = useState<'list' | 'quiz'>('list');
  const [selSystem, setSelSystem] = useState<MachinerySystem | null>(null);
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Generate mock questions based on machinery data
  const questions = useMemo(() => {
    if (!selSystem) return [];
    return [
      {
        q: `What is the primary purpose of the ${selSystem.name}?`,
        options: [selSystem.purpose, "To provide auxiliary lighting", "To manage ballast water", "To control deck cranes"],
        correct: 0
      },
      {
        q: `Which of these is a core component of the ${selSystem.name}?`,
        options: ["Standard Anchor", selSystem.components[0], "VHF Radio", "Lifeboat Davit"],
        correct: 1
      },
      {
        q: `In watchkeeping, what is a critical parameter for the ${selSystem.name}?`,
        options: ["Galley temperature", "Bridge visibility", selSystem.watchkeeping[0], "Anchor chain length"],
        correct: 2
      }
    ];
  }, [selSystem]);

  const handleAnswer = (idx: number) => {
    if (idx === questions[step].correct) setScore(s => s + 1);
    
    if (step < questions.length - 1) {
      setStep(s => s + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurView('list');
    setSelSystem(null);
    setScore(0);
    setStep(0);
    setIsFinished(false);
  };

  return (
    <div className="space-y-8">
      {curView === 'list' ? (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[32px] border border-[#e4e7ed] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0f1724] mb-1">Technical Competency Assessments</h2>
                <p className="text-sm text-[#8694a8]">Validate your knowledge of engine room systems and operational protocols.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-[#f8f9fb] border border-[#e4e7ed] rounded-2xl text-center">
                <div className="text-xs font-bold text-[#8694a8] uppercase tracking-widest mb-1">Completed</div>
                <div className="text-xl font-bold text-[#0f1724]">12/78</div>
              </div>
              <div className="px-6 py-3 bg-[#f8f9fb] border border-[#e4e7ed] rounded-2xl text-center">
                <div className="text-xs font-bold text-[#8694a8] uppercase tracking-widest mb-1">Avg. Score</div>
                <div className="text-xl font-bold text-[#0f1724]">94%</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machinery.slice(0, 9).map((m) => (
              <div 
                key={m.id}
                className="bg-white rounded-[32px] border border-[#e4e7ed] p-8 hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer"
                onClick={() => { setSelSystem(m); setCurView('quiz'); }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#f8f9fb] border border-[#e4e7ed] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {m.icon}
                  </div>
                  <div className="flex items-center gap-1 text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Passed</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0f1724] mb-2">{m.name}</h3>
                <p className="text-xs text-[#8694a8] font-mono mb-6 uppercase tracking-wider">{m.cat}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#8694a8] uppercase tracking-widest">
                    <Timer className="w-3 h-3" /> 5 Mins
                  </div>
                  <div className="flex items-center gap-1 text-blue-600 text-xs font-bold">
                    Start Assessment <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div 
                key="quiz-active"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-[40px] border border-[#e4e7ed] overflow-hidden shadow-2xl"
              >
                <div className="p-10 border-b border-[#e4e7ed] bg-[#f8f9fb] flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl border border-[#e4e7ed] flex items-center justify-center text-2xl">
                      {selSystem?.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f1724]">{selSystem?.name}</h3>
                      <p className="text-[10px] text-[#8694a8] font-bold uppercase tracking-widest">Question {step + 1} of {questions.length}</p>
                    </div>
                  </div>
                  <button onClick={resetQuiz} className="text-xs font-bold text-[#8694a8] hover:text-[#0f1724] uppercase tracking-widest">Exit</button>
                </div>

                <div className="p-12">
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0f1724] leading-tight mb-4">{questions[step].q}</h2>
                    <div className="w-full h-1.5 bg-[#f0f2f6] rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {questions[step].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        className="p-6 rounded-2xl border border-[#e4e7ed] text-left hover:border-blue-600 hover:bg-blue-50/50 transition-all group flex items-center justify-between"
                      >
                        <span className="text-sm font-medium text-[#4b5568] group-hover:text-[#0f1724]">{opt}</span>
                        <Circle className="w-4 h-4 text-[#e4e7ed] group-hover:text-blue-600" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="quiz-result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[40px] border border-[#e4e7ed] p-16 text-center shadow-2xl"
              >
                <div className="w-24 h-24 bg-blue-600 rounded-[32px] flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-blue-200">
                  <Trophy className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold text-[#0f1724] mb-2">Assessment Complete!</h2>
                <p className="text-[#8694a8] mb-12">You've successfully validated your technical knowledge for the {selSystem?.name}.</p>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div className="p-8 bg-[#f8f9fb] rounded-3xl border border-[#e4e7ed]">
                    <div className="text-xs font-bold text-[#8694a8] uppercase tracking-widest mb-1">Your Score</div>
                    <div className="text-4xl font-bold text-[#0f1724]">{Math.round((score / questions.length) * 100)}%</div>
                  </div>
                  <div className="p-8 bg-[#f8f9fb] rounded-3xl border border-[#e4e7ed]">
                    <div className="text-xs font-bold text-[#8694a8] uppercase tracking-widest mb-1">Status</div>
                    <div className="text-4xl font-bold text-emerald-600">PASSED</div>
                  </div>
                </div>

                <button 
                  onClick={resetQuiz}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                >
                  Return to Dashboard
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Assessments;

// 

<EnvironmentContext>
This information is provided as context about user environment. Only consider it if it's relevant to the user request ignore it otherwise.

<OPEN-EDITOR-FILES>
No files are open
</OPEN-EDITOR-FILES>

<ACTIVE-EDITOR-FILE>
No file is active in editor
</ACTIVE-EDITOR-FILE>
</EnvironmentContext>