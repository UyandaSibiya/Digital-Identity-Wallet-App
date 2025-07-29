import React, { useState } from 'react';

const scenarios = [
  {
    title: "Life Insurance – Lerato's Story",
    story: `Lerato is a single mother with two young children. She works full-time and has a basic life cover through her employer. She believes that’s enough, so she never bothered to take out a personal life insurance policy. Sadly, Lerato passes away in a car accident. Her employer’s policy only covers one year’s worth of her salary, which isn't enough to support her children long-term. Her sister, who takes in the kids, struggles financially.`,
    questions: [
      {
        question: "What mistake did Lerato make regarding her life insurance?",
        options: [
          "She had too much coverage",
          "She didn’t update her employer about her dependents",
          "She relied only on employer-provided life insurance",
        ],
        answer: 2,
      },
      {
        question: "Why is it risky to depend only on workplace life insurance?",
        options: [
          "It’s too expensive",
          "You lose it if you leave your job or it might not be enough",
        ],
        answer: 1,
      },
      {
        question: "What would have helped Lerato’s children the most?",
        options: [
          "A personal life insurance policy",
          "More toys",
          "A better job",
        ],
        answer: 0,
      },
      {
        question: "True or False: Life insurance is only necessary when you’re married.",
        options: ["True", "False"],
        answer: 1,
      },
      {
        question: "Who is the main purpose of life insurance intended to protect?",
        options: ["The policyholder", "The employer", "The people who depend on you"],
        answer: 2,
      },
    ],
  },
  {
    title: "The Will That Never Was – Thabo’s Story",
    story: `Thabo was a loving father of three and owned a house, a car, and some investments. But he never created a will because he “was still young” and didn’t think it was urgent. When Thabo passed away suddenly, his family was left confused. His relatives argued over who should inherit what. The house ended up in a legal dispute for over a year.`,
    questions: [
      {
        question: "What caused confusion in Thabo’s family after his death?",
        options: [
          "He didn’t own anything",
          "He didn’t leave a will",
          "He had too many children",
        ],
        answer: 1,
      },
      {
        question: "What does dying intestate mean?",
        options: [
          "You die in another country",
          "You die without insurance",
          "You die without a legal will",
        ],
        answer: 2,
      },
      {
        question: "Which of the following would have helped Thabo's family avoid the dispute?",
        options: [
          "More money",
          "A properly written will",
          "Buying a new house",
        ],
        answer: 1,
      },
      {
        question: "True or False: Wills are only for the elderly or rich.",
        options: ["True", "False"],
        answer: 1,
      },
      {
        question: "Why is it important to have a will even if you are young?",
        options: [
          "To avoid paying taxes",
          "To make sure your wishes are known and your family is protected",
          "To prevent relatives from attending your funeral",
        ],
        answer: 1,
      },
    ],
  },
  {
    title: "Locked Out – Zanele’s Story",
    story: `Zanele keeps all her important documents in a shoebox under her bed: her insurance policies, will, ID, and banking details. One day, her house catches fire while she’s at work. Everything burns, including all her documents. She struggles to claim from her insurer because she doesn’t remember her policy number and has no digital backup. She loses valuable time and money trying to recover everything.`,
    questions: [
      {
        question: "What could Zanele have done to protect her documents?",
        options: [
          "Burned them herself",
          "Stored them online or in a fireproof safe",
          "Buried them in the yard",
        ],
        answer: 1,
      },
      {
        question: "Why is it important to keep backups of important documents?",
        options: [
          "So you can sell them",
          "For social media",
          "To make it easier to claim or access in emergencies",
        ],
        answer: 2,
      },
      {
        question: "What is a good way to store your will and insurance policies?",
        options: [
          "Share them with a trusted person and store a copy digitally",
          "Post them on Instagram",
          "Throw them in your handbag",
        ],
        answer: 0,
      },
      {
        question: "True or False: You only need your insurance documents when you’re buying a policy.",
        options: ["True", "False"],
        answer: 1,
      },
      {
        question: "What lesson can we learn from Zanele’s story?",
        options: [
          "Fires are rare, so paper is enough",
          "Always keep your documents somewhere no one can ever find them",
          "Organizing and backing up documents can save you during emergencies",
        ],
        answer: 2,
      },
    ],
  },
];

export default function ScenarioQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  let flatQuestions = [];
  scenarios.forEach((s, i) => {
    s.questions.forEach((q, j) => {
      flatQuestions.push({
        ...q,
        scenarioTitle: i === 0 || j === 0 ? s.title : null,
        scenarioStory: i === 0 || j === 0 ? s.story : null,
      });
    });
  });

  const current = flatQuestions[step];

  const handleAnswer = (index) => {
    if (index === current.answer) {
      setScore((prev) => prev + 1);
    }
    if (step + 1 < flatQuestions.length) {
      setStep((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {!showResults ? (
        <div className="bg-white p-6 rounded-xl shadow">
          {current.scenarioTitle && (
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">{current.scenarioTitle}</h2>
              <p className="text-sm text-gray-700">{current.scenarioStory}</p>
            </div>
          )}
          <h3 className="text-lg font-semibold mb-4">{current.question}</h3>
          <ul className="space-y-3">
            {current.options.map((option, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleAnswer(idx)}
                  className="w-full bg-blue-100 hover:bg-blue-200 text-left p-3 rounded-xl"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Question {step + 1} of {flatQuestions.length}
          </p>
        </div>
      ) : (
        <div className="text-center bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
          <p className="text-lg">You scored {score} out of {flatQuestions.length}.</p>
          <button
            onClick={() => {
              setStep(0);
              setScore(0);
              setShowResults(false);
            }}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-xl"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
