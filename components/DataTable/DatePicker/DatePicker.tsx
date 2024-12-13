'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function DatePicker() {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

  return (
    <div className="min-w-[18.25rem]">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[135px] h-9 justify-between items-center px-2 py-0 text-left text-sm font-normal text-[#0F172A]',
              !startDate && 'text-muted-foreground'
            )}
          >
            {startDate ? (
              format(startDate, 'dd/MM/yyyy')
            ) : (
              <span>1/11/2024</span>
            )}
            <div className="h-full flex items-center border-l border-[#CBD5E1] pl-2 ">
              <CalendarIcon />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <span className="px-2">-</span>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[135px] h-9 justify-between items-center px-2 py-0 text-left text-sm font-normal text-[#0F172A]',
              !endDate && 'text-muted-foreground'
            )}
          >
            {endDate ? format(endDate, 'dd/MM/yyyy') : <span>1/11/2024</span>}
            <div className="h-full flex items-center border-l border-[#CBD5E1] pl-2 ">
              <CalendarIcon />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={endDate}
            onSelect={setEndDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
