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
import { CirclePlus } from 'lucide-react';
import React from 'react';

const AddnewPaymentpoint = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          className="bg-[#091F8E] text-white rounded-[8px] min-w-28 h-9 px-3 flex items-center justify-center gap-1 font-semibold text-sm"
        >
          <CirclePlus size={16} strokeWidth={3} />
          Add New
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[446px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Add New Payment Point</AlertDialogTitle>
          <AlertDialogDescription>
            <form className="pt-5">
              <section className="flex items-center justify-between gap-5 px-2">
                <div className="flex-[2]">
                  <label
                    htmlFor="paymentpoint"
                    className="font-semibold text-sm text-[#475569]"
                  >
                    Payment Point
                  </label>
                  <input
                    type="text"
                    name="paymentpoint"
                    id="paymentpoint"
                    placeholder="1"
                    className="w-full border border-[#94A3B8] h-9 rounded-[8px] px-[10px] text-sm outline-none text-center"
                  />
                </div>
                <div className="flex-[5]">
                  <label
                    htmlFor="staff"
                    className="font-semibold text-sm text-[#475569]"
                  >
                    Staff
                  </label>
                  <select
                    name="staff"
                    id="staff"
                    className="w-full border border-[#94A3B8] h-9 rounded-[8px] px-[10px] text-sm outline-none"
                  >
                    {paymentpointStaff.map((staff, index) => (
                      <option key={index} value={staff} className="text-sm">
                        {staff}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              <div className="flex justify-between items-center text-sm font-semibold gap-5 h-9 text-center mt-9">
                <button
                  type="button"
                  className="flex-[1] rounded-[8px] h-full bg-[#091F8E] text-white "
                >
                  Add
                </button>
                <AlertDialogCancel className="flex-[1] rounded-[8px] h-full text-[#0F172A] bg-[#F1F5F9] border-0">
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

export default AddnewPaymentpoint;
