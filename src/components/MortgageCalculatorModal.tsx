import React, { useState } from 'react';
import { X, Calculator, DollarSign, Percent, Calendar, ShieldAlert } from 'lucide-react';

interface MortgageCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MortgageCalculatorModal: React.FC<MortgageCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [propertyPrice, setPropertyPrice] = useState(850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.75);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.15); // % annual
  const [annualInsurance, setAnnualInsurance] = useState(2400);

  const downPaymentAmount = propertyPrice * (downPaymentPercent / 100);
  const loanAmount = propertyPrice - downPaymentAmount;
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;

  const monthlyPrincipalAndInterest =
    loanAmount > 0 && monthlyInterestRate > 0
      ? (loanAmount *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths))) /
        (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
      : 0;

  const monthlyTax = (propertyPrice * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = annualInsurance / 12;
  const totalMonthlyPayment = Math.round(
    monthlyPrincipalAndInterest + monthlyTax + monthlyInsurance
  );

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#F7F4EE] w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden border border-[#E9E3D8] my-auto flex flex-col">
        {/* Header */}
        <div className="bg-[#17352D] text-[#F7F4EE] px-6 py-4 flex items-center justify-between border-b border-[#B49A63]/30">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#B49A63]" />
            <h3 className="font-serif text-lg font-bold">Mortgage &amp; Land Loan Estimator</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#E9E3D8] hover:text-white rounded-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-calc-purchase-price" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                Purchase Price ($)
              </label>
              <input
                id="modal-calc-purchase-price"
                type="number"
                step="10000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2.5 px-3 text-sm focus:outline-none focus:border-[#17352D]"
              />
            </div>

            <div>
              <label htmlFor="modal-calc-down-payment" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                Down Payment ({downPaymentPercent}% = {formatCurrency(downPaymentAmount)})
              </label>
              <input
                id="modal-calc-down-payment"
                type="range"
                min="0"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full mt-2 accent-[#17352D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="modal-calc-interest-rate" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                Interest Rate (%)
              </label>
              <input
                id="modal-calc-interest-rate"
                type="number"
                step="0.125"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2 px-3 text-xs"
              />
            </div>

            <div>
              <label htmlFor="modal-calc-loan-term" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                Loan Term
              </label>
              <select
                id="modal-calc-loan-term"
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value))}
                className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2 px-3 text-xs"
              >
                <option value={15}>15 Years Fixed</option>
                <option value={20}>20 Years (Land Loan)</option>
                <option value={25}>25 Years</option>
                <option value={30}>30 Years Fixed</option>
              </select>
            </div>

            <div>
              <label htmlFor="modal-calc-tax-rate" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                Tax Rate (%/yr)
              </label>
              <input
                id="modal-calc-tax-rate"
                type="number"
                step="0.05"
                value={propertyTaxRate}
                onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2 px-3 text-xs"
              />
            </div>
          </div>

          {/* Breakdown Card */}
          <div className="p-6 bg-[#17352D] text-[#F7F4EE] rounded-sm shadow-md">
            <div className="text-center pb-4 border-b border-white/10 mb-4">
              <span className="text-[11px] uppercase tracking-widest text-[#B49A63] font-semibold block mb-1">
                Estimated Monthly Payment
              </span>
              <div className="font-serif text-4xl font-bold text-[#F7F4EE]">
                ${totalMonthlyPayment.toLocaleString()}
                <span className="text-xs font-sans font-normal text-[#E9E3D8]/70"> /month</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 bg-[#10241E] rounded-xs border border-white/10">
                <span className="text-[10px] text-[#E9E3D8]/70 block">Principal &amp; Int.</span>
                <span className="font-mono font-bold text-sm text-[#B49A63]">
                  ${Math.round(monthlyPrincipalAndInterest).toLocaleString()}
                </span>
              </div>
              <div className="p-2 bg-[#10241E] rounded-xs border border-white/10">
                <span className="text-[10px] text-[#E9E3D8]/70 block">Property Tax</span>
                <span className="font-mono font-bold text-sm text-[#F7F4EE]">
                  ${Math.round(monthlyTax).toLocaleString()}
                </span>
              </div>
              <div className="p-2 bg-[#10241E] rounded-xs border border-white/10">
                <span className="text-[10px] text-[#E9E3D8]/70 block">Insurance</span>
                <span className="font-mono font-bold text-sm text-[#F7F4EE]">
                  ${Math.round(monthlyInsurance).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] border-t border-[#E9E3D8] px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#17352D] text-[#F7F4EE] text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
