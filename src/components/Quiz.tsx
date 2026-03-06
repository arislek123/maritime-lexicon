import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { terms, type Term } from '../data/terms';
import { CheckCircle2, XCircle, Trophy, RefreshCcw, ArrowRight, Brain } from 'lucide-react';
import { useNavigate } from 'react-router';

interface Question {
  term: Term;
  options: string[];
  correctIndex: number;
}

export const Quiz: React.FC = () => {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'finished'>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const navigate = useNavigate();

  const generateQuestions = () => {
    const shuffledTerms = [...terms].sort(() => Math.random() - 0.5).slice(0, 10);
    const newQuestions = shuffledTerms.map(term => {
      const distractors = terms
        .filter(t => t.id !== term.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(t => t.title);
      
      const options = [...distractors, term.title].sort(() => Math.random() - 0.5);
      const correctIndex = options.indexOf(term.title);
      
      return { term, options, correctIndex };
    });
    setQuestions(newQuestions);
    setGameState('playing');
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === questions[currentIndex].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setGameState('finished');
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-8 py-12"
          >
            <div className="inline-flex p-6 bg-blue-100 dark:bg-blue-900/30 rounded-3xl text-blue-600 dark:text-blue-400 mb-4">
              <Brain size={64} />
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Maritime Master Quiz</h2>
              <p className="text-lg text-slate-500 dark:text-slate-400">Test your knowledge of nautical terminology with 10 random questions.</p>
            </div>
            <button
              onClick={generateQuestions}
              className="px-12 py-4 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95"
            >
              Start Quiz
            </button>
          </motion.div>
        )}

        {gameState === 'playing' && currentQuestion && (
          <motion.div
            key="playing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Question {currentIndex + 1} of 10</span>
                <div className="h-2 w-48 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / 10) * 100}%` }}
                  />
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Score</span>
                <div className="text-2xl font-black text-slate-900 dark:text-white">{score}</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Which term is defined as:
                <span className="block mt-2 text-blue-600 dark:text-blue-400 italic font-medium">
                  "{currentQuestion.term.definition}"
                </span>
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, idx) => {
                  const isCorrect = idx === currentQuestion.correctIndex;
                  const isSelected = idx === selectedAnswer;
                  
                  let buttonClass = "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700";
                  if (isAnswered) {
                    if (isCorrect) buttonClass = "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-700 dark:text-emerald-400";
                    else if (isSelected) buttonClass = "bg-rose-50 dark:bg-rose-900/20 border-rose-500 text-rose-700 dark:text-rose-400";
                    else buttonClass = "opacity-50 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={isAnswered}
                      className={`w-full p-5 rounded-2xl border-2 text-left font-bold transition-all flex items-center justify-between ${buttonClass}`}
                    >
                      <span>{option}</span>
                      {isAnswered && (
                        isCorrect ? <CheckCircle2 size={20} className="text-emerald-500" /> : 
                        isSelected ? <XCircle size={20} className="text-rose-500" /> : null
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between gap-4"
              >
                <div className="text-sm text-slate-500 dark:text-slate-400 italic">
                  {selectedAnswer === currentQuestion.correctIndex ? "Correct! Well done." : `Incorrect. The correct answer was ${currentQuestion.term.title}.`}
                </div>
                <button
                  onClick={nextQuestion}
                  className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  {currentIndex === questions.length - 1 ? 'See Results' : 'Next Question'}
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {gameState === 'finished' && (
          <motion.div
            key="finished"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 py-12"
          >
            <div className="relative inline-block">
              <div className="p-8 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-500">
                <Trophy size={80} />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -top-2 -right-2 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl border-4 border-white dark:border-slate-950"
              >
                {score}
              </motion.div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white">Quiz Complete!</h2>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                You scored <span className="text-blue-600 font-bold">{score} out of 10</span>.
                {score === 10 ? " Perfect score! You're a true Captain." : 
                 score >= 7 ? " Great job! You know your way around a ship." : 
                 " Keep studying, sailor! The sea is a vast place."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={generateQuestions}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
              >
                <RefreshCcw size={20} />
                Try Again
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                Back to Lexicon
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
