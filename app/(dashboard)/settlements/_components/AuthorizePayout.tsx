import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { primaryAccounts } from '@/constants/constants';
import { CirclePlus } from 'lucide-react';
import React, { useState } from 'react';
import SuccesModal from '../../../../components/SuccesModal/SuccesModal';

const AuthorizePayout = () => {
  const [step, setStep] = useState('form');

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          onClick={() => setStep('form')}
          className="bg-[#091F8E] text-white rounded-[8px] min-w-28 h-9 px-3 flex items-center justify-center gap-1 font-semibold text-sm"
        >
          <CirclePlus size={16} strokeWidth={3} />
          Authorize Payout
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:min-w-[500px] p-0">
        <AlertDialogHeader className="">
          {step === 'form' && (
            <AlertDialogTitle className="text-base pt-6 px-6">
              You are about to authorize this payment to a settlement account
            </AlertDialogTitle>
          )}
          <AlertDialogDescription>
            {step === 'form' ? (
              <form className="pt-5 pb-6 px-6">
                <section className="flex items-center justify-between min-[410px]:justify-center min-[410px]:gap-10 w-full">
                  <div className="w-[6.5rem] min-[420px]:w-[9.5rem]">
                    <label
                      htmlFor="amount"
                      className="font-semibold text-sm text-[#475569]"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      placeholder="₦12,984,098"
                      className="w-full border border-[#94A3B8] h-9 rounded-[8px] px-[10px] text-sm outline-none"
                    />
                  </div>
                  <div className="w-[7.5rem] min-[420px]:w-[9.5rem]">
                    <label
                      htmlFor="primaryaccount"
                      className="font-semibold text-sm text-[#475569]"
                    >
                      Primary Account
                    </label>
                    <select
                      name="primaryaccount"
                      id="primaryaccount"
                      className="w-full border border-[#94A3B8] h-9 rounded-[8px] px-[6px] sm:px-[10px] text-sm outline-none"
                    >
                      {primaryAccounts.map((account, index) => (
                        <option key={index} value={account} className="text-sm">
                          {account}
                        </option>
                      ))}
                    </select>
                  </div>
                </section>

                <div className="flex justify-between items-center text-sm font-semibold gap-7 h-9 text-center mt-9 mx-5 sm:mx-10">
                  <button
                    onClick={() => {
                      setStep('confirmation');
                      //   setIsOpen(true);
                    }}
                    className="flex-[1] rounded-[8px] h-full bg-[#091F8E] text-white "
                  >
                    Confirm
                  </button>
                  <AlertDialogCancel className="flex-[1] rounded-[8px] h-full text-[#091F8E] bg-white border border-[#091F8E]">
                    Cancel
                  </AlertDialogCancel>
                </div>
              </form>
            ) : (
              <SuccesModal
                message="Payment has been successfully authorized!"
                close="return"
              />
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AuthorizePayout;
