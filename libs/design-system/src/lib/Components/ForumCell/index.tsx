import React from 'react';
import CommentIcon from '../icons/CommentIcon';
import RoundImage from './RoundImage';

export type User = {
  profilePicture: string;
  name: string;
};

export type ForumCellProps = {
  numComments: number;
  heading: string;
  subheading: string;
  participants: User[];
};

const ForumCell = ({ heading, subheading, participants, numComments }: ForumCellProps) => {
  return (
    <div className="flex items-center py-6 bg-white rounded-lg md:flex-row px-11 dark:bg-gray-800 sm:flex-col sm:px-8 hover:shadow-2xl">
      <div className='flex-1'>
        <p className="mb-2 text-xl font-semibold">{heading}</p>
        <span className="text-primary-gray-300">{subheading}</span>
      </div>
      <div className="flex justify-between md:mt-0 sm:mt-8">
        <div className="relative w-32 h-12">
          {participants.map((participant, index) =>
            <div className='absolute inset-y-0' style={{ left: `${index * 26}px` }} key={participant.name}>
              <RoundImage imageUri={participant.profilePicture} altText={participant.name} />
            </div>
          )}
        </div>
        <div className="flex items-center ml-3 text-primary-gray-300 dark:text-primary-gray-100 sm:mt-2 md:mt-0"><CommentIcon /> <span className="ml-3">{numComments}</span></div>
      </div>
    </div >
  )
}

export default ForumCell;