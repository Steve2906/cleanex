"use client";

import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<string>("");
  const [recipientNumber, setRecipientNumber] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");


  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (Number(value) >= 0) {
      setAmount(value);
    }
  };

  const isRecipientNumberValid = recipientNumber.trim().length === 7;
  const areAllFieldsFilled = amount.trim() !== "" && username.trim() !== "" && purpose.trim() !== "";

  return (
    <div>
      {step === 1 && (
        <div className="text-center p-4">
          <img src="/logo.png" alt="CleanEx Logo" className="mx-auto w-24 h-24 rounded-custom" />
          <h1 className="text-3xl font-bold mt-4">CleanEx</h1>
          <p className="mt-2 mb-6 text-secondary mx-auto w-15 h-15">Перевод фиатных денег в криптовалюту легко и безопасно.</p>
          <div className="mb-4">
            <label htmlFor="recipientNumber" className="text-accent mb-2">Номер получателя</label>
            <input
              type="text"
              id="recipientNumber"
              placeholder="●●●●●●●"
              maxLength={7}
              value={recipientNumber}
              onChange={(e) => setRecipientNumber(e.target.value)}
              className="text-center mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            onClick={() => setStep(2)}
            className={`mt-6 px-4 py-2 rounded-full button button-primary ${
              isRecipientNumberValid ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            disabled={!isRecipientNumberValid}
          >
            Продолжить
          </button>
          <div className="text-center text-sm text-gray-500 p-4">
              <strong>CleanEx Beta.</strong> Хотите получать платежи? Напишите нам на почту <a href="mailto:cleanex-info@gmail.com" className="text-blue-500">cleanex-info@gmail.com</a> и станьте участником бета-тестирования.
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="w-full h-full max-w-md p-4">
          <div className="flex justify-start mb-4 w-full">
            <button onClick={() => setStep(1)} className="flex items-center text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Назад
            </button>
          </div>
          <h2 className="text-xl font-bold mb-0.5">Введите детали платежа</h2>
          <h2 className="text-m text-secondary mb-4">Получатель: <strong>{recipientNumber}</strong></h2>
          <div className="mb-6">
            <label htmlFor="amount" className="block text-accent mb-2">Сумма в USD</label>
            <input
              type="number"
              id="amount"
              className="text-left text-3xl font-bold p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder="0.00"
              min={0}
              value={amount}
              onChange={handleAmountChange}
              step={10}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-accent">Имя пользователя</label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="purpose" className="block text-accent">Назначение платежа</label>
            <textarea
              id="purpose"
              rows={3}
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          {areAllFieldsFilled && (
          <div className="flex justify-between mt-6">
          <button className="image-button">
              <img src="/Visa_2021.svg" alt="Visa" className="h-6 mr-2" />
              <img src="/Mastercard-logo.svg" alt="MasterCard" className="h-6" />
            </button>
            <button className="image-button">
              <img src="/Mir-logo.SVG.svg" alt="Мир" className="h-6 mr-2" />
            </button>
          </div> )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
