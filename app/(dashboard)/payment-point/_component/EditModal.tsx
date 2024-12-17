import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { paymentpointStaff } from '@/constants/constants';
import { cn } from '@/lib/utils';
import { SquarePen } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
  paymentPoint: string;
  status: 'Active' | 'Inactive';
  onDuty: string;
};

const EditModal = ({ paymentPoint, status, onDuty }: Props) => {
  const [activeChoice, setActiveChoice] = useState(status);

  const otherStaff = paymentpointStaff.filter((staff) => staff !== onDuty);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <SquarePen size={16} color="#091f8e" className="cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent className="">
        <AlertDialogHeader>
          <AlertDialogTitle>Payment point {paymentPoint}</AlertDialogTitle>
          <AlertDialogDescription>
            <form className="pt-5">
              <div>
                <label
                  htmlFor="staff"
                  className="font-semibold text-sm text-[#475569] text-start"
                >
                  Staff
                </label>
                <select
                  name="staff"
                  id="staff"
                  className="w-full border border-[#94A3B8] h-9 rounded-[8px] px-[10px] text-sm outline-none"
                >
                  <option value={onDuty}>{onDuty}</option>
                  {otherStaff.map((staff, index) => (
                    <option key={index} value={staff} className="text-sm">
                      {staff}
                    </option>
                  ))}
                </select>
              </div>

              <section className="my-5 flex gap-6 items-center">
                <div
                  className={cn('flex gap-2', {
                    null: activeChoice === 'Active',
                  })}
                >
                  <div
                    onClick={() => setActiveChoice('Active')}
                    className={cn(
                      'w-5 h-5 border border-[#64748B] outline-[6px] cursor-pointer rounded-[50%]',
                      {
                        'w-5 h-5 border-[6px] border-[#0C27AD]':
                          activeChoice === 'Active',
                      }
                    )}
                  ></div>
                  <p className="w-fit flex items-center">Active</p>
                </div>

                <div
                  className={cn('flex gap-2', {
                    null: activeChoice === 'Inactive',
                  })}
                >
                  <div
                    onClick={() => setActiveChoice('Inactive')}
                    className={cn(
                      'w-5 h-5 border border-[#64748B] outline-[6px] cursor-pointer rounded-[50%]',
                      {
                        'w-5 h-5 border-[6px] border-[#0C27AD]':
                          activeChoice === 'Inactive',
                      }
                    )}
                  ></div>
                  <p className="w-fit flex items-center">Inactive</p>
                </div>
              </section>

              <div className="flex justify-between items-center text-sm font-semibold gap-5 h-9 text-center mt-8">
                <button
                  type="button"
                  className="flex-[1] rounded-[8px] h-full bg-[#091F8E] text-white "
                >
                  Update
                </button>
                <AlertDialogCancel className="flex-[1] rounded-[8px] h-full text-[#091F8E] bg-white border border-[#091F8E]">
                  Cancel
                </AlertDialogCancel>
              </div>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditModal;
